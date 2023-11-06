"use client";
import * as S from "./footer.styles";
import Logo from "@/public/headline/logo-mastercred.svg";

export default function Footer(){
    return(
        <S.FooterContainer>
            <S.LogoFooter src={Logo} alt='MasterCred Jaguaruna - Logo' />
            <S.Adress>
                <h3>Endereço</h3>
                <p>Avenida Duque de Caxias, 358</p>
                <p>Jaguaruna SC</p>
            </S.Adress>
            <S.Phone>
                <h3>Telefone</h3>
                <p>(48)9 9985-6057</p>
            </S.Phone>
        </S.FooterContainer>
    )
}