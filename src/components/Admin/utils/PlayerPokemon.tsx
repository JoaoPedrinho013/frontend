export enum CatchMethod {
  FISHING = 'Fishing',
  HORDE_3X = '3xHorde',
  HORDE_5X = '5xHorde',
  SINGLE = 'Single',
  EGG = 'Egg',
  SAFARI = 'Safari',
  MYSTERIOUS = 'Mysterious Ball'
}

export type PlayerPokemon = {
  idPlayer: number;
  idPokemon: number;
  namePokemon: string; 
  captureDate: string; 
  encounters: number; 
  catchMethod: CatchMethod[];
};

export const dataPlayerPokemon: PlayerPokemon[] = [
  // Ash - 5 Pokémon
  {
    idPlayer: 0,
    idPokemon: 1,
    namePokemon: 'Pikachu',
    captureDate: '2023-01-01',
    encounters: 48720,
    catchMethod: [CatchMethod.SINGLE],
  },
  {
    idPlayer: 0,
    idPokemon: 2,
    namePokemon: 'Charizard',
    captureDate: '2025-07-22',
    encounters: 90314,
    catchMethod: [CatchMethod.EGG],
  },
  {
    idPlayer: 0,
    idPokemon: 3,
    namePokemon: 'Blastoise',
    captureDate: '2024-05-10',
    encounters: 20001,
    catchMethod: [CatchMethod.FISHING],
  },
  {
    idPlayer: 0,
    idPokemon: 4,
    namePokemon: 'Venusaur',
    captureDate: '2024-06-12',
    encounters: 32981,
    catchMethod: [CatchMethod.SAFARI],
  },
  {
    idPlayer: 0,
    idPokemon: 5,
    namePokemon: 'Gengar',
    captureDate: '2025-03-05',
    encounters: 11999,
    catchMethod: [CatchMethod.MYSTERIOUS],
  },

  // Red - 4 Pokémon
  {
    idPlayer: 1,
    idPokemon: 6,
    namePokemon: 'Alakazam',
    captureDate: '2025-07-22',
    encounters: 77568,
    catchMethod: [CatchMethod.EGG],
  },
  {
    idPlayer: 1,
    idPokemon: 7,
    namePokemon: 'Machamp',
    captureDate: '2023-01-02',
    encounters: 45023,
    catchMethod: [CatchMethod.SINGLE],
  },
  {
    idPlayer: 1,
    idPokemon: 10,
    namePokemon: 'Dragonite',
    captureDate: '2025-07-22',
    encounters: 65902,
    catchMethod: [CatchMethod.SINGLE],
  },
  {
    idPlayer: 1,
    idPokemon: 9,
    namePokemon: 'Snorlax',
    captureDate: '2025-06-11',
    encounters: 32410,
    catchMethod: [CatchMethod.HORDE_3X],
  },

  // Cynthia - 3 Pokémon
  {
    idPlayer: 2,
    idPokemon: 40,
    namePokemon: 'Bulbasaur',
    captureDate: '2023-02-01',
    encounters: 23891,
    catchMethod: [CatchMethod.SINGLE],
  },
  {
    idPlayer: 2,
    idPokemon: 11,
    namePokemon: 'Lapras',
    captureDate: '2025-06-01',
    encounters: 48222,
    catchMethod: [CatchMethod.SAFARI],
  },
  {
    idPlayer: 2,
    idPokemon: 6,
    namePokemon: 'Alakazam',
    captureDate: '2025-07-22',
    encounters: 77568,
    catchMethod: [CatchMethod.EGG],
  },

  // Lance - 2 Pokémon
  {
    idPlayer: 3,
    idPokemon: 10,
    namePokemon: 'Dragonite',
    captureDate: '2025-07-22',
    encounters: 32988,
    catchMethod: [CatchMethod.SINGLE],
  },
  {
    idPlayer: 3,
    idPokemon: 13,
    namePokemon: 'Gyarados',
    captureDate: '2025-07-22',
    encounters: 99005,
    catchMethod: [CatchMethod.HORDE_3X],
  },

  // Brock - 1 Pokémon
  {
    idPlayer: 4,
    idPokemon: 18,
    namePokemon: 'Onix',
    captureDate: '2025-07-22',
    encounters: 7453,
    catchMethod: [CatchMethod.SAFARI],
  },

  // Misty - 3 Pokémon
  {
    idPlayer: 5,
    idPokemon: 21,
    namePokemon: 'Starmie',
    captureDate: '2025-07-22',
    encounters: 6890,
    catchMethod: [CatchMethod.FISHING],
  },
  {
    idPlayer: 5,
    idPokemon: 31,
    namePokemon: 'Vaporeon',
    captureDate: '2025-07-22',
    encounters: 48129,
    catchMethod: [CatchMethod.SINGLE],
  },
  {
    idPlayer: 5,
    idPokemon: 20,
    namePokemon: 'Horsea',
    captureDate: '2025-04-03',
    encounters: 18743,
    catchMethod: [CatchMethod.FISHING],
  },

  // Steven - 2 Pokémon
  {
    idPlayer: 6,
    idPokemon: 48,
    namePokemon: 'Butterfree',
    captureDate: '2025-07-22',
    encounters: 15732,
    catchMethod: [CatchMethod.MYSTERIOUS],
  },
  {
    idPlayer: 6,
    idPokemon: 7,
    namePokemon: 'Machamp',
    captureDate: '2025-07-22',
    encounters: 60783,
    catchMethod: [CatchMethod.SINGLE],
  },

  // Blue - 1 Pokémon
  {
    idPlayer: 7,
    idPokemon: 6,
    namePokemon: 'Alakazam',
    captureDate: '2025-07-22',
    encounters: 84120,
    catchMethod: [CatchMethod.EGG],
  },

  // Giovanni - 4 Pokémon
  {
    idPlayer: 8,
    idPokemon: 31,
    namePokemon: 'Nidoqueen',
    captureDate: '2025-07-22',
    encounters: 37770,
    catchMethod: [CatchMethod.SINGLE],
  },
  {
    idPlayer: 8,
    idPokemon: 32,
    namePokemon: 'Jolteon',
    captureDate: '2025-07-22',
    encounters: 11995,
    catchMethod: [CatchMethod.HORDE_3X],
  },
  {
    idPlayer: 8,
    idPokemon: 33,
    namePokemon: 'Flareon',
    captureDate: '2025-06-15',
    encounters: 8910,
    catchMethod: [CatchMethod.SINGLE],
  },
  {
    idPlayer: 8,
    idPokemon: 34,
    namePokemon: 'Electabuzz',
    captureDate: '2025-03-08',
    encounters: 23005,
    catchMethod: [CatchMethod.HORDE_5X],
  },

  // Professor Oak - 2 Pokémon
  {
    idPlayer: 9,
    idPokemon: 30,
    namePokemon: 'Eevee',
    captureDate: '2025-07-22',
    encounters: 92143,
    catchMethod: [CatchMethod.SINGLE],
  },
  {
    idPlayer: 9,
    idPokemon: 22,
    namePokemon: 'Scyther',
    captureDate: '2025-07-22',
    encounters: 23301,
    catchMethod: [CatchMethod.SAFARI],
  },
];
