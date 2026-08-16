/**
 * Cloudflare Worker — host canonicalization before static assets.
 * Canonical site: https://valohacks.net
 */
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

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const target = canonicalUrl(request);
		if (target) {
			return Response.redirect(target.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
