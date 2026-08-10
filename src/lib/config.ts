export const SITE = {
  name: 'Mana Games',
  tagline: 'Your LGS for anything TCG!',
  city: 'Berlin',
  street: 'Blissestr. 5',
  zip: '10715 Berlin',
  email: 'info@managames.de',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Blissestr.+5,+10715+Berlin',
};

export const SHOP_URL = 'https://shop.example.com';

export const INSTAGRAM_URL = 'https://www.instagram.com/managamesberlin/';
export const YOUTUBE_URL = 'https://www.youtube.com/channel/example';
export const TWITCH_URL = 'https://www.twitch.tv/managames2023';
export const TWITTER_URL = 'https://www.twitter.com/example';

/**
 * Image slots. If a file is missing from /public, `fallback` kicks in.
 * `pending: true` renders a styled placeholder until the image arrives.
 */
export const MEDIA = {
  // No fallback on purpose: the old logo (PB.jpeg) must not be shown any more.
  // Until /logo.png exists, <BrandMark> renders a drawn card fan instead.
  logo: { src: '/Mana Games Logo.png' },
  storefront: { src: '/storefront.jpeg', fallback: '/VordererLaden.jpeg' },
  community: { src: '/community.jpeg', fallback: '/MY.jpeg' },
  signage: { src: '/Mana Games.png' },
  shelf: { src: '/Regal.jpeg', pending: false },
};

export type GamePattern =
  | 'magic'
  | 'yugioh'
  | 'pokemon'
  | 'onepiece'
  | 'naruto'
  | 'dragonball'
  | 'riftbound'
  | 'fleshblood'
  | 'digimon';

export type Game = {
  name: string;
  /** Short form used for the badges in the tournament schedule */
  key: string;
  color: string;
  blurb: string;
  pattern: GamePattern;
};

export const GAMES: Game[] = [
  { name: 'Magic: The Gathering', key: 'Magic', color: '#f59e0b', blurb: 'Standard · Pioneer · Modern · Pauper · Draft · Highlander · Premodern', pattern: 'magic' },
  { name: 'Yu-Gi-Oh!', key: 'Yu-Gi-Oh!', color: '#a855f7', blurb: 'Goat · Edison · HAT · Perfect Circle · Charlestone · Nexus Night', pattern: 'yugioh' },
  { name: 'Pokémon', key: 'Pokemon', color: '#facc15', blurb: 'Singles, sealed products and weekly locals', pattern: 'pokemon' },
  { name: 'One Piece', key: 'One Piece', color: '#ef4444', blurb: 'Locals and Extra Regulation', pattern: 'onepiece' },
  { name: 'Naruto', key: 'Naruto', color: '#fb923c', blurb: 'The classic — back in the weekly line-up', pattern: 'naruto' },
  { name: 'Dragon Ball', key: 'Dragon Ball', color: '#e879f9', blurb: 'Every Saturday at the store', pattern: 'dragonball' },
  { name: 'Riftbound', key: 'Riftbound', color: '#22d3ee', blurb: 'The League of Legends TCG — freshly launched', pattern: 'riftbound' },
  { name: 'Flesh & Blood', key: 'Flesh & Blood', color: '#fb7185', blurb: 'Hero battles every Monday', pattern: 'fleshblood' },
  { name: 'Digimon', key: 'Digimon', color: '#60a5fa', blurb: 'Digivolve night every Thursday', pattern: 'digimon' },
];

export const GAME_COLORS: Record<string, string> = Object.fromEntries(
  GAMES.map((g) => [g.key, g.color]),
);

export const CATEGORIES = [
  {
    title: 'Singles',
    icon: 'tabler:cards',
    text: 'Single cards from budget to high-end — restocked constantly and fairly priced.',
  },
  {
    title: 'Sealed Products',
    icon: 'tabler:package',
    text: 'Boosters, displays, decks and sets — new releases and sought-after classics.',
  },
  {
    title: 'Accessoires',
    icon: 'tabler:shield-check',
    text: 'Sleeves, boxes, playmats, dice and cases in all kinds of colours and shapes.',
  },
];

export type Slot = { time: string; game: string; format?: string };
export type Day = { name: string; short: string; weekday: number; slots: Slot[] };

