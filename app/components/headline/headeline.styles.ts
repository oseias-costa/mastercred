import Image from "next/image";
import { styled } from "styled-components";

export const HeadlineContainer = styled.section`
  background-color: #004aab;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  
`;

export const HeadlineDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: -150px; 
  z-index: 2;

  @media(max-width: 800px){
    left: 0px; 
  }
`;

export const LogoIcon = styled(Image)`
    padding-bottom: 5px;
    margin-bottom: 10px;
`;

export const Photo = styled(Image)`
  position: absolute;
  top: 64px;
  left: calc(100% / 1.15);  
  z-index: 1;

  @media(max-width: 800px){
    display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  z-index: 2;

  h2 {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -2px;
    font-size: 25.5px;
  }

  .destak {
    background-color: #f48035;
  }
`;

export const Subtitle = styled.div`
  display: flex;

  h3 {
    color: #fff;
    text-transform: uppercase;
    font-size: 44.25px;
    font-weight: 700;
    letter-spacing: -2px;
    text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .subtitle_destak {
    color: #f48035;
  }
`;


export const Video = styled.video`
  position: relative;
  z-index: 2;
//   width: 480px;
//   height: 380px;
  width: 380px;
  height: 240px;
  background-color: #f48035;
  border-radius: 6px;
  position: relative;
  top: 5px;

  @media(max-width: 800px){
    width: 320px;
    height: 580px;
  }
`;

export const Simulation = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
  padding-top: 15px;

  h3 {
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 24px;
  }

  p {
    color: #fff;
    font-weight: 400;
    font-size: 13px;
    max-width: 300px;
  }
`

export const ButtonHeadline = styled.a`
  z-index: 2;
  margin-top: 10px;
  display: flex;
  cursor: pointer;
  padding: 7px;
  background-color: #002D68;
  border-radius: 32px;
  max-height: 133px;
  margin-bottom: 20px;
  transition: .2s linear;

  &:hover {
    background-color: #f48035;
    h3, p {
        color: #fff;
    }
  }
`

export const Whatsapp = styled(Image)`
  width: 102px;
  height: auto;
  background: linear-gradient(180deg, #3DB82A 0%, #3DB82A 100%);
  padding: 12px;
  border-radius: 25px;
`

export const ButtonHeadlineDescription = styled.div`
  padding-left: 16px;
  padding-right: 10px;
  text-align: center;

  h3 {
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 33px;
    letter-spacing: -2px;
    position: relative;
  }
  p {
    color: #fff;
    text-transform: uppercase;
    position: relative;
    top: 3px;
    font-size: 14px;
  }

  & h3:nth-child(1) {
        top: 2px;
  }
  & h3:nth-child(3) {
    top: 2px;
    font-size: 36.5px;
}
`

export const Shape = styled(Image)`
  position: absolute;
  top: 0px;
  width: 500px;
  height: auto;
  right: 0px;

  @media(max-width: 740px) {
    width: 170px;
  }
` 


export const ShapeTwo = styled(Image)<{size: number}>`
  position: absolute;
  width: 170px;
  height: auto;
  left: 0px;
  top: ${props => {
    const position = props.size - 543.11 + 'px'
    return String(position)  
  }
  };

  @media(max-width: 800px) {
    width: 170px;
    display: none;
  }
`