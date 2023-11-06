"use client";
import { CallContainer } from "./call.styles";

export default function Call(){
    return(
        <CallContainer>
            <h4>não perca tempo!</h4>
            <p>Entre em contato e receba um atendimento personalizado</p>
            <a href="https://api.whatsapp.com/send?phone=5548999856057" target="_blank">Clique aqui</a>
        </CallContainer>
    )
}