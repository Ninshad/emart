import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isUserLoggedIn } from '../../actions';
import Layout from '../../components/Layout/Layout'
import './style.css';

function Home() {


    const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();
    useEffect(() => {
        if(!auth.authenticate){
          dispatch(isUserLoggedIn());
        }
        
      }, []);

    return (
        <div>
            <Layout>
                <Container fluid>
                   <Row>
                       <Col md={2} className='sidebar' >
                           <ul>
                               <li> <NavLink to={'/'}>Home</NavLink> </li>
                               <li> <NavLink to={'/addproduct'}>Add Product</NavLink> </li>
                           </ul>
                       </Col>
                       <Col md={10} style={{marginLeft:'auto'}}>container</Col>
                   </Row>
                </Container>
            

            </Layout>
        </div>
    )
}

export default Home
