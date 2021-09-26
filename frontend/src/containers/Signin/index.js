import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input/input'
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';



function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const userLogin = (e) => {
  e.preventDefault();

    const user = {
      email, password
    }

    dispatch(login(user));

  }

  if (auth.authenticate) {
    return <Redirect to={'/admin'} />
  }

  return (
    <div>
      <Row>
        <Layout />
      </Row>

      <Row style={{ marginTop: '100px' }}>
        <Container>
          <Row >
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userLogin}>
                <Input
                  label="Email"
                  placeholder="Enter Email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  errorMessage="We'll never share your email with anyone else."

                />
                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="Password"
                  onChange={(e) => setPassword(e.target.value)}

                />
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>

        </Container>
      </Row>
    </div>

  )
}

export default Signin
