import styled from 'styled-components';
import { Container } from "react-bootstrap";
import bg from '../../../assets/static/img/hero_bg.jpg';
import star from "../../../assets/static/img/compass_v1.png";
import binance from "../../../assets/static/img/binance_logo.png";
import unreal from "../../../assets/static/img/unreal_engine_logo.png";
import yohdev from "../../../assets/static/img/yohdev_logo_gray.png";
import vrGuy from "../../../assets/static/img/vr-guy.jpg";
import ctaBg from "../../../assets/static/img/cta-bg.jpg";
import castar from "../../../assets/static/img/castar_logo_v1.png";
import durins from "../../../assets/static/img/durins_logo_v1.png";
import farthing from "../../../assets/static/img/farthing_logo_v1.png";
import celebian from "../../../assets/static/img/celebian_logo_v1.png";
import tokenverse from "../../../assets/static/img/token_verse_logo.png";

const homeImg = {
    bg: bg,
    star: star,
    binance: binance,
    unreal: unreal,
    yohdev: yohdev,
    vrGuy: vrGuy,
    ctaBg: ctaBg,
    castar: castar,
    durins: durins,
    farthing: farthing,
    celebian: celebian,
    tokenverse: tokenverse
}

 const HomeHero = styled.div`
    height: 800px;
    background-image: url(${homeImg.bg});
    background-size: cover;
    background-position: center;

    .hero-row {
        height: 100vh;
    }

    .hero-text {
        width: 100%;
        height: 500px;
        align-self: center;
        padding: 0 0 0 2rem;
        text-align: left;
    }

    h1 {
        text-align: left;
        align-self: center;
        font-size: 45px;
        font-weight: 800;
        line-height: 60px;
    }

    .icons-container {
        justify-content: space-between;
        padding: 16px 32px 48px 0;
    }

    .icon-social {
        font-size: 40px;
    }
`

const CtaSection = styled(Container)`
        height: 800px;
        background-image: url(${homeImg.ctaBg});
        background-size: cover;
        background-position: center;

        .cta-row {
            height: 100vh;
        }

        .cta-text {
            align-self: center;
        }

        p {
            margin-bottom: 64px;
        }
`

const AboutSection = styled(Container)`

    .logos {
        .img-fluid {
            max-width: 150px;
            height: auto;
            width: 100%;
            margin-bottom: 16px;
        }
    }

    p {
        margin-bottom: 40px;
    }
`;

export { HomeHero, homeImg, AboutSection, CtaSection };