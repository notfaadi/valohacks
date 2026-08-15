/** Canonical host + HTTPS + path redirects for Workers and Pages. */
export const CANONICAL_ORIGIN = 'https://valohacks.net';
export const APEX_HOST = 'valohacks.net';
export const WWW_HOST = 'www.valohacks.net';

/** Legacy domains → canonical apex (301). */
export const LEGACY_HOSTS = new Set([
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'valorantscheats.net',
	'www.valorantscheats.net',
	'valorantscheats.com',
	'www.valorantscheats.com',
	'valorantscheats.xyz',
	'www.valorantscheats.xyz',
	'valoranthacks.net',
	'www.valoranthacks.net',
]);

export const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	'/warzone-hacks': '/valorant-hacks/',
	'/warzone-hacks/': '/valorant-hacks/',
	'/warzone-esp': '/valorant-esp/',
	'/warzone-esp/': '/valorant-esp/',
	'/warzone-aimbot': '/valorant-aimbot/',
	'/warzone-aimbot/': '/valorant-aimbot/',
	'/warzone-cheats-2026': '/valorant-cheats-2026/',
	'/warzone-cheats-2026/': '/valorant-cheats-2026/',
	'/valorant-cheats': '/valorant-cheats-2026/',
	'/valorant-cheats/': '/valorant-cheats-2026/',
	'/ricochet-bypass': '/vanguard-bypass/',
	'/ricochet-bypass/': '/vanguard-bypass/',
	'/fortnite-aimbot': '/valorant-aimbot/',
	'/fortnite-aimbot/': '/valorant-aimbot/',
	'/fortnite-esp': '/valorant-esp/',
	'/fortnite-esp/': '/valorant-esp/',
	'/fortnite-hacks': '/valorant-hacks/',
	'/fortnite-hacks/': '/valorant-hacks/',
	'/eac-bypass': '/vanguard-bypass/',
	'/eac-bypass/': '/vanguard-bypass/',
	'/eac-bypass-fortnite': '/vanguard-bypass/',
	'/eac-bypass-fortnite/': '/vanguard-bypass/',
	'/blog/patch-notes-buffs-nerfs-vaults': '/blog/valorant-patch-notes-guide/',
	'/blog/patch-notes-buffs-nerfs-vaults/': '/blog/valorant-patch-notes-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks': '/blog/valorant-skin-leaks-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks/': '/blog/valorant-skin-leaks-guide/',
	'/blog/hammer-ar-s-tier-data-analysis': '/blog/valorant-weapon-tier-list/',
	'/blog/hammer-ar-s-tier-data-analysis/': '/blog/valorant-weapon-tier-list/',
	'/blog/zero-build-meta-broken-aggressive-strategies':
		'/blog/valorant-competitive-aggressive-strategies/',
	'/blog/zero-build-meta-broken-aggressive-strategies/':
		'/blog/valorant-competitive-aggressive-strategies/',
	'/blog/fncs-meta-watch-tournament-drops': '/blog/valorant-tournament-meta-guide/',
	'/blog/fncs-meta-watch-tournament-drops/': '/blog/valorant-tournament-meta-guide/',
	'/blog/secret-loot-routes-full-gold': '/blog/valorant-loot-routes-guide/',
	'/blog/secret-loot-routes-full-gold/': '/blog/valorant-loot-routes-guide/',
	'/blog/bugha-settings-pro-setup': '/blog/valorant-pro-settings-guide/',
	'/blog/bugha-settings-pro-setup/': '/blog/valorant-pro-settings-guide/',
	'/blog/creative-warmup-maps-pros-use': '/blog/valorant-warmup-maps-ranked/',
	'/blog/creative-warmup-maps-pros-use/': '/blog/valorant-warmup-maps-ranked/',
	'/reviews/valorant-esp-zero-build-review-buildsr4k':
		'/reviews/valorant-esp-competitive-review-buildsr4k/',
	'/reviews/valorant-esp-zero-build-review-buildsr4k/':
		'/reviews/valorant-esp-competitive-review-buildsr4k/',
	'/reviews/valorant-radar-hack-review-vanlifefn': '/reviews/valorant-radar-hack-review-vanlifewz/',
	'/reviews/valorant-radar-hack-review-vanlifefn/': '/reviews/valorant-radar-hack-review-vanlifewz/',
};

export const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

export function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

export function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'no-store');
		headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
	}
}

function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

function redirectResponse(location) {
	const headers = new Headers({
		Location: location,
		'Cache-Control': 'no-store',
		'CDN-Cache-Control': 'no-store',
		'Cloudflare-CDN-Cache-Control': 'no-store',
	});
	applySecurityHeaders(headers);
	return new Response(null, { status: 301, headers });
}

/** 301 to https://valohacks.net + path/query when host or protocol is wrong. */
export function canonicalRedirect(request) {
	const url = new URL(request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		return redirectResponse(new URL(mappedPath + url.search, CANONICAL_ORIGIN).toString());
	}

	const pathRedirect =
		PATH_REDIRECTS[url.pathname] ??
		xmlTrailingSlashRedirect(url.pathname) ??
		trailingSlashRedirect(url.pathname);
	if (pathRedirect) {
		return redirectResponse(new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString());
	}

	return null;
}

export async function handleCanonicalFetch(request, fetchAsset) {
	const redirected = canonicalRedirect(request);
	if (redirected) return redirected;

	const response = await fetchAsset(request);
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');
	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
