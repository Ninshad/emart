import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/Layout'
import ProductsTable from '../ProductsTable';
import './style.css';

function Home() {


    const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();
   

    return (
        <div>
            <Layout>
                <Container fluid>
                   <Row>
                       <Col xs={2} sm={2} md={2} className='sidebar' >
                           <ul>
                               <li> <NavLink to={'/'} >Home</NavLink> </li>
                               <li> <NavLink to={'/addproduct'} >Add Product</NavLink> </li>
                           </ul>
                       </Col>
                       <Col xs={12} md={10} style={{marginLeft:'auto'}}> <ProductsTable/>  </Col>
                   </Row>
                </Container>
            

            </Layout>
        </div>
    )
}

export default Home
