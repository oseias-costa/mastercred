import Image from "next/image";
import { styled } from "styled-components";

export const FooterContainer = styled.section`
    background-color: #002D68;
    color: #fff;
    display: flex;
    justify-content: space-around;
    padding-top: 53px;
    padding-bottom: 53px;

    @media(max-width: 740px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

export const Phone = styled.div`


`

export const Adress = styled.div`
@media(max-width: 740px){
    padding-top: 30px;
    padding-bottom: 30px;
}
`

export const LogoFooter = styled(Image)`
    width: 180px;
    height: 42px;
`