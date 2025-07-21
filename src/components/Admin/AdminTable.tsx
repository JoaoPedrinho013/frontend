import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { dataPlayer, Player } from './utils/Player.tsx';
import { dataLastShiny } from './utils/LastShiny.tsx';

type PlayerPokemon = Player & {
  namePokemon?: string;
};

export default function AdminTable() {
  const combinedData = useMemo(() => {
    return dataPlayer.map(player => ({
      ...player,
      namePokemon: dataLastShiny.find(pokemon => pokemon.idPlayer === player.idPlayer)?.namePokemon || 'N/A',
    }));
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
        accessorKey: 'namePokemon',
        header: 'Pokemon',
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
