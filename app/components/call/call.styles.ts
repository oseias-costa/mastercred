import Image from "next/image";
import { styled } from "styled-components";

export const CallContainer = styled.section`
    background-color: #004AAB;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 63px;
    padding-bottom: 63px;

    h4 {
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        font-size: 32px;
    }

    p {
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        padding-bottom: 20px;
    }

    a {
        background-color: #F48035;
        font-weight: 900;
        text-transform: uppercase;
        color: #fff;
        font-size: 102px;
        text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius: 22px;
        padding-left: 12px;
        padding-right: 12px;
        letter-spacing: -2px;
        transition: .2s linear;

        &:hover{
            background-color: #002D68;
        }
    }

    @media(max-width: 740px){
        text-align: center;
        padding-bottom: 83px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 42px;

        a {
            font-size: 48px;
        }

        p {
            padding-top: 20px;
        }
    }
`