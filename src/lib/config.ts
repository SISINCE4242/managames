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
  mascot: { src: '/Mana-Girl.png' },
  mascotWave: { src: '/mana-girl-winken.png' },
  mascotPresent: { src: '/mana-girl-präsentieren.png' },
  mascotPoint: { src: '/mana-girl-zeigen.png' },
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

export type TcgProfile = {
  /** Fuller display name used only in the "Draw a card" discovery feature */
  displayName: string;
  tags: string[];
  stats: { strategy: number; pace: number; collecting: number; accessibility: number };
  /** One-line summary shown on the draw result card */
  short: string;
  /** Longer "What's it about?" paragraph shown in the explore overlay */
  about: string;
  /** "You'll like it if..." sentence */
  likeIf: string;
  /** 2-3 short "Good to know" chips */
  goodToKnow: string[];
};

/**
 * Editorial store assessments for the "Draw a card" discovery feature —
 * not official ratings. Keyed by Game.key.
 */
export const TCG_PROFILES: Record<string, TcgProfile> = {
  Magic: {
    displayName: 'Magic: The Gathering',
    tags: ['Deep', 'Versatile', 'Deckbuilding'],
    stats: { strategy: 10, pace: 6, collecting: 10, accessibility: 6 },
    short: 'A huge strategic sandbox built around deck construction, synergies and many different ways to play.',
    about:
      'Magic rewards planning, creative deck building and adapting to your opponent. Its many formats range from competitive one-on-one play to social multiplayer.',
    likeIf: 'you enjoy deep strategy, experimentation and almost endless deck-building possibilities.',
    goodToKnow: ['Many Formats', 'High Strategic Depth', '1v1 & Multiplayer'],
  },
  'Yu-Gi-Oh!': {
    displayName: 'Yu-Gi-Oh!',
    tags: ['Fast', 'Combo-driven', 'Technical'],
    stats: { strategy: 9, pace: 9, collecting: 9, accessibility: 5 },
    short: 'A fast tactical card game built around powerful combinations, sequencing and explosive turns.',
    about:
      'Build combinations between Monsters, Spells, Traps and the Extra Deck to create powerful plays and disrupt your opponent.',
    likeIf: 'you enjoy combos, complex interactions and finding the strongest sequence of plays.',
    goodToKnow: ['Fast Duels', 'Extra Deck', 'High Combo Depth'],
  },
  Pokemon: {
    displayName: 'Pokémon TCG',
    tags: ['Accessible', 'Tactical', 'Collectible'],
    stats: { strategy: 8, pace: 7, collecting: 10, accessibility: 9 },
    short: 'An approachable strategy game where Pokémon evolve, use Energy and battle for Prize cards.',
    about:
      'Build a 60-card deck around Pokémon, Trainers and Energy, develop your board and take Prize cards by knocking out opposing Pokémon.',
    likeIf: 'you want an easy entry into TCGs with plenty of strategy and a huge collecting side.',
    goodToKnow: ['2 Players', 'Evolution', '6 Prize Cards'],
  },
  'One Piece': {
    displayName: 'One Piece Card Game',
    tags: ['Tactical', 'Leader-based', 'Synergy'],
    stats: { strategy: 8, pace: 7, collecting: 9, accessibility: 8 },
    short: 'Build around a Leader and use DON!! efficiently to strengthen your characters and execute your game plan.',
    about:
      'Your Leader defines your deck while DON!! works both as a resource and a way to increase power, creating meaningful decisions every turn.',
    likeIf: 'you enjoy resource management, deck synergy and building around a central leader.',
    goodToKnow: ['Leader Based', '50-Card Deck', 'DON!! Resource'],
  },
  Naruto: {
    displayName: 'Naruto Mythos TCG',
    tags: ['Tactical', 'Mission-based', 'Resource'],
    stats: { strategy: 8, pace: 6, collecting: 8, accessibility: 7 },
    short: 'Deploy ninja, manage Chakra and fight to complete missions before your opponent.',
    about:
      "New missions shape each round while players spend Chakra to deploy characters and compete for victory points, making positioning and resource management important.",
    likeIf: 'you enjoy tactical objectives, resource decisions and adapting your plan as the battlefield changes.',
    goodToKnow: ['Mission System', 'Chakra Management', 'Victory Points'],
  },
  'Dragon Ball': {
    displayName: 'Dragon Ball Super Card Game: Fusion World',
    tags: ['Fast', 'Aggressive', 'Combo'],
    stats: { strategy: 8, pace: 9, collecting: 9, accessibility: 8 },
    short: 'Fast battles built around Leaders, powerful attacks, Combo cards and dramatic Awaken moments.',
    about:
      'Cards can reinforce attacks and defense through Combos, while Leaders transform through Awaken and can dramatically change the flow of a battle.',
    likeIf: 'you enjoy aggressive games, big momentum swings and chaining cards together during combat.',
    goodToKnow: ['Leader Based', 'Combo System', 'Awaken Mechanic'],
  },
  Riftbound: {
    displayName: 'Riftbound',
    tags: ['Strategic', 'Positional', 'Objective-based'],
    stats: { strategy: 9, pace: 7, collecting: 8, accessibility: 8 },
    short: 'Deploy Champions and units across shared battlefields and fight for control to score points.',
    about:
      "Rather than simply reducing an opponent's life total, Riftbound revolves around moving units, conquering battlefields and holding objectives until you reach the winning score.",
    likeIf: 'you enjoy board control, positioning, objectives and tactical decisions beyond direct combat.',
    goodToKnow: ['Battlefield Control', 'First to 8 Points', '1v1 & Multiplayer'],
  },
  'Flesh & Blood': {
    displayName: 'Flesh & Blood',
    tags: ['Deep', 'Competitive', 'Skill-intensive'],
    stats: { strategy: 10, pace: 8, collecting: 8, accessibility: 5 },
    short: 'A highly tactical combat TCG where nearly every card can become an attack, defense or resource.',
    about:
      'Attack, defend and pitch cards for resources while managing your hand efficiently. Small decisions compound across the match, creating very high strategic depth.',
    likeIf: 'you enjoy competitive play, mastering matchups and being rewarded for precise decisions.',
    goodToKnow: ['Hero Based', 'Attack/Defend/Pitch', 'High Skill Ceiling'],
  },
  Digimon: {
    displayName: 'Digimon Card Game',
    tags: ['Evolution', 'Tactical', 'Momentum'],
    stats: { strategy: 8, pace: 8, collecting: 9, accessibility: 8 },
    short: "Build Digimon through evolution while carefully managing a shared resource system and attacking your opponent's Security.",
    about:
      'Digivolution builds stronger Digimon while the Memory Gauge creates a unique push-and-pull resource system between both players.',
    likeIf: 'you enjoy evolving units, building synergistic stacks and balancing powerful plays against resource efficiency.',
    goodToKnow: ['Digivolution', 'Memory Gauge', 'Security System'],
  },
};

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
