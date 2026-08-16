/**
 * Cloudflare Worker — host canonicalization and path 301s before static assets.
 * Canonical site: https://valohacks.net
 * Locale cannibal + Tarkov legacy 301s live here (Workers _redirects cap is 100).
 */
import CANNIBAL_REDIRECTS from '../functions/cannibal-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'valohacks.net';
const LEGACY_HOSTS = new Set([
	'valoranthacks.net',
	'www.valoranthacks.net',
	'besttarkovcheats.com',
	'www.besttarkovcheats.com',
	'tarkovcheats.org',
	'www.tarkovcheats.org',
]);

/** Exact sources only — slash variants are added below. Destinations are Valorant URLs. */
const PATH_REDIRECTS_EXACT: Record<string, string> = {
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap-0.xml': '/sitemap.xml',
	'/tarkov-cheats': '/valorant-hacks/',
	'/tarkov-esp': '/valorant-esp/',
	'/tarkov-aimbot': '/valorant-aimbot/',
	'/tarkov-radar-hack': '/valorant-radar-hack/',
	'/tarkov-wallhack': '/valorant-wallhack/',
	'/battleye-bypass': '/vanguard-bypass/',
	'/best-tarkov-cheats': '/best-valorant-cheats/',
	'/undetected-tarkov-cheats': '/undetected-valorant-cheats/',
	'/escape-from-tarkov-cheats': '/valorant-hacks/',
	'/tarkov-esp-hack': '/valorant-esp/',
	'/tarkov-aimbot-hack': '/valorant-aimbot/',
	'/tarkov-cheats-2026': '/valorant-hacks/',
	'/tarkov-mod-menu': '/valorant-hacks/',
	'/tarkov-unlock-all': '/valorant-hacks/',
	'/tarkov-soft-aim': '/valorant-aimbot/',
	'/tarkov-cheat-download': '/setup/',
	'/reviews/tarkov-radar-hack-review-vanlifefn': '/reviews/tarkov-radar-hack-review-vanlifeeft/',
	'/reviews/tarkov-radar-hack-review-vanlifewz': '/reviews/tarkov-radar-hack-review-vanlifeeft/',
	'/reviews/tarkov-controller-soft-aim-review-ctrl-player99':
		'/reviews/tarkov-soft-aim-review-ctrl-player99/',
};

const PATH_REDIRECTS: Record<string, string> = (() => {
	const out: Record<string, string> = {};
	for (const [from, to] of Object.entries(PATH_REDIRECTS_EXACT)) {
		out[from] = to;
		out[from.endsWith('/') ? from.slice(0, -1) : `${from}/`] = to;
	}
	return out;
})();

function requestHost(request: Request, url: URL): string {
	const header = (request.headers.get('host') || '').split(':')[0].trim().toLowerCase();
	return header || url.hostname.toLowerCase();
}

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = requestHost(request, url);
	let changed = false;

	const proto = (() => {
		const visitor = request.headers.get('cf-visitor');
		if (visitor) {
			try {
				const scheme = JSON.parse(visitor).scheme;
				if (scheme) return String(scheme).toLowerCase();
			} catch {
				// ignore
			}
		}
		const forwarded = request.headers.get('x-forwarded-proto');
		if (forwarded) return forwarded.split(',')[0].trim().toLowerCase();
		return url.protocol.replace(':', '').toLowerCase();
	})();

	if (proto === 'http') {
		url.protocol = 'https:';
		changed = true;
	}

	if (host === `www.${CANONICAL_HOST}` || host.startsWith('www.') || LEGACY_HOSTS.has(host)) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

function pathRedirect(pathname: string): string | null {
	const exact = PATH_REDIRECTS[pathname] ?? (CANNIBAL_REDIRECTS as Record<string, string>)[pathname];
	if (exact) return exact;

	const bare = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
	if (
		bare.startsWith('/tarkov-') ||
		bare === '/battleye-bypass' ||
		bare === '/best-tarkov-cheats' ||
		bare === '/undetected-tarkov-cheats' ||
		bare === '/escape-from-tarkov-cheats'
	) {
		return '/valorant-hacks/';
	}

	return null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const target = canonicalUrl(request);
		if (target) {
			const destPath = pathRedirect(target.pathname);
			if (destPath) target.pathname = destPath;
			return Response.redirect(target.toString(), 301);
		}

		const destPath = pathRedirect(url.pathname);
		if (destPath) {
			return Response.redirect(new URL(destPath + url.search, url.origin).toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
