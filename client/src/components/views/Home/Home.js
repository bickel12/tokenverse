import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faDiscord, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Global } from "../../styles/Global";
import { LearnMore } from "../../elements/Button";
import { HomeHero, CtaSection, homeImg, AboutSection } from "./HomeStyles";


const Home = () => {

    return (
        <div className="home-container">
            <HomeHero fluid >
                <Row className="hero-row">
                    <Col className="hero-text" lg={12}>
                        <h1 className="text-white">A Lord of the Rings inspired MetaVerse.</h1>
                        <Container className="icons-container d-flex">
                            <FontAwesomeIcon className="icon-social" icon={faDiscord} color="gold" />
                            <FontAwesomeIcon className="icon-social" icon={faTwitter} color="gold" />
                            <FontAwesomeIcon className="icon-social" icon={faInstagram} color="gold" />
                            <FontAwesomeIcon className="icon-social" icon={faGithub} color="gold" />
                        </Container>
                        <LearnMore as={Link} primary to="contact" className="mt-5">
                            Learn More
                        </LearnMore>
                    </Col>
                </Row>
            </HomeHero>
            <AboutSection>
                <Row className="my-5">
                    <Col lg={6}>
                        <Image fluid src={homeImg.star} className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <Global.HeadingTwo>About TokenVerse</Global.HeadingTwo>
                        <Global.Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat</Global.Paragraph>
                    </Col>
                </Row>
                <Row className="my-5 logos">
                    <Col lg={4}>
                        <Image fluid src={homeImg.binance} className="img-fluid" />
                        <Global.Paragraph>Crypto currency, NFT’s, and an experience built on the Binance Smart Chain.</Global.Paragraph>
                    </Col>
                    <Col lg={4}>
                        <Image fluid src={homeImg.unreal} className="img-fluid" />
                        <Global.Paragraph>A Lord of the Rings inspired virtual experience developed with Unreal Engine.</Global.Paragraph>
                    </Col>
                    <Col lg={4}>
                        <Image fluid src={homeImg.yohdev} className="img-fluid" />
                        <Global.Paragraph>YohDev is a forward thinking development team based in Winston-Salem North Carolina.</Global.Paragraph>
                    </Col>

                </Row>
            </AboutSection>
            <Container fluid className="vision-section bg-dark">
                <Row className="my-5 hero-row">
                    <Col lg={6} className="p-0">
                        <Image fluid src={homeImg.vrGuy} className="img-fluid" />
                    </Col>
                    <Col lg={6} className="text-white">
                        <Global.HeadingTwoWhite>Our Vision</Global.HeadingTwoWhite>
                        <Global.ParagraphWhite>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat</Global.ParagraphWhite>
                        <Row className="py-5 text-white">
                    <Col lg={6} className="d-flex">
                        <Col>
                            <Image fluid src={homeImg.castar} className="img-fluid" />
                            <Global.ParagraphWhite>Castar</Global.ParagraphWhite>
                        </Col>
                        <Col>
                            <Image fluid src={homeImg.celebian} className="img-fluid" />
                            <Global.ParagraphWhite>Celeban</Global.ParagraphWhite>
                        </Col>
                    </Col>
                    <Col lg={6} className="d-flex">
                        <Col>
                            <Image fluid src={homeImg.durins} className="img-fluid" />
                            <Global.ParagraphWhite>Durins</Global.ParagraphWhite>
                        </Col>
                        <Col>
                            <Image fluid src={homeImg.farthing} className="img-fluid" />
                            <Global.ParagraphWhite>Farthing</Global.ParagraphWhite>
                        </Col>
                    </Col>
                </Row>
                    </Col>
                </Row>
            </Container>
            <CtaSection fluid className="cta-section">
                <Row className="cta-row">
                    <Col className="cta-text" lg={12}>
                        <Global.HeadingTwoWhite className="span-style">Earn Crypto in the Experience. Cash out in reality.</Global.HeadingTwoWhite>
                       <Global.ParagraphWhite>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat diam commodo quis. Ut quis posuere erat. Duis justo dui, auctor egestas nulla rutrum, varius volutpat</Global.ParagraphWhite>
                        <LearnMore as={Link} primary to="contact" >
                            Learn More
                        </LearnMore>
                    </Col>
                </Row>
            </CtaSection>
            <footer className="container-fluid bg-dark">
            <Row className="py-5">
                    <Col lg={6}>
                        <Image fluid src={homeImg.tokenverse} className="img-fluid" />
                        <Global.ParagraphWhite>A Lord of the Rings inspired MetaVerse.</Global.ParagraphWhite>
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