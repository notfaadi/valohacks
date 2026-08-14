import { siteConfig } from './site';

/** Screenshots used across product pages — alts use plain Valorant hacks wording. */
export const valorantImages = {
	hero: '/images/hero-banner.webp',
	espWallhack: '/images/warzone-wallhack-skeleton.webp',
	aimbotCombat: '/images/warzone-aimbot-sniper.webp',
	aimbotSkeleton: '/images/warzone-aimbot-skeleton.webp',
	playerEsp: '/images/warzone-esp-radar.webp',
	cheatsCombat: '/images/warzone-cheats-combat.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/warzone-cheats-combat.webp',
	loadoutBuilder: '/images/warzone-esp-radar.webp',
	squadFight: '/images/warzone-aimbot-skeleton.webp',
	cheatsPackage: '/images/warzone-esp-radar.webp',
	headerArt: '/images/warzone-aimbot-skeleton.webp',
	battleRoyaleCombat: '/images/warzone-cheats-combat.webp',
	clutchFight: '/images/warzone-aimbot-sniper.webp',
	rebootFight: '/images/warzone-aimbot-sniper.webp',
	competitiveCombat: '/images/warzone-wallhack-skeleton.webp',
	competitiveMode: '/images/warzone-esp-player-tags.webp',
	battleRoyaleIsland: '/images/warzone-esp-player-tags.webp',
	product: [
		{ src: '/images/warzone-esp-player-tags.webp', alt: 'Valorant hacks ESP with player names' },
		{ src: '/images/warzone-wallhack-skeleton.webp', alt: 'Valorant hacks wallhack through walls' },
		{ src: '/images/warzone-aimbot-sniper.webp', alt: 'Valorant hacks aimbot on a sniper' },
		{ src: '/images/warzone-aimbot-skeleton.webp', alt: 'Valorant hacks aimbot with bone view' },
		{ src: '/images/warzone-esp-radar.webp', alt: 'Valorant hacks ESP and radar' },
		{ src: '/images/warzone-cheats-combat.webp', alt: 'Valorant hacks in a real fight' },
	],
	gallery: [
		{ src: '/images/warzone-cheats-combat.webp', alt: 'Valorant hacks in a real fight', featured: true },
		{ src: '/images/warzone-esp-player-tags.webp', alt: 'Valorant hacks ESP with player names' },
		{ src: '/images/warzone-wallhack-skeleton.webp', alt: 'Valorant hacks wallhack through walls' },
		{ src: '/images/warzone-aimbot-sniper.webp', alt: 'Valorant hacks aimbot on a sniper' },
		{ src: '/images/warzone-esp-radar.webp', alt: 'Valorant hacks radar on the map' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/warzone-esp-player-tags.webp', title: '', caption: '' },
		{ src: '/images/warzone-wallhack-skeleton.webp', title: '', caption: '' },
		{ src: '/images/warzone-aimbot-sniper.webp', title: '', caption: '' },
		{ src: '/images/warzone-aimbot-skeleton.webp', title: '', caption: '' },
		{ src: '/images/warzone-esp-radar.webp', title: '', caption: '' },
		{ src: '/images/warzone-cheats-combat.webp', title: '', caption: '' },
	],
} as const;
