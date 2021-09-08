import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input/input'

function Signin() {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label="Email"
                placeholder="Enter Email"
                value=""
                type="email"
                onChange={() => { }}
                errorMessage="We'll never share your email with anyone else."

              />
              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="email"
                onChange={() => { }}

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

    </Layout>
  )
}

export default Signin
