import styled from 'styled-components';

const headingTwo = styled.h2`
    font: normal normal normal 48px/72px Aladin;
    letter-spacing: -0.38px;
    color: #050505;
`

const headingTwoWhite = styled.h2`
    font: normal normal normal 48px/72px Aladin;
    letter-spacing: -0.38px;
    color: #fff;
`

const paragraph = styled.p`
    font: normal normal normal 16px/24px Roboto;
    letter-spacing: 0px;
    color: #000000;
`

const paragraphWhite = styled.p`
    font: normal normal normal 16px/24px Roboto;
    letter-spacing: 0px;
    color: #fff;
`

const Global = {
    HeadingTwo: headingTwo,
    HeadingTwoWhite: headingTwoWhite,
    Paragraph: paragraph,
    ParagraphWhite: paragraphWhite
}

export { Global };