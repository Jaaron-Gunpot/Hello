import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'employer', headerName: 'Employer', width: 300 },
    { field: 'degree', headerName: 'Degree', width: 130 },
    {
      field: 'city',
      headerName: 'City',
      width: 150,
    },
    {
      field: 'term',
      headerName: 'Term',
      width: 160,
    },
  ];

const CoopTable = ({ title, coopInfo }) => {
      //each element needs an id so just make an id based on index
  coopInfo.forEach((element,index) => {
    element.id=(index+1);
  });
  const rows = coopInfo
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>{title}</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}




export default CoopTable;