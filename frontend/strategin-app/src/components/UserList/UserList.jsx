import { Container } from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: '_id', headerName: 'ID', width: 300 },
  { field: 'firstname', headerName: 'Prénom', width: 300 },
  { field: 'lastname', headerName: 'Nom', width: 300 },
  { field: 'email', headerName: 'E-mail', width: 300 },
];

const UserList = (props) => {

  const dataArray = props.usersList.map((x, i) => {
    x.id = i + 1
    return x
  })
  
  return (
          <Container>
            <div style={{ height: '80vh', width: '100%' }}>
              <DataGrid
                rows={dataArray}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </Container>
    );
  }

export default UserList;