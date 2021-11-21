import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faDiscord, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col, Image } from "react-bootstrap";
import { LearnMore } from "../../elements/Button";
import HomeHero from "./HomeStyles";


const Home = () => {

    return (
        <div className="home-container">
            <HomeHero className="container" fluid >
                <Row>
                    <Col className="hero-text" lg={12}>
                        <h1 className="text-white">A Lord of the Rings inspired MetaVerse.</h1>
                        <Container className="icons-container">
                            <FontAwesomeIcon className="icon-social" icon={faDiscord} color="gold" /> 
                            <FontAwesomeIcon className="icon-social" icon={faTwitter} color="gold" /> 
                            <FontAwesomeIcon className="icon-social" icon={faInstagram} color="gold" /> 
                            <FontAwesomeIcon className="icon-social" icon={faGithub} color="gold" /> 
                        </Container>
                        <LearnMore as={Link} primary to="contact" >
                            Learn More
                        </LearnMore>
                    </Col>
                </Row>
            </HomeHero>
            <div className="about-section">
                <Row className="my-5"> 
                    <Col lg={6}>
                        <Image fluid src="https://via.placeholder.com/560" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <h2>About TokenVerse</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat</p>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col lg={4}>
                        <Image fluid src="https://via.placeholder.com/120" className="img-fluid" />
                        <p>Crypto currency, NFT’s, and an experience built on the Binance Smart Chain.</p>
                    </Col>
                    <Col lg={4}>
                        <Image fluid src="https://via.placeholder.com/120" className="img-fluid" />
                        <p>A Lord of the Rings inspired virtual experience developed with Unreal Engine.</p>
                    </Col>
                    <Col lg={4}>
                        <Image fluid src="https://via.placeholder.com/120" className="img-fluid" />
                        <p>YohDev is a forward thinking development team based in Winston-Salem North Carolina.</p>
                    </Col>

                </Row>
            </div>
            <div className="vision-section bg-dark">
                <Row className="my-5"> 
                    <Col lg={6}>
                        <Image fluid src="https://via.placeholder.com/560" className="img-fluid" />
                    </Col>
                    <Col lg={6} className="text-white">
                        <h2>About TokenVerse</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat</p>
                    </Col>
                </Row>
                <Row className="my-5 text-white">
                    <Col lg={6} className="d-flex">
                        <Col>
                            <Image fluid src="https://via.placeholder.com/68" className="img-fluid" />
                            <p>Castar</p>
                        </Col>
                        <Col>
                            <Image fluid src="https://via.placeholder.com/68" className="img-fluid" />
                            <p>Celeban</p>
                        </Col>
                    </Col>
                    <Col lg={6} className="d-flex">
                        <Col>
                            <Image fluid src="https://via.placeholder.com/68" className="img-fluid" />
                            <p>Durins</p>
                        </Col>
                        <Col>
                            <Image fluid src="https://via.placeholder.com/68" className="img-fluid" />
                            <p>Farthing</p>
                        </Col>
                    </Col>
                </Row>
            </div>
            <div className="cta-section">
                <Row>
                    <Col className="hero-text" lg={12}>
                        <h2 className="text-white">Earn Crypto in the Experience. Cash out in reality.</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat</p>
                        <LearnMore as={Link} primary to="contact" >
                            Learn More
                        </LearnMore>
                    </Col>
                </Row>
            </div>
            <footer className="bg-dark">
            <Row className="my-5">
                    <Col lg={6}>
                        <Image fluid src="https://via.placeholder.com/320" className="img-fluid" />
                        <p>A Lord of the Rings inspired MetaVerse.</p>
                        <Container className="icons-container">
                            <FontAwesomeIcon className="icon-social" icon={faDiscord} color="gold" />
                            <FontAwesomeIcon className="icon-social" icon={faTwitter} color="gold" />
                            <FontAwesomeIcon className="icon-social" icon={faInstagram} color="gold" />
                            <FontAwesomeIcon className="icon-social" icon={faGithub} color="gold" />
                        </Container>
                    </Col>
                    <Col lg={6}>
                        <h3 className="text-white">Subscribe for updates</h3>
                        <LearnMore as={Link} primary to="contact" >
                            Subscribe
                        </LearnMore>
                    </Col>
                </Row>
            </footer>
        </div>
    );
}

export default Home;