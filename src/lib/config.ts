export const SITE = {
  name: 'Mana Games',
  tagline: { en: 'Your LGS for anything TCG!', de: 'Dein LGS für alles rund um TCGs!' },
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
  logo: { src: '/LogoNeu.png' },
  storefront: { src: '/storefront.jpeg', fallback: '/VordererLaden.jpeg' },
  community: { src: '/community.jpeg', fallback: '/MY.jpeg' },
  signage: { src: '/Mana Games.png' },
  shelf: { src: '/Regal.jpeg', pending: false },
  mascot: { src: '/Mana-Girl.png' },
  mascotWave: { src: '/mana-girl-winken.png' },
  mascotPresent: { src: '/mana-girl-präsentieren.png' },
  mascotPoint: { src: '/mana-girl-zeigen.png' },
  mascotHowTo: { src: '/mana-girl-howtoplay.png' },
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

export type Localized = { en: string; de: string };

export type Game = {
  name: string;
  /** Short form used for the badges in the tournament schedule */
  key: string;
  color: string;
  blurb: Localized;
  pattern: GamePattern;
};

export const GAMES: Game[] = [
  {
    name: 'Magic: The Gathering',
    key: 'Magic',
    color: '#f59e0b',
    blurb: { en: 'Standard · Pioneer · Modern · Pauper · Draft · Highlander · Premodern', de: 'Standard · Pioneer · Modern · Pauper · Draft · Highlander · Premodern' },
    pattern: 'magic',
  },
  {
    name: 'Yu-Gi-Oh!',
    key: 'Yu-Gi-Oh!',
    color: '#a855f7',
    blurb: { en: 'Goat · Edison · HAT · Perfect Circle · Nexus', de: 'Goat · Edison · HAT · Perfect Circle · Nexus' },
    pattern: 'yugioh',
  },
  {
    name: 'Pokémon',
    key: 'Pokemon',
    color: '#facc15',
    blurb: { en: 'Singles, sealed products and weekly locals', de: 'Einzelkarten, versiegelte Produkte und wöchentliche Locals' },
    pattern: 'pokemon',
  },
  {
    name: 'One Piece',
    key: 'One Piece',
    color: '#ef4444',
    blurb: { en: 'Locals and Extra Regulation', de: 'Locals und Extra Regulation' },
    pattern: 'onepiece',
  },
  {
    name: 'Naruto',
    key: 'Naruto',
    color: '#fb923c',
    blurb: { en: 'The classic — back in the weekly line-up', de: 'Der Klassiker — wieder fest im Wochenplan' },
    pattern: 'naruto',
  },
  {
    name: 'Dragon Ball',
    key: 'Dragon Ball',
    color: '#e879f9',
    blurb: { en: 'Every Saturday at the store', de: 'Jeden Samstag im Laden' },
    pattern: 'dragonball',
  },
  {
    name: 'Riftbound',
    key: 'Riftbound',
    color: '#22d3ee',
    blurb: { en: 'The League of Legends TCG — freshly launched', de: 'Das League of Legends TCG — frisch gestartet' },
    pattern: 'riftbound',
  },
  {
    name: 'Flesh & Blood',
    key: 'Flesh & Blood',
    color: '#fb7185',
    blurb: { en: 'Hero battles every Monday', de: 'Hero-Kämpfe jeden Montag' },
    pattern: 'fleshblood',
  },
  {
    name: 'Digimon',
    key: 'Digimon',
    color: '#60a5fa',
    blurb: { en: 'Digivolve night every Thursday', de: 'Digivolve-Abend jeden Donnerstag' },
    pattern: 'digimon',
  },
];

export const GAME_COLORS: Record<string, string> = Object.fromEntries(
  GAMES.map((g) => [g.key, g.color]),
);

export type TcgProfile = {
  /** Fuller display name used only in the "Draw a card" discovery feature */
  displayName: string;
  tags: { en: string[]; de: string[] };
  stats: { strategy: number; pace: number; collecting: number; accessibility: number };
  /** One-line summary shown on the draw result card */
  short: Localized;
  /** Longer "What's it about?" paragraph shown in the explore overlay */
  about: Localized;
  /** "You'll like it if..." sentence (lowercase, continues the heading) */
  likeIf: Localized;
  /** 2-3 short "Good to know" chips */
  goodToKnow: { en: string[]; de: string[] };
};

/**
 * Editorial store assessments for the "Draw a card" discovery feature —
 * not official ratings. Keyed by Game.key. Game/format names stay in
 * English (community standard); surrounding descriptions are localized.
 */
export const TCG_PROFILES: Record<string, TcgProfile> = {
  Magic: {
    displayName: 'Magic: The Gathering',
    tags: { en: ['Deep', 'Versatile', 'Deckbuilding'], de: ['Tiefgründig', 'Vielseitig', 'Deckbau'] },
    stats: { strategy: 10, pace: 8, collecting: 5, accessibility: 10 },
    short: {
      en: 'A huge strategic sandbox built around deck construction, synergies and many different ways to play.',
      de: 'Ein riesiger strategischer Sandkasten rund um Deckbau, Synergien und viele verschiedene Spielweisen.',
    },
    about: {
      en: 'Magic rewards planning, creative deck building and adapting to your opponent. Its many formats range from competitive one-on-one play to social multiplayer.',
      de: 'Magic belohnt Planung, kreativen Deckbau und Anpassung an den Gegner. Die vielen Formate reichen von kompetitivem 1-gegen-1 bis zu geselligem Multiplayer.',
    },
    likeIf: {
      en: 'you enjoy deep strategy, experimentation and almost endless deck-building possibilities.',
      de: 'du tiefgründige Strategie, Experimentierfreude und nahezu endlose Deckbau-Möglichkeiten magst.',
    },
    goodToKnow: {
      en: ['Many Formats', 'High Strategic Depth', '1v1 & Multiplayer'],
      de: ['Viele Formate', 'Hohe strategische Tiefe', '1v1 & Multiplayer'],
    },
  },
  'Yu-Gi-Oh!': {
    displayName: 'Yu-Gi-Oh!',
    tags: { en: ['Fast', 'Combo-driven', 'Technical'], de: ['Schnell', 'Combo-lastig', 'Technisch'] },
    stats: { strategy: 10, pace: 5, collecting: 10, accessibility: 10 },
    short: {
      en: 'A fast tactical card game built around powerful combinations, sequencing and explosive turns.',
      de: 'Ein schnelles, taktisches Kartenspiel rund um starke Kombinationen, Reihenfolge und explosive Züge.',
    },
    about: {
      en: 'Build combinations between Monsters, Spells, Traps and the Extra Deck to create powerful plays and disrupt your opponent.',
      de: 'Kombiniere Monster, Zauber, Fallen und das Extra Deck zu starken Zügen und durchkreuze die Pläne deines Gegners.',
    },
    likeIf: {
      en: 'you enjoy combos, complex interactions and finding the strongest sequence of plays.',
      de: 'du Combos, komplexe Interaktionen und das Finden der stärksten Zugreihenfolge magst.',
    },
    goodToKnow: {
      en: ['Fast Duels', 'Extra Deck', 'High Combo Depth'],
      de: ['Schnelle Duelle', 'Extra Deck', 'Hohe Combo-Tiefe'],
    },
  },
  Pokemon: {
    displayName: 'Pokémon',
    tags: { en: ['Accessible', 'Tactical', 'Collectible'], de: ['Einsteigerfreundlich', 'Taktisch', 'Sammelbar'] },
    stats: { strategy: 5, pace: 5, collecting: 10, accessibility: 1 },
    short: {
      en: 'An approachable strategy game where Pokémon evolve, use Energy and battle for Prize cards.',
      de: 'Ein zugängliches Strategiespiel, in dem Pokémon sich entwickeln, Energie nutzen und um Preiskarten kämpfen.',
    },
    about: {
      en: 'Build a 60-card deck around Pokémon, Trainers and Energy, develop your board and take Prize cards by knocking out opposing Pokémon.',
      de: 'Baue ein 60-Karten-Deck aus Pokémon, Trainern und Energie, entwickle dein Board und sichere dir Preiskarten, indem du gegnerische Pokémon besiegst.',
    },
    likeIf: {
      en: 'you want an easy entry into TCGs with plenty of strategy and a huge collecting side.',
      de: 'du einen leichten Einstieg ins TCG-Hobby suchst, mit viel Strategie und einer großen Sammelseite.',
    },
    goodToKnow: {
      en: ['2 Players', 'Evolution', '6 Prize Cards'],
      de: ['2 Spieler', 'Entwicklung', '6 Preiskarten'],
    },
  },
  'One Piece': {
    displayName: 'One Piece',
    tags: { en: ['Tactical', 'Leader-based', 'Synergy'], de: ['Taktisch', 'Anführer-basiert', 'Synergie'] },
    stats: { strategy: 10, pace: 10, collecting: 10, accessibility: 3 },
    short: {
      en: 'Build around a Leader and use DON!! efficiently to strengthen your characters and execute your game plan.',
      de: 'Baue rund um einen Anführer und setze DON!! effizient ein, um deine Charaktere zu stärken und deinen Plan umzusetzen.',
    },
    about: {
      en: 'Your Leader defines your deck while DON!! works both as a resource and a way to increase power, creating meaningful decisions every turn.',
      de: 'Dein Anführer bestimmt dein Deck, während DON!! sowohl als Ressource als auch zur Stärkung dient — das sorgt jede Runde für bedeutsame Entscheidungen.',
    },
    likeIf: {
      en: 'you enjoy resource management, deck synergy and building around a central leader.',
      de: 'du Ressourcenmanagement, Deck-Synergie und das Bauen um einen zentralen Anführer magst.',
    },
    goodToKnow: {
      en: ['Leader Based', '50-Card Deck', 'DON!! Resource'],
      de: ['Anführer-basiert', '50-Karten-Deck', 'DON!!-Ressource'],
    },
  },
  Naruto: {
    displayName: 'Naruto',
    tags: { en: ['Tactical', 'Mission-based', 'Resource'], de: ['Taktisch', 'Missionsbasiert', 'Ressourcen'] },
    stats: { strategy: 9, pace: 8, collecting: 10, accessibility: 2 },
    short: {
      en: 'Deploy ninja, manage Chakra and fight to complete missions before your opponent.',
      de: 'Setze Ninja ein, verwalte Chakra und erfülle Missionen vor deinem Gegner.',
    },
    about: {
      en: 'New missions shape each round while players spend Chakra to deploy characters and compete for victory points, making positioning and resource management important.',
      de: 'Neue Missionen prägen jede Runde, während Spieler Chakra einsetzen, um Charaktere zu spielen und um Siegpunkte zu kämpfen — Positionierung und Ressourcenmanagement sind entscheidend.',
    },
    likeIf: {
      en: 'you enjoy tactical objectives, resource decisions and adapting your plan as the battlefield changes.',
      de: 'du taktische Ziele, Ressourcenentscheidungen und das Anpassen deines Plans magst, während sich das Schlachtfeld verändert.',
    },
    goodToKnow: {
      en: ['Mission System', 'Chakra Management', 'Victory Points'],
      de: ['Missionssystem', 'Chakra-Management', 'Siegpunkte'],
    },
  },
  'Dragon Ball': {
    displayName: 'Dragon Ball',
    tags: { en: ['Fast', 'Aggressive', 'Combo'], de: ['Schnell', 'Aggressiv', 'Combo'] },
    stats: { strategy: 9, pace: 7, collecting: 10, accessibility: 2 },
    short: {
      en: 'Fast battles built around Leaders, powerful attacks, Combo cards and dramatic Awaken moments.',
      de: 'Schnelle Kämpfe rund um Anführer, starke Angriffe, Combo-Karten und dramatische Awaken-Momente.',
    },
    about: {
      en: 'Cards can reinforce attacks and defense through Combos, while Leaders transform through Awaken and can dramatically change the flow of a battle.',
      de: 'Karten verstärken Angriff und Verteidigung durch Combos, während sich Anführer per Awaken verwandeln und den Kampfverlauf drastisch ändern können.',
    },
    likeIf: {
      en: 'you enjoy aggressive games, big momentum swings and chaining cards together during combat.',
      de: 'du aggressive Spiele, große Schwankungen im Momentum und das Verketten von Karten im Kampf magst.',
    },
    goodToKnow: {
      en: ['Leader Based', 'Combo System', 'Awaken Mechanic'],
      de: ['Anführer-basiert', 'Combo-System', 'Awaken-Mechanik'],
    },
  },
  Riftbound: {
    displayName: 'Riftbound',
    tags: { en: ['Strategic', 'Positional', 'Objective-based'], de: ['Strategisch', 'Positionsbasiert', 'Zielbasiert'] },
    stats: { strategy: 10, pace: 8, collecting: 9, accessibility: 7 },
    short: {
      en: 'Deploy Champions and units across shared battlefields and fight for control to score points.',
      de: 'Setze Champions und Einheiten auf gemeinsamen Schlachtfeldern ein und kämpfe um die Kontrolle, um Punkte zu sammeln.',
    },
    about: {
      en: "Rather than simply reducing an opponent's life total, Riftbound revolves around moving units, conquering battlefields and holding objectives until you reach the winning score.",
      de: 'Statt nur die Lebenspunkte des Gegners zu senken, dreht sich bei Riftbound alles um das Bewegen von Einheiten, das Erobern von Schlachtfeldern und das Halten von Zielen bis zum Sieg-Punktestand.',
    },
    likeIf: {
      en: 'you enjoy board control, positioning, objectives and tactical decisions beyond direct combat.',
      de: 'du Boardkontrolle, Positionierung, Ziele und taktische Entscheidungen jenseits des direkten Kampfes magst.',
    },
    goodToKnow: {
      en: ['Battlefield Control', 'First to 8 Points', '1v1 & Multiplayer'],
      de: ['Schlachtfeld-Kontrolle', 'Erster auf 8 Punkte', '1v1 & Multiplayer'],
    },
  },
  'Flesh & Blood': {
    displayName: 'Flesh & Blood',
    tags: { en: ['Deep', 'Competitive', 'Skill-intensive'], de: ['Tiefgründig', 'Kompetitiv', 'Skill-intensiv'] },
    stats: { strategy: 10, pace: 10, collecting: 3, accessibility: 10 },
    short: {
      en: 'A highly tactical combat TCG where nearly every card can become an attack, defense or resource.',
      de: 'Ein hochtaktisches Kampf-TCG, bei dem fast jede Karte zum Angriff, zur Verteidigung oder zur Ressource werden kann.',
    },
    about: {
      en: 'Attack, defend and pitch cards for resources while managing your hand efficiently. Small decisions compound across the match, creating very high strategic depth.',
      de: 'Greife an, verteidige und pitche Karten für Ressourcen, während du deine Hand effizient verwaltest. Kleine Entscheidungen summieren sich über das ganze Match zu enormer strategischer Tiefe.',
    },
    likeIf: {
      en: 'you enjoy competitive play, mastering matchups and being rewarded for precise decisions.',
      de: 'du kompetitives Spiel, das Meistern von Matchups und Belohnung für präzise Entscheidungen magst.',
    },
    goodToKnow: {
      en: ['Hero Based', 'Attack/Defend/Pitch', 'High Skill Ceiling'],
      de: ['Helden-basiert', 'Angriff/Verteidigung/Pitch', 'Hohes Skill-Potenzial'],
    },
  },
  Digimon: {
    displayName: 'Digimon',
    tags: { en: ['Evolution', 'Tactical', 'Momentum'], de: ['Entwicklung', 'Taktisch', 'Momentum'] },
    stats: { strategy: 6, pace: 5, collecting: 4, accessibility: 10 },
    short: {
      en: "Build Digimon through evolution while carefully managing a shared resource system and attacking your opponent's Security.",
      de: 'Entwickle deine Digimon durch Evolution, während du ein gemeinsames Ressourcensystem verwaltest und die Security deines Gegners angreifst.',
    },
    about: {
      en: 'Digivolution builds stronger Digimon while the Memory Gauge creates a unique push-and-pull resource system between both players.',
      de: 'Digivolution macht deine Digimon stärker, während der Memory Gauge ein einzigartiges Hin-und-Her-Ressourcensystem zwischen beiden Spielern schafft.',
    },
    likeIf: {
      en: 'you enjoy evolving units, building synergistic stacks and balancing powerful plays against resource efficiency.',
      de: 'du das Entwickeln von Einheiten, den Aufbau von Synergie-Stacks und die Balance zwischen starken Zügen und Ressourceneffizienz magst.',
    },
    goodToKnow: {
      en: ['Digivolution', 'Memory Gauge', 'Security System'],
      de: ['Digivolution', 'Memory Gauge', 'Security-System'],
    },
  },
};

/** Titles/text come from the i18n dict (assortment.cat1Title etc.) — icons only here */
export const CATEGORIES = [
  { key: 'cat1', icon: 'tabler:cards' },
  { key: 'cat2', icon: 'tabler:package' },
  { key: 'cat3', icon: 'tabler:shield-check' },
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
      { time: '18:15', game: 'Yu-Gi-Oh!', format: 'Nexus' },
      { time: '18:30', game: 'One Piece' },
      { time: '19:00', game: 'Magic', format: 'Draft' },
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

/** Labels come from the i18n dict (hero.stat.games etc.) */
export const STATS = [
  { value: 9, suffix: '', labelKey: 'hero.stat.games', href: '#assortment' },
  { value: 25, suffix: '', labelKey: 'hero.stat.tournaments', href: '#schedule' },
  { value: 6, suffix: '', labelKey: 'hero.stat.days', href: '#visit' },
];

export const NAV_LINKS = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#assortment', labelKey: 'nav.assortment' },
  { href: '#schedule', labelKey: 'nav.schedule' },
  { href: '#visit', labelKey: 'nav.visit' },
];
