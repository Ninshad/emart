import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { signOut } from '../../actions/auth.actions'
import './style.css';
import { FaShoppingCart } from "react-icons/io";
import { BsSearch } from "react-icons/bs";


function UserHeader() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut())
  }

  

  const Authenticate = () => {
    if (!auth.authenticate) {
      return (
        <>
        <NavDropdown.Item href="/signin">Signin</NavDropdown.Item>
        <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
        
        </>
      )
    }else{
      return(
       
        <span onClick={logout} style={{marginLeft:"45px"}}>Logout</span>
      )
    }
  };

 

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" style={{ zIndex: 1, position: "fixed", width: "100%", background: "#2874f0" }}>
        <Container >
          {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}

          <div className="navMain" >

            <Row style={{ width: "100%" }}>
              <Col md={2}>
                <Link to="/" className="navbar-brand">Emart</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                </Navbar.Collapse>
              </Col>

              <Col md={6}>
                <div className="searchbar">
                  <input type="text" placeholder="Search for products" /> 
                </div>
              </Col>

              <Col md={2}>
                <div className="navDrop">
                  <Nav className="me-auto">
                    <NavDropdown title={auth.user.firstName} id="collasible-nav-dropdown">

                      {Authenticate()}
                      
                      <NavDropdown.Divider />
                      
                    </NavDropdown>
                  </Nav>
                </div>
              </Col>

              <Col md={2} >
                {/* <div className="cart">
                  
                  <h7> Cart</h7> 
  
                </div> */}

              </Col>




            </Row>

          </div>


        </Container>
      </Navbar>
    </div>
  )
}

export default UserHeader
