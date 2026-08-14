import { brand, fillBrandTokens, seoDescription, seoTitle } from './brand';

/**
 * Title clamp lives here — NOT in brand.ts.
 * Brand Studio rewrites brand.ts on every save; helpers here stay stable.
 */
export function seoPageTitle(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 70 ? text : `${text.slice(0, 67).trim()}…`;
}

export { brand, fillBrandTokens, seoDescription, seoTitle };

const copyDefaults = {
	tagline: 'Undetected {primaryKeyword} — ESP, wallhack, aimbot, and 2D radar for PC',
	summary:
		'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, wallhack, soft aim, 2D radar, and a Cloud DMA option, with {antiCheat} maintenance after patches.',
	heroLede: 'Valorant hacks with aimbot, wallhack ESP, and 2D radar — Cloud DMA option available.',
	blogLabel: '{game} Intel',
	ctaBuy: 'Buy now',
	ctaBuyShort: 'Buy',
	featuresIntro: 'Everything included in one license for {game} on Windows PC.',
	storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
	statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
	previewIntro: 'A quick look at {brand} — ESP, aimbot, radar, and updates after patches.',
	setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
	supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
	faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
	reviewsIntro: 'Real feedback from {brand} buyers — ESP, soft aim, radar, and support.',
	chipEsp: 'ESP / wallhack',
	chipAim: 'Soft aim',
	chipRadar: '2D radar',
	chipUpdates: 'Patch updates',
	navPreview: 'Preview',
	navFeatures: 'Features',
	navStore: 'Store',
	navStatus: 'Status',
	navReviews: 'Reviews',
} as const;

const seoDefaults = {
	homeTitle: 'Undetected {primaryKeyword} | ESP, Aimbot & Wallhack',
	homeDescription:
		'Buy undetected {primaryKeyword} for Windows PC. ESP, wallhack, aimbot, and 2D radar with {antiCheat} updates plus Cloud DMA. Compare plans and buy.',
	featuresTitle: '{game} Features | {brand}',
	featuresDescription:
		'Everything in one {game} license for Windows PC — ESP, aimbot, radar, and patch updates.',
	storeTitle: '{game} Store | {brand}',
	storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
	statusTitle: '{game} Status | {brand}',
	statusDescription:
		'Live status for {brand} after {game} or {antiCheat} patches. Check before you queue.',
	previewTitle: '{game} Preview | {brand}',
	previewDescription:
		'Quick preview of {brand} — ESP, aimbot, radar, and updates after {game} patches.',
	setupTitle: '{game} Setup | {brand}',
	setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
	supportTitle: '{game} Support | {brand}',
	supportDescription: 'Get help with {brand}. Email {email} with your order ID.',
	faqTitle: '{game} FAQ | {brand}',
	faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
	reviewsTitle: '{brand} Reviews | Buyer Feedback',
	reviewsDescription:
		'Real buyer reviews for {brand} — ESP, soft aim, radar, and patch updates on Windows PC.',
	blogTitle: '{game} Intel | {brand}',
	blogDescription: 'Guides and notes for {game} — meta tips, ESP, aimbot, and {antiCheat} updates.',
} as const;

type SeoShape = typeof seoDefaults;
type CopyShape = typeof copyDefaults;

/** Always-safe copy/seo — Brand Studio saves must never crash the site. */
const brandExtra = brand as typeof brand & { seo?: Partial<SeoShape>; copy?: Partial<CopyShape> };
export const brandSeo: SeoShape = { ...seoDefaults, ...brandExtra.seo };
export const brandCopy: CopyShape = { ...copyDefaults, ...brandExtra.copy };

/** Resolved EN home meta */
export function homeSeo() {
	return {
		title: seoPageTitle(brandSeo.homeTitle),
		description: seoDescription(brandSeo.homeDescription),
	};
}

/** Site config derived from brand — import this in layouts/components. */
export const siteConfig = {
	name: brand.name,
	url: brand.url,
	locale: brand.locale,
	market: brand.market,
	supportEmail: brand.supportEmail,
	logo: brand.logo,
	logoRaster: brand.logoRaster,
	logoRasterWidth: brand.logoRasterWidth,
	logoRasterHeight: brand.logoRasterHeight,
	logoAlt: brand.logoAlt,
	checkoutUrl: brand.checkoutUrl,
	defaultOgImage: brand.defaultOgImage,
	heroImage: brand.heroImage,
} as const;

/** Prefer brand.keywords — kept for Layout meta keywords. */
export const seoKeywords = brand.keywords.list;

/** Blog eyebrow / title suffix */
export const blogLabel = fillBrandTokens(brandCopy.blogLabel);

export const productInfo = {
	name: brand.name,
	shortName: brand.game,
	brand: brand.name,
	tagline: fillBrandTokens(brandCopy.tagline),
	summary: fillBrandTokens(brandCopy.summary),
	game: brand.game,
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: [...brand.platforms],
	updateCadence: fillBrandTokens(
		'Updates are published when {game} or {antiCheat} patches need a rebuild',
	),
	supportHours: 'Support requests are reviewed daily',
	plans: brand.plans.map((p) => ({ ...p })),
	currency: brand.currency,
	heroLede: fillBrandTokens(brandCopy.heroLede),
	productDetails: {
		heading: 'Product Details',
		body: fillBrandTokens(
			'{brand} is an undetected ESP and awareness toolkit for competitive play. See players, utility, and spike state through a stream-proof overlay with regular Vanguard-focused updates and 24/7 support.',
		),
	},
	/** Homepage FEATURES grid — two columns of 7. Do not add Warzone leftovers here. */
	featureList: [
		'Player ESP',
		'Health & Armor Bars',
		'Name ESP',
		'Weapon ESP',
		'Ability ESP',
		'Radar Hack',
		'FOV Circle (Private+)',
		'Bone ESP',
		'Distance ESP',
		'Box ESP',
		'Agent ESP',
		'Spike ESP',
		'Advanced Aimbot (Private+)',
		'Smoothing Control (Private+)',
	],
	features: {
		esp: [
			'Player ESP',
			'Health & Armor Bars',
			'Name ESP',
			'Weapon ESP',
			'Ability ESP',
			'Bone ESP',
			'Distance ESP',
			'Box ESP',
			'Agent ESP',
			'Spike ESP',
		],
		aimbot: ['FOV Circle (Private+)', 'Advanced Aimbot (Private+)', 'Smoothing Control (Private+)'],
		radar: ['Radar Hack'],
		general: [
			fillBrandTokens('{antiCheat} maintenance after patches'),
			'Digital delivery after checkout',
			'Setup guide and support',
		],
	},
} as const;
