import styled from 'styled-components';
import bg from '../../../assets/static/img/hero_bg.jpg';
import star from "../../../assets/static/img/compass_v1.png";
import binance from "../../../assets/static/img/binance_logo.png";
import unreal from "../../../assets/static/img/unreal_engine_logo.png";
import yohdev from "../../../assets/static/img/yohdev_logo_gray.png";
import vrGuy from "../../../assets/static/img/vr-guy.jpg";
import ctaBg from "../../../assets/static/img/cta-bg.jpg";

const homeImg = {
    bg: bg,
    star: star,
    binance: binance,
    unreal: unreal,
    yohdev: yohdev,
    vrGuy: vrGuy,
    ctaBg: ctaBg
}

 const HomeHero = styled.div`
    height: 800px;
    background-image: url(${homeImg.bg});
    background-size: cover;
    background-position: center;

    h1 {
        text-align: left;
        align-self: center;
        font-size: 32px;
    }

    .hero-text {
        width: 100%;
        height: 500px;
    }
`

export { HomeHero, homeImg };