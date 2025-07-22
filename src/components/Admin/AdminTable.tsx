import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { dataPlayer, Player } from './utils/Player.tsx';
import { dataPlayerPokemon } from './utils/PlayerPokemon.tsx';

type PlayerPokemon = Player & {
  namePokemon?: string;
};

export default function AdminTable() {
  const combinedData = useMemo(() => {
  return dataPlayer.map(player => {
    const pokemonsDoPlayer = dataPlayerPokemon.filter(pokemon => pokemon.idPlayer === player.idPlayer);
    
    const ultimoShiny = pokemonsDoPlayer.at(-1)?.namePokemon || 'N/A';

    return {
      ...player,
      lastShiny: ultimoShiny,
      totalShiny: pokemonsDoPlayer.length,
    };
  });
}, []);



  const columns = useMemo<MRT_ColumnDef<PlayerPokemon>[]>(
    () => [
      {
        accessorKey: 'idPlayer',
        header: 'ID',
        size: 80,
        minSize: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'namePlayer',
        header: 'NAME',
        size: 80,
        minSize: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'lastShiny',
        header: 'LAST SHINY',
        size: 80,
        minSize: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'totalShiny',
        header: 'TOTAL SHINY',
        size: 80,
        minSize: 60,
        maxSize: 100,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: combinedData,
    enableFullScreenToggle: false,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableDensityToggle: false,
    enableHiding: false,
    enableGlobalFilter: true,
    state: {
      showGlobalFilter: true,
    },
  });

  return <MaterialReactTable table={table} />;
}
