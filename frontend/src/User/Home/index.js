import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import UserHeader from '../../components/UserHeader'
import Countdown from 'react-countdown';
import './style.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function UserHome() {

    const product = useSelector(state => state.product);
    const history = useHistory();

    const goSomewhere = () => {
        history.push("/productinfo");
    }
    const Completionist = () => <span>You are good to go!</span>;

    return (
        <div>
            <UserHeader />
            <div>
                <Carousel>
                    <Carousel.Item interval={3500}>
                        <img
                            style={{ width: "100%", height: "300px", marginTop: "56px" }}
                            src="https://s3images.coroflot.com/user_files/individual_files/large_783291_hbz_qswefiwchggq8l8_athzt.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img
                            style={{ width: "100%", height: "300px", marginTop: "56px" }}
                            src="https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            style={{ width: "100%", height: "308px", marginTop: "48px" }}
                            src="https://s3images.coroflot.com/user_files/individual_files/large_601412_suge0avknnpat6lsf3yxyq3nd.jpg"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            style={{ width: "100%", height: "300px", marginTop: "56px" }}
                            src="https://img.freepik.com/free-psd/black-friday-banner-mockup-with-image_23-2147982242.jpg?size=626&ext=jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>


            <Row className="body">

                <div className="box">
                    <h2 className="font">Deal of the Day</h2>

                    <div className="counter">
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" height="24" width="24" />

                        <Countdown date={Date.now() + 43200000}>
                            <Completionist />
                        </Countdown>
                        <span style={{ marginLeft: "10px" }}>Left</span>
                    </div>
                </div>

                <div className="card">
                    <div className="cardHead">
                        <div>Mobiles under 10k</div>
                        <button>view all</button>
                    </div>
                    <div style={{ display: "flex" }}>


                        <div className="productContainer">
                            <div className="productImgContainer">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/7/9/u/c20-rmx3063-realme-original-imagfxfzjrkqtbhe.jpeg?q=70" alt="" />
                            </div>
                            <div className="productInfo">
                                <div style={{ margin: '5px 0' }}>realme C20</div>
                            </div>
                            <div className="productPrice">6999</div>
                        </div>


                        <div className="productContainer">
                            <div className="productImgContainer">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kplisnk0/mobile/y/9/t/c25s-rmx3197-realme-original-imag3smcaztwgzeg.jpeg?q=70" alt="" />
                            </div>
                            <div className="productInfo">
                                <div style={{ margin: '5px 0' }}>realme C25s</div>
                            </div>
                            <div className="productPrice">6999</div>
                        </div>

                        <div className="productContainer">
                            <div className="productImgContainer">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/y/2/b/narzo-30-rmx2156-realme-original-imag45yhzhugdcqh.jpeg?q=70" alt="" />
                            </div>
                            <div className="productInfo">
                                <div style={{ margin: '5px 0' }}>realme Narzo 30</div>
                            </div>
                            <div className="productPrice">6999</div>
                        </div>

                        <div className="productContainer">
                            <div className="productImgContainer">
                                <img src="https://rukminim1.flixcart.com/image/416/416/ksm49e80/mobile/y/6/g/y33s-v2109-vivo-original-imag65dv7hfk6pqy.jpeg?q=70" alt="" />
                            </div>
                            <div className="productInfo">
                                <div style={{ margin: '5px 0' }}>vivo Y33s</div>
                            </div>
                            <div className="productPrice">6999</div>
                        </div>

                        <div className="productContainer">
                            <div className="productImgContainer">
                                <img src="https://rukminim1.flixcart.com/image/416/416/ksj9dow0/mobile/g/i/o/y21-v2111-vivo-original-imag627uhcnzx7mn.jpeg?q=70" alt="" />
                            </div>
                            <div className="productInfo">
                                <div style={{ margin: '5px 0' }}>vivo Y21</div>
                            </div>
                            <div className="productPrice">6999</div>
                        </div>

                        <div className="productContainer">
                            <div className="productImgContainer">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kmmcrrk0/mobile/o/l/x/a53-cph2127-oppo-original-imagfgzs2fng4gqt.jpeg?q=70" alt="" />
                            </div>
                            <div className="productInfo">
                                <div style={{ margin: '5px 0' }}>OPPO A53</div>
                            </div>
                            <div className="productPrice">6999</div>
                        </div>

                        <div className="productContainer">
                            <div className="productImgContainer">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kksmikw0/mobile/x/e/g/y20g-v2037-vivo-original-imagy2ht5qrgn3zx.jpeg?q=70" alt="" />
                            </div>
                            <div className="productInfo">
                                <div style={{ margin: '5px 0' }}>vivo Y20G</div>
                            </div>
                            <div className="productPrice">6999</div>
                        </div>

                        <div className="productContainer">
                            <div className="productImgContainer">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kjlrb0w0/mobile/t/3/f/vivo-y20a-v2052-original-imafz4z8egkegqf7.jpeg?q=70" alt="" />
                            </div>
                            <div className="productInfo">
                                <div style={{ margin: '5px 0' }}>vivo Y20A</div>
                            </div>
                            {/* <span>4.3</span>&nbsp;
                            <span>3353</span> */}
                            <div className="productPrice">6999</div>
                        </div>


                    </div>

                </div>




                {/* new card list */}
                <div className="card">
                    <div className="cardHead">
                        <div>Mobiles </div>
                        <button>view all</button>
                    </div>

                    <div style={{ display: "flex" }}>
                        <Row>
                            {
                                product.products.length > 0 ?
                                    product.products.map(productData =>
                                        <Col md={3} lg={2} sm={6} xs={6}>
                                            <div className="productContainer" onClick={goSomewhere} >
                                                <div className="productImgContainer">
                                                    <img src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/7/9/u/c20-rmx3063-realme-original-imagfxfzjrkqtbhe.jpeg?q=70" alt="" />
                                                </div>
                                                <div className="productInfo">
                                                    <div style={{ margin: '5px 0' }}>{productData.name}</div>
                                                </div>
                                                <div className="productPrice">₹{productData.price}</div>
                                            </div>
                                        </Col>

                                    ) : null
                            }
                        </Row>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default UserHome