/** weekday: JS getDay() — 0 = Sunday */
export const SCHEDULE: Day[] = [
  {
    name: 'Monday',
    short: 'Mon',
    weekday: 1,
    slots: [
      { time: '18:00', game: 'Magic', format: 'Standard' },
      { time: '18:00', game: 'Riftbound' },
      { time: '18:15', game: 'Yu-Gi-Oh!', format: 'Goat' },
      { time: '18:30', game: 'Flesh & Blood' },
    ],
  },
  {
    name: 'Tuesday',
    short: 'Tue',
    weekday: 2,
    slots: [
      { time: '17:30', game: 'Pokemon' },
      { time: '18:00', game: 'Magic', format: 'Pauper' },
      { time: '18:15', game: 'Yu-Gi-Oh!', format: 'Perfect Circle' },
      { time: '18:30', game: 'One Piece' },
    ],
  },
  {
    name: 'Wednesday',
    short: 'Wed',
    weekday: 3,
    slots: [
      { time: '17:30', game: 'Pokemon' },
      { time: '18:00', game: 'Riftbound' },
      { time: '18:15', game: 'Yu-Gi-Oh!', format: 'Edison' },
      { time: '18:30', game: 'Magic', format: 'Highlander' },
    ],
  },
  {
    name: 'Thursday',
    short: 'Thu',
    weekday: 4,
    slots: [
      { time: '18:00', game: 'Magic', format: 'Pioneer' },
      { time: '18:00', game: 'Digimon' },
      { time: '18:15', game: 'Yu-Gi-Oh!', format: 'HAT' },
      { time: '18:30', game: 'Naruto' },
    ],
  },
  {
    name: 'Friday',
    short: 'Fri',
    weekday: 5,
    slots: [
      { time: '18:00', game: 'Magic', format: 'Draft' },
      { time: '18:15', game: 'Yu-Gi-Oh!', format: 'Nexus Night' },
      { time: '18:30', game: 'One Piece' },
    ],
  },
  {
    name: 'Saturday',
    short: 'Sat',
    weekday: 6,
    slots: [
      { time: '14:15', game: 'Yu-Gi-Oh!', format: 'Edison' },
      { time: '14:30', game: 'Magic', format: 'Premodern' },
      { time: '17:00', game: 'Dragon Ball' },
      { time: '17:30', game: 'Yu-Gi-Oh!', format: 'Charlestone' },
      { time: '18:00', game: 'Magic', format: 'Modern' },
      { time: '18:30', game: 'Naruto' },
      { time: '18:30', game: 'One Piece', format: 'Extra Regulation' },
    ],
  },
  { name: 'Sunday', short: 'Sun', weekday: 0, slots: [] },
];

export type GameEvent = { weekday: number; time: string; format?: string };

/**
 * Per-game recurring weekly events, derived directly from SCHEDULE so the
 * tournament schedule stays the single source of truth. Consumed by the
 * TCG flip-cards ("We offer") to show each game's next/upcoming slots.
 */
export const GAME_EVENTS: Record<string, GameEvent[]> = Object.fromEntries(
  GAMES.map((g) => [g.key, [] as GameEvent[]]),
);

SCHEDULE.forEach((day) => {
  day.slots.forEach((slot) => {
    GAME_EVENTS[slot.game]?.push({ weekday: day.weekday, time: slot.time, format: slot.format });
  });
});

export const CLOSED = 'closed';

export const OPENING_HOURS = [
  { day: 'Monday', weekday: 1, hours: '17:00 – 22:00' },
  { day: 'Tuesday', weekday: 2, hours: '17:00 – 22:00' },
  { day: 'Wednesday', weekday: 3, hours: '17:00 – 22:00' },
  { day: 'Thursday', weekday: 4, hours: '17:00 – 22:00' },
  { day: 'Friday', weekday: 5, hours: '17:00 – 22:00' },
  { day: 'Saturday', weekday: 6, hours: '14:00 – 22:00' },
  { day: 'Sunday', weekday: 0, hours: CLOSED },
];

export const STATS = [
  { value: 9, suffix: '', label: 'Trading Card Games', href: '#assortment' },
  { value: 26, suffix: '', label: 'Tournaments per week', href: '#schedule' },
  { value: 6, suffix: '', label: 'Days a week open', href: '#visit' },
];

export const NAV_LINKS = [
  { href: '#about', label: 'About us' },
  { href: '#assortment', label: 'Assortment' },
  { href: '#schedule', label: 'Tournaments' },
  { href: '#visit', label: 'Visit us' },
];
