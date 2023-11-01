import Image from "next/image";
import { styled } from "styled-components";

export const ServicesContainer = styled.section`
    padding-top: 63px;
    padding-bottom: 63px;    

    h2 {
        color: #002D68;
        text-transform: uppercase;
        text-align: center;
        font-weight: 900;
        font-size: 36px;

        @media(max-width: 740px){
            font-size: 30px;
        }
    }
`

export const CardsPhotos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media(max-width: 740px) {
        flex-direction: column;
        align-items: center;
    }
    
`

export const CardsIcons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media(max-width: 740px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ImageServices = styled(Image)`
    background-color: #fff;
    width: 220px;
    height: auto;
    margin: 20px;
`

export const IconServices = styled(Image)`
    width: 54px;
    height: auto;
    background-color: #002D68;
    border-radius: 12px 0px 0px 12px;
`

export const Card = styled.div`
    background-color: #002D68;
    width: 220px;
    display: flex;
    margin: 20px;
    border-radius: 10px;
    align-items: center;
    padding: 4px;

    h4 {
        color: #fff;
        text-transform: uppercase;
        padding-left: 7px;
    }
`