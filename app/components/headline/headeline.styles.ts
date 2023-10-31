import Image from "next/image";
import { styled } from "styled-components";

export const HeadlineContainer = styled.section`
  background-color: #004aab;
`;

export const HeadlineDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoIcon = styled(Image)``;

export const Photo = styled(Image)`
  position: absolute;
  top: 30px;
  z-index: 1;
  right: 0px;
`;

export const Title = styled.div`
  display: flex;

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
  top: 30px;
  z-index: 2;
`;
