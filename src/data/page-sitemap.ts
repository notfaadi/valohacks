import { siteConfig } from './site';
import { valorantImages } from './valorant';
import { englishPaths, pageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';
import {
	pageSitemapImageLabels,
	resolvedSitemapImages,
	sitemapLastmod,
} from './brand-sitemap';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/**
 * One screenshot per page — paths stay in valorantImages; titles/captions from brand tokens.
 */
const pageImageSrcById: Record<PageId, string> = {
	home: valorantImages.hero,
	'valorant-esp': valorantImages.playerEsp,
	'valorant-aimbot': valorantImages.aimbotCombat,
	features: valorantImages.aimbotSkeleton,
	pricing: valorantImages.cheatsCombat,
	setup: valorantImages.playerEsp,
	updates: valorantImages.hero,
	faq: valorantImages.aimbotSkeleton,
	support: valorantImages.cheatsCombat,
	undetected: valorantImages.espWallhack,
	wallhack: valorantImages.espWallhack,
	radar: valorantImages.playerEsp,
	vanguard: valorantImages.aimbotCombat,
	'cheats-2026': valorantImages.hero,
	hacks: valorantImages.cheatsCombat,
	'cheat-download': valorantImages.cheatsCombat,
	'mod-menu': valorantImages.playerEsp,
	'soft-aim': valorantImages.aimbotSkeleton,
	'best-cheats': valorantImages.hero,
	'aimbot-hack': valorantImages.aimbotSkeleton,
	'esp-hack': valorantImages.espWallhack,
	'unlock-all': valorantImages.playerEsp,
	privacy: valorantImages.aimbotCombat,
	refund: valorantImages.cheatsCombat,
	terms: valorantImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[sitemap] No image path configured for pageId: ${pageId}`);
	}
}

/**
 * Canonical English sitemap entries — always includes every pageId from routing.
 * Absolute locs use siteConfig.url (from brand.url).
 */
export const pageSitemapEntries: PageSitemapEntry[] = pageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: sitemapLastmod(meta.lastmod),
		images: [img(pageImageSrcById[pageId], labels.title, labels.caption)],
	};
});

/** Unique keyword images for the dedicated image sitemap (editable in Brand Studio). */
export const imageSitemapEntries: SitemapImage[] = resolvedSitemapImages().map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
