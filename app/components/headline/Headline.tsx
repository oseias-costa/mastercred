"use client";
import * as S from "./headeline.styles";
import Logo from "@/public/headline/logo-mastercred.svg";
import Juliana from "@/public/headline/juliana.png";
import Whatsapp from "@/public/headline/whats-icon.svg";
import ShapeHeadline from "@/public/headline/shape-new.png";

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
          controls
          poster="https://mastercred.vercel.app/headline/mobile.png"
          src="https://firebasestorage.googleapis.com/v0/b/curso-dev-2e4db.appspot.com/o/video%2Fmastercred.mp4?alt=media&token=645b101d-4bf7-4317-a6a8-3537a8094ee2&_gl=1*1qxwmez*_ga*MTkzOTk4MDgyNC4xNjk4NzYwNjQz*_ga_CW55HF8NVT*MTY5ODc2MDY0My4xLjEuMTY5ODc2MDY5Ni43LjAuMA.."
        ></S.Video>
        <S.Simulation>
            <h3>Faça uma simulação</h3>
            <p>Converse com o nosso time comercial e saiba o melhor empréstimo consignado para você!</p>
        </S.Simulation>
        <S.ButtonHeadline>
                <S.Whatsapp src={Whatsapp} alt='' />
            <S.ButtonHeadlineDescription>
                <h3>Clique aqui</h3>
                <p>para acessar nosso</p>
                <h3>Whatsapp</h3>
            </S.ButtonHeadlineDescription>
        </S.ButtonHeadline>
      <S.Photo src={Juliana} width={420} alt="MasterCred" />
      </S.HeadlineDescription>
      <S.Shape src={ShapeHeadline} alt='' />
    </S.HeadlineContainer>
  );
}
