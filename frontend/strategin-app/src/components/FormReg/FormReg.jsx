import { Container, Row, Form, Button } from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './FormReg.css'

const FormReg = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    axios.post(`http://localhost:3001/api/auth/register`, {
      firstname : firstname,
      lastname : lastname,
      email : email,
      password : password
     })
    .then(res => {
      if (res.status === 201)
        return navigate('/');
    })
  }
  
  return (
          <Container className="regFormContainer shadow">
            <Row style={{height : "30%", fontSize : "6vh", display : "flex", justifyContent : "center", alignItems : "center"}}>
              Inscription
            </Row>
            <Row className="regPageRowForm">
              <Form className="regForm">
                <Form.Group className="mb-4 " controlId="formBasicEmail">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setFirstName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-4 " controlId="formBasicEmail">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setLastName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-4 " controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                  </Form.Group>
              </Form>
              <Button variant="primary" type="submit" onClick={handleClick}>
                  Je m'inscris !
              </Button>
            </Row>
          </Container>
    );
  }

export default FormReg;