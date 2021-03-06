import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input/input'
import { useDispatch, useSelector } from 'react-redux'
import {  signup } from '../../actions'
import { Redirect } from 'react-router'
import Example from "../../components/Loading/Example";


function Signup() {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const sign_up = useSelector(state => state.signup);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const userSignup = (e) => {

        e.preventDefault();

        const user = { firstName, lastName, email, password }
        dispatch(signup(user))
    }

    if (auth.authenticate) {
        return <Redirect to={'/admin'} />
    }

    if (sign_up.loading) {
        return (
            <div style={{marginTop:"100px"}}>
                <Example />
            </div>
        
        )
        
    }

    return (
        <div>


            <Row>
                <Layout />
            </Row>
            <Row style={{ marginTop: '100px' }}>

                <Container>
                    {sign_up.message}
                    <Row >
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={userSignup} >
                                <Row>
                                    <Col>
                                        <Input
                                            label="First Name"
                                            placeholder="First Name"
                                            value={firstName}
                                            type="text"
                                            onChange={(e) => setFirstName(e.target.value)}

                                        />


                                    </Col>
                                    <Col>
                                        <Input
                                            label="Last Name"
                                            placeholder="Last Name"
                                            value={lastName}
                                            type="text"
                                            onChange={(e) => setLastName(e.target.value)}

                                        />
                                    </Col>
                                </Row>

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

export default Signup
