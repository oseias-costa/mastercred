"use client";
import * as S from "./headeline.styles";
import Logo from "@/public/headline/logo-mastercred.svg";
import Juliana from "@/public/headline/juliana.png";

export default function Headline() {
  return (
    <S.HeadlineContainer>
      <S.HeadlineDescription>
        <S.LogoIcon src={Logo} width={180} alt="" />
        <S.Title>
          <h2>Precisando de&nbsp;</h2>
          <h2 className="destak"> dinheiro?</h2>
        </S.Title>
        <S.Subtitle>
          <h3 className="subtitle_destak">Fácil&nbsp;</h3>
          <h3>e</h3>
          <h3 className="subtitle_destak">&nbsp;Rápido</h3>
        </S.Subtitle>
        <S.Video
          id="vid"
          // src="https://firebasestorage.googleapis.com/v0/b/curso-dev-2e4db.appspot.com/o/video%2Fmastercred.mp4?alt=media&token=645b101d-4bf7-4317-a6a8-3537a8094ee2&_gl=1*1qxwmez*_ga*MTkzOTk4MDgyNC4xNjk4NzYwNjQz*_ga_CW55HF8NVT*MTY5ODc2MDY0My4xLjEuMTY5ODc2MDY5Ni43LjAuMA.."
          controls
          width={320}
          height={580}
          poster="https://firebasestorage.googleapis.com/v0/b/curso-dev-2e4db.appspot.com/o/img%2Fjuliana-paes.jpg?alt=media&token=0cd16e86-30fc-46be-9879-5cd551b3722b&_gl=1*tg7exo*_ga*MTkzOTk4MDgyNC4xNjk4NzYwNjQz*_ga_CW55HF8NVT*MTY5ODc2NzY5Ny4yLjEuMTY5ODc2NzczNC4yMy4wLjA."
          src="https://firebasestorage.googleapis.com/v0/b/curso-dev-2e4db.appspot.com/o/video%2Fmastercred.mp4?alt=media&token=645b101d-4bf7-4317-a6a8-3537a8094ee2&_gl=1*1qxwmez*_ga*MTkzOTk4MDgyNC4xNjk4NzYwNjQz*_ga_CW55HF8NVT*MTY5ODc2MDY0My4xLjEuMTY5ODc2MDY5Ni43LjAuMA.."
        ></S.Video>
        <S.Photo src={Juliana} width={470} alt="MasterCred" />
      </S.HeadlineDescription>
    </S.HeadlineContainer>
  );
}
