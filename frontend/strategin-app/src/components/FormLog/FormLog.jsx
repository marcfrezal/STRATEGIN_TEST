import { Container, Row, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link} from "react-router-dom";
import { useState } from "react";


const FormLogin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        axios.post(`http://localhost:3001/api/auth/login`, { 
          email : email,
          password : password
         })
        .then(res => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
                return navigate('/users');
            }
        })
    }
    
    return (
          <Container className="homePageFormContainer shadow">
            <Row style={{height : "30%", fontSize : "6vh", display : "flex", justifyContent : "center", alignItems : "center"}}>
              Bienvenue !
            </Row>
            <Row className="homePageRowForm">
              <Form>
                <Form.Group className="mb-4 " controlId="formBasicEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                  <Form.Text className="text-muted">
                    Vous n'etes pas encore inscrit ? <Link to="/register">Inscrivez-vous ici.</Link>
                  </Form.Text>
                </Form.Group>
              </Form>
              <Button variant="primary" type="submit" onClick={handleClick}>
                  Go
              </Button>
            </Row>
          </Container>
    );
  }

export default FormLogin;