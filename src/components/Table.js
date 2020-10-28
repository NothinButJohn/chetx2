import React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'rank', headerName: 'Rank', width: 50 },
    { field: 'Anime', headerName: 'Anime Name', width: 100 },
    { field: 'Genre', headerName: 'Genre', width: 100 },
];

const rows = [
    { id: 1, Anime: 'Naruto', Genre: 'Action' },
    { id: 2, Anime: 'Bleach', Genre: 'Mystic' },
    { id: 3, Anime: 'Hunter x Hunter', Genre: 'Fantasy' },
];

export default function DataGridPractice() {
    return(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    )
}