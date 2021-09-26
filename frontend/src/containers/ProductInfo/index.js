import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'

function ProductInfo() {
    return (
        <div>
            <Container>

                <Row>
                    <Col md={4}>
                        <div className="firstCol">
                            <img src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/7/9/u/c20-rmx3063-realme-original-imagfxfzjrkqtbhe.jpeg?q=70" alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="secondCol">

                            <div className="details">
                                <h1>Product Details</h1>
                                <Row>
                                    <div className="description">
                                        <p>The Vivo V11 is a mobile phone that will keep you entertained and productive at the same time.
                                            Its 16.5 cm (6.5) Large HD+ Display ensures that you get an expansive view of movies, games,
                                            and even work-related docs for a more immersive experience.
                                            Thanks to the Helio G35 Powerful Processor, you can enjoy a high clock speed that will make it almost effortless
                                            for you to multitask and game.
                                            And, with the AI Selfie Camera, you can take stunning selfies that will be a hit on social media. </p>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductInfo
