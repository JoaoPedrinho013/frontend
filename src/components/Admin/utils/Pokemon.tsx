export enum Region {
  KANTO = 'Kanto',
  JOHTO = 'Johto',
  HOENN = 'Hoenn',
  SINNOH = 'Sinnoh',
  UNOVA = 'Unova'
}

export type Pokemon = {
  idPokemon: number;
  namePokemon: string;
  gifName?: string;
  regions: Region[];
};

export const dataPokemon: Pokemon[] = [
  { idPokemon: 1, namePokemon: 'Pikachu', gifName: 'Pikachu.gif', regions: [Region.KANTO, Region.JOHTO, Region.HOENN, Region.SINNOH] },
  { idPokemon: 2, namePokemon: 'Charizard', gifName: 'Charizard.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 3, namePokemon: 'Blastoise', gifName: 'Blastoise.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 4, namePokemon: 'Venusaur', gifName: 'Venusaur.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 5, namePokemon: 'Gengar', gifName: 'Gengar.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 6, namePokemon: 'Alakazam', gifName: 'Alakazam.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 7, namePokemon: 'Machamp', gifName: 'Machamp.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 8, namePokemon: 'Golem', gifName: 'Golem.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 9, namePokemon: 'Lapras', gifName: 'Lapras.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 10, namePokemon: 'Dragonite', gifName: 'Dragonite.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 11, namePokemon: 'Mewtwo', gifName: 'Mewtwo.gif', regions: [Region.KANTO] },
  { idPokemon: 12, namePokemon: 'Mew', gifName: 'Mew.gif', regions: [Region.KANTO] },
  { idPokemon: 13, namePokemon: 'Gyarados', gifName: 'Gyarados.gif', regions: [Region.KANTO, Region.JOHTO, Region.HOENN, Region.SINNOH] },
  { idPokemon: 14, namePokemon: 'Snorlax', gifName: 'Snorlax.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 15, namePokemon: 'Articuno', gifName: 'Articuno.gif', regions: [Region.KANTO] },
  { idPokemon: 16, namePokemon: 'Zapdos', gifName: 'Zapdos.gif', regions: [Region.KANTO] },
  { idPokemon: 17, namePokemon: 'Moltres', gifName: 'Moltres.gif', regions: [Region.KANTO] },
  { idPokemon: 18, namePokemon: 'Onix', gifName: 'Onix.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 19, namePokemon: 'Psyduck', gifName: 'Psyduck.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 20, namePokemon: 'Golduck', gifName: 'Golduck.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 21, namePokemon: 'Starmie', gifName: 'Starmie.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 22, namePokemon: 'Scyther', gifName: 'Scyther.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 23, namePokemon: 'Jynx', gifName: 'Jynx.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 24, namePokemon: 'Electabuzz', gifName: 'Electabuzz.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 25, namePokemon: 'Magmar', gifName: 'Magmar.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 26, namePokemon: 'Pinsir', gifName: 'Pinsir.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 27, namePokemon: 'Tauros', gifName: 'Tauros.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 28, namePokemon: 'Magikarp', gifName: 'Magikarp.gif', regions: [Region.KANTO, Region.JOHTO, Region.HOENN, Region.SINNOH, Region.UNOVA] },
  { idPokemon: 29, namePokemon: 'Ditto', gifName: 'Ditto.gif', regions: [Region.KANTO, Region.JOHTO, Region.HOENN, Region.UNOVA] },
  { idPokemon: 30, namePokemon: 'Eevee', gifName: 'Eevee.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH, Region.UNOVA] },
  { idPokemon: 31, namePokemon: 'Vaporeon', gifName: 'Vaporeon.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH, Region.UNOVA] },
  { idPokemon: 32, namePokemon: 'Jolteon', gifName: 'Jolteon.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH, Region.UNOVA] },
  { idPokemon: 33, namePokemon: 'Flareon', gifName: 'Flareon.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH, Region.UNOVA] },
  { idPokemon: 34, namePokemon: 'Porygon', gifName: 'Porygon.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 35, namePokemon: 'Omanyte', gifName: 'Omanyte.gif', regions: [Region.KANTO] },
  { idPokemon: 36, namePokemon: 'Omastar', gifName: 'Omastar.gif', regions: [Region.KANTO] },
  { idPokemon: 37, namePokemon: 'Kabuto', gifName: 'Kabuto.gif', regions: [Region.KANTO] },
  { idPokemon: 38, namePokemon: 'Kabutops', gifName: 'Kabutops.gif', regions: [Region.KANTO] },
  { idPokemon: 39, namePokemon: 'Aerodactyl', gifName: 'Aerodactyl.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 40, namePokemon: 'Bulbasaur', gifName: 'Bulbasaur.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 41, namePokemon: 'Ivysaur', gifName: 'Ivysaur.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 42, namePokemon: 'Charmander', gifName: 'Charmander.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 43, namePokemon: 'Charmeleon', gifName: 'Charmeleon.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 44, namePokemon: 'Squirtle', gifName: 'Squirtle.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 45, namePokemon: 'Wartortle', gifName: 'Wartortle.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 46, namePokemon: 'Caterpie', gifName: 'Caterpie.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 47, namePokemon: 'Metapod', gifName: 'Metapod.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 48, namePokemon: 'Butterfree', gifName: 'Butterfree.gif', regions: [Region.KANTO, Region.JOHTO, Region.SINNOH] },
  { idPokemon: 49, namePokemon: 'Weedle', gifName: 'Weedle.gif', regions: [Region.KANTO, Region.JOHTO] },
  { idPokemon: 50, namePokemon: 'Kakuna', gifName: 'Kakuna.gif', regions: [Region.KANTO, Region.JOHTO] }
];
