import "./dataTable.scss"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    { id: 1, col1: '1', col2: 'vicente', col3: "Lazcano", col4: "30", col5: "Vicente Lazcano" },
    { id: 2, col1: '1', col2: 'vicente', col3: "Lazcano", col4: "30", col5: "Vicente Lazcano" },
    { id: 3, col1: '1', col2: 'vicente', col3: "Lazcano", col4: "30", col5: "Vicente Lazcano" },
    { id: 4, col1: '1', col2: 'vicente', col3: "Lazcano", col4: "30", col5: "Vicente Lazcano" },
    { id: 5, col1: '1', col2: 'vicente', col3: "Lazcano", col4: "30", col5: "Vicente Lazcano" },
    { id: 6, col1: '1', col2: 'vicente', col3: "Lazcano", col4: "30", col5: "Vicente Lazcano" },
    { id: 7, col1: '1', col2: 'vicente', col3: "Lazcano", col4: "30", col5: "Vicente Lazcano" },
    { id: 8, col1: '1', col2: 'vicente', col3: "Lazcano", col4: "30", col5: "Vicente Lazcano" },
];

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Id', width: 150 },
    { field: 'col2', headerName: 'First name', width: 150 },
    { field: 'col3', headerName: 'Last name', width: 150 },
    { field: 'col4', headerName: 'Age', width: 150 },
    { field: 'col5', headerName: 'Full name', width: 150 },
];


const DataTable = () => {
    return (
        <div className="dataTable">
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    )
}
export default DataTable