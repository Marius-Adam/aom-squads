import {
  akhrasht,
  arkhane,
  artus,
  azariel,
  bellara,
  cathbad,
  cerunol,
  daGhan,
  denaya,
  dexxa,
  dragonkir,
  drake,
  dreverad,
  elios,
  fullmetalGoon,
  gassar,
  gloriana,
  gobliniaSweetvoice,
  goblinususTheGreat,
  grok,
  hargrim,
  hilia,
  idrill,
  irma,
  katar,
  kharannah,
  khshaat,
  kobolock,
  kromme,
  lasKhari,
  llael,
  lokhir,
  lucky,
  maebd,
  maeglin,
  magnus,
  mizuhiko,
  naja,
  phoenix,
  prookGreasyhair,
  raarspit,
  roinar,
  rok,
  rokKhan,
  sacrif,
  sandariel,
  sevenKnives,
  silverMoon,
  sneakyBeaky,
  soothsayerZytima,
  sunWukong,
  swampKiller,
  tahit,
  tileana,
  tiros,
  torak,
  troddar,
  trorin,
  tsuna,
  velundar,
  wieland,
  wyrmPriest,
  zhuBajie,
} from './heroes';

export const allSquads = [
  /* Archons */
  {
    name: 'Blue Artus',
    squadHeroes: [artus, tiros, sacrif, magnus, roinar],
  },
  {
    name: 'Full Archons',
    squadHeroes: [artus, tiros, sacrif, magnus, elios],
  },

  /* Druids */
  {
    name: 'Druids',
    squadHeroes: [maebd, dreverad, cathbad, irma, wieland],
  },

  /* Orks */
  {
    name: 'Full Orks',
    squadHeroes: [arkhane, rokKhan, lasKhari, daGhan, kromme],
  },
  {
    name: 'Mizuorks',
    squadHeroes: [arkhane, rokKhan, lasKhari, daGhan, mizuhiko],
  },
  {
    name: 'Orks 7K',
    squadHeroes: [arkhane, rokKhan, lasKhari, daGhan, sevenKnives],
  },

  /* Beastmen */
  {
    name: 'Beastmen',
    squadHeroes: [sunWukong, zhuBajie, tsuna, rok, phoenix],
  },
  {
    name: 'Beastmen Roinar',
    squadHeroes: [sunWukong, roinar, tsuna, rok, phoenix],
  },
  {
    name: 'Beastmen Aza',
    squadHeroes: [sunWukong, azariel, tsuna, rok, phoenix],
  },
  {
    name: 'Roinar Beastmen',
    squadHeroes: [roinar, sunWukong, tsuna, rok, phoenix],
  },

  /* Dragonkin */
  {
    name: 'DK Magnus',
    squadHeroes: [dragonkir, magnus, dexxa, katar, kharannah],
  },
  {
    name: 'DK Kromme',
    squadHeroes: [dragonkir, kromme, dexxa, katar, kharannah],
  },
  {
    name: 'DK Roinar',
    squadHeroes: [dragonkir, roinar, dexxa, katar, kharannah],
  },
  {
    name: 'DK Lucky',
    squadHeroes: [dragonkir, lucky, dexxa, katar, kharannah],
  },

  /* Dark Elves */
  {
    name: 'Dark Elves',
    squadHeroes: [naja, drake, roinar, azariel, lokhir],
  },
  {
    name: 'Dark Elves Llael',
    squadHeroes: [naja, drake, roinar, llael, lokhir],
  },
  {
    name: 'Dark Elves Roinar',
    squadHeroes: [naja, drake, roinar, llael, lokhir],
  },

  /* Barbarians */
  {
    name: 'Barbs',
    squadHeroes: [denaya, swampKiller, sevenKnives, bellara, silverMoon],
  },
  {
    name: 'Barbs Aza',
    squadHeroes: [denaya, swampKiller, sevenKnives, bellara, azariel],
  },
  {
    name: 'Barbs Magnus',
    squadHeroes: [denaya, swampKiller, sevenKnives, bellara, magnus],
  },
  {
    name: 'Suicide Barbs',
    squadHeroes: [denaya, swampKiller, sevenKnives, bellara, tsuna],
  },
  {
    name: 'Green Barbs',
    squadHeroes: [denaya, dreverad, cathbad, bellara, sevenKnives],
  },
  {
    name: 'Barbs Wieland',
    squadHeroes: [denaya, wieland, swampKiller, bellara, sevenKnives],
  },

  /* Wild Elves */
  {
    name: 'Wild Elves',
    squadHeroes: [gloriana, cerunol, tileana, maeglin, sandariel],
  },
  {
    name: 'Sandy Wild Elves',
    squadHeroes: [gloriana, cerunol, idrill, maeglin, sandariel],
  },

  /* Goblins */
  {
    name: 'Goblins',
    squadHeroes: [
      goblinususTheGreat,
      prookGreasyhair,
      sneakyBeaky,
      gobliniaSweetvoice,
      fullmetalGoon,
    ],
  },

  /* Dwarves */
  {
    name: 'Dwarves',
    squadHeroes: [trorin, troddar, velundar, hargrim, gassar],
  },

  /* Ra`Achne */
  {
    name: 'Ra`Achne',
    squadHeroes: [hilia, akhrasht, tahit, khshaat, raarspit],
  },

  /* Kobolds */
  {
    name: 'Kobolds',
    squadHeroes: [wyrmPriest, soothsayerZytima, kobolock, grok, torak],
  },
];
