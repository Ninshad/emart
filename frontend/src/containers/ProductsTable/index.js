import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import 'reactjs-popup/dist/index.css';
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import { deleteProduct, updateProduct } from '../../actions/product.action';
import Input from '../../components/UI/Input/input';

function ProductsTable() {

    const product = useSelector(state => state.product)

    const dispatch = useDispatch();

    const [deleteShow, setDeleteShow] = useState(false);
    const [show, setShow] = useState(false);
    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");




    const handleCloseDelete = () => {
        console.log(productId);
        dispatch(deleteProduct(productId))
        setDeleteShow(false);
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deleteModalClose = () => setDeleteShow(false);
    const deleteModalOpen = () => setDeleteShow(true);




    const handleCloseUpdateModels = () => {
        const _id = productId

        const newData = {
            _id,
            name,
            price,
            description
        }

        console.log(newData);
        dispatch(updateProduct(newData))
        setShow(false);
    }






    return (

        <Container>

            <Button variant="primary" style={{ backgroundColor: "green", color: "white", border: "none", padding: "10px", marginTop: "10px" }}>
                Add Product
            </Button>

            <Table style={{ marginTop: "50px" }} bordered hover>
                <thead>
                    <tr>
                        <th> </th>
                        <th>No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                            product.products.map((product, index) =>
                                <tr>
                                    <td> <input type="checkbox" value={product._id} onChange={(e) => setProductId(e.target.value)} /> </td>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td><img src={`http://localhost:9000/public/${product.img}`} /> </td>

                                    {/* <td>
                                        {
                                            product.productPictures.map(picture =>
                                                <div>
                                                    <img src={`http://localhost:9000/public/${picture.img}`} />

                                                </div>
                                            )
                                        }
                                    </td> */}
                                    <td> <div>
                                        <Row>
                                            <Col>
                                                <Button onClick={deleteModalOpen} style={{ backgroundColor: "#d60000", color: "#fff", border: "none", width: "100%", padding: "10px" }}>Delete</Button>
                                            </Col>
                                            <Col>
                                                <Button onClick={handleShow} style={{ backgroundColor: "#0369ff", color: "#fff", border: "none", width: "100%", padding: "10px", marginTop: "0px" }}>Update</Button>
                                            </Col>


                                            <Modal show={show} onHide={handleClose} style={{marginTop:"90px"}}>
                                                <Modal.Header closeButton style={{padding:"0 1rem", height:"15vh"}}>
                                                    <Modal.Title style={{marginTop:"100px"}}>Are you sure update?</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>

                                                    <Form onSubmit={handleCloseUpdateModels} >
                                                        <Input
                                                            label="Name"
                                                            placeholder="Enter Name"
                                                            value={name}
                                                            type="text"
                                                            onChange={(e) => setName(e.target.value)}

                                                        />
                                                        <Input
                                                            label="Price"
                                                            placeholder="Price"
                                                            value={price}
                                                            type="text"
                                                            onChange={(e) => setPrice(e.target.value)}

                                                        />
                                                        <Input
                                                            label="Description"
                                                            placeholder="Description"
                                                            value={description}
                                                            type="text"
                                                            onChange={(e) => setDescription(e.target.value)}

                                                        />

                                                        <Button style={{ backgroundColor: "green", color: "white", border: "none" }} type="submit">
                                                            Submit
                                                        </Button>

                                                    </Form>

                                                </Modal.Body>
                                                <Modal.Footer>

                                                </Modal.Footer>
                                            </Modal>

                                            {/* Delete Modal */}

                                            <Modal show={deleteShow} onHide={deleteModalClose} style={{marginTop:"90px"}}>
                                                <Modal.Header closeButton style={{padding:"0 1rem", height:"15vh"}}>
                                                    <Modal.Title style={{marginTop:"100px"}}>Confirm Deletion</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Row>
                                                        <Col md={3}>
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLAOWtoWMCbRVbKDyMynVxO8C3-zjR2YdH7NIzvnibj1TzlYSojG8wMdcW4oNhWO6Cog&usqp=CAU" alt="" width="100vw" />
                                                        </Col>
                                                        <Col md={9} style={{marginLeft:"0px"}}>
                                                        <p>Are you sure you want to permanently remove this item?</p>
                                                        </Col>
                                                    </Row>
                                                
                                                    

                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button onClick={handleCloseDelete} style={{ backgroundColor: "#d60000", color: "#fff", border: "none", width: "100%", padding: "10px" }}>Delete</Button>
                                                    <Button onClick={deleteModalClose} style={{ backgroundColor: "#0369ff", color: "#fff", border: "none", width: "100%", padding: "10px", marginTop: "0px" }}>Cancel</Button>
                                                </Modal.Footer>
                                            </Modal>

                                        </Row>
                                    </div>  </td>

                                </tr>) : null
                    }

                </tbody>
            </Table>

        </Container>

    )
}

export default ProductsTable
