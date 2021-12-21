import { Container, Row, Col } from 'react-bootstrap';
// import {ReactComponent as ReactLogo} from '../../assets/logo.svg';
import './Users.css'
import UserList from '../../components/UserList/UserList';
import { useEffect, useState } from 'react';
import axios from 'axios';



const UsersPage = (props) => {
  const [usersList , setUserList] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:3001/api/auth/users`, {
      headers : {
        'Authorization' : "Bearer " + localStorage.getItem('token')
      }
    })
    .then(res => {
      setUserList(res.data.users)
    })
  }, [])

  return (
    <Container fluid className="userPageContainer">
      <Row>
        <Col className="userPageCol">
          <div className="cardUserList shadow">
            <UserList usersList={usersList}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UsersPage;
