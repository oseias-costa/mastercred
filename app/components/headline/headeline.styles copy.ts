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
`;

export const LogoIcon = styled(Image)`
    padding-bottom: 5px;
    margin-bottom: 10px;
`;

export const Photo = styled(Image)`
  position: absolute;
  top: 75px;
  left: calc(100% / 1.2);  
  z-index: 1;
`;

export const Title = styled.div`
  display: flex;
  z-index: 2;

  h2 {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -2px;
    font-size: 34px;
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
    font-size: 59px;
    font-weight: 700;
    letter-spacing: -2px;
    text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .subtitle_destak {
    color: #f48035;
  }
`;

export const Juliana = styled(Image)``;

export const Video = styled.video`
  position: relative;
  z-index: 2;
  width: 480px;
  height: 380px;
  background-color: #f48035;
  border-radius: 6px;
  position: relative;
  top: 5px;

  @media(max-width: 740px){
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
    font-size: 32px;
  }

  p {
    color: #fff;
    font-weight: 400;
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
  width: 118px;
  height: auto;
  background: linear-gradient(180deg, #3DB82A 0%, #3DB82A 100%);
  padding: 14px;
  border-radius: 25px;
`

export const ButtonHeadlineDescription = styled.div`
  padding-left: 20px;
  padding-right: 12px;
  text-align: center;

  h3 {
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 42px;
    letter-spacing: -2px;
    position: relative;
  }
  p {
    color: #fff;
    text-transform: uppercase;
  }

  & h3:nth-child(1) {
        top: 0px;
  }
  & h3:nth-child(3) {
    top: -5px;
    font-size: 46px;
}
`

export const Form = styled(Image)`

`