import Button from '@restart/ui/esm/Button'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedIn } from '../../actions'
import { addProduct } from '../../actions/product.action'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/UI/Input/input'

function AddProduct() {

    const auth = useSelector(state => state.auth);
    console.log(auth);

    const dispatch = useDispatch();
    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn());
        }

    }, []);

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => {
        const form = new FormData();
        form.append('name', productName);
        form.append('price', productPrice);
        form.append('description', productDescription);
        form.append('productPicture', productImage);
        dispatch(addProduct(form));

        setShow(false);
    }

    const handleShow = () => setShow(true);

    const handleCategoryImage = (e) => {
        setProductImage(e.target.files[0]);
    }



    return (
        <Layout>
            <Container>

                <Row style={{ marginTop: '20px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                       


                        {/* <Example /> */}
                        <>
                        <Row style={{ textAlign: "center", marginTop:"50px", marginBottom:"30px" }}>
                            <Col>
                            <h1>Welcome <span style={{color:"red"}}>{auth.user.firstName}!!</span> </h1>
                            
                            
                            </Col>
                                
                                
                                
                            </Row>

                        
                            <Row style={{ textAlign: "center", marginTop:"50px", marginBottom:"30px" }}>
                                <h2>Add Product</h2>
                                
                            </Row>
                            <Row>
                                <Button variant="primary" onClick={handleShow} style={{ backgroundColor: "green", color: "white", border: "none", padding: "10px", marginTop: "10px" }}>
                                    Add Product
                                </Button>
                            </Row>


                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Product</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Input
                                        label="Name"
                                        placeholder="Name"
                                        value={productName}
                                        type="text"
                                        onChange={(e) => { setProductName(e.target.value) }}
                                    />
                                    <Input
                                        label="Price"
                                        placeholder="Enter Email"
                                        value={productPrice}
                                        type="number"
                                        onChange={(e) => { setProductPrice(e.target.value) }}
                                    />
                                    <Input
                                        label="Description"
                                        placeholder="Enter Email"
                                        value={productDescription}
                                        type="text"
                                        onChange={(e) => { setProductDescription(e.target.value) }}
                                    />
                                    <Input
                                        label="Product Image"
                                        type="file"
                                        name="productImage"
                                        onChange={handleCategoryImage}

                                    />

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>

                    </Col>
                </Row>

            </Container>

        </Layout>





    )
}

export default AddProduct
