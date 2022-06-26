import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Checkbox, Container } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 10 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: <Checkbox/> },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: <Checkbox/> },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: <Checkbox/> },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: <Checkbox/> },
  { id: 6, lastName: 'Melisandre', firstName: null, age: <Checkbox/> },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: <Checkbox/> },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: <Checkbox/> },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: <Checkbox/> },
];

export default function AccountsManagement() {
  return (
    <Container component={'main'} maxWidth='md' sx={{mt:5}}>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </div>
    </Container>
  );
}



