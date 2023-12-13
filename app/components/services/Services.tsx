"use client";
import * as S from "./services.styles";
import Aposentados from '@/public/services/aposentados.png'
import Militares from '@/public/services/militares2.png'
import Servidores from '@/public/services/servidores.png'
import Star from '@/public/services/star.svg'
import Money from '@/public/services/money.svg'
import Military from '@/public/services/chat.svg'

export default function Services(){
    return(
        <S.ServicesContainer>
            <h2>oferecemos empréstimos para:</h2>
            <S.CardsPhotos>
                <S.ImageServices src={Aposentados} alt='MasterCred - Emprestimo para Aposentados e Pensionistas' />
                <S.ImageServices src={Militares} alt='MasterCred - Emprestimo para Militares' />
                <S.ImageServices src={Servidores} alt='MasterCred - Emprestimo para Servidores Públicos' />
            </S.CardsPhotos>
            <S.CardsIcons>
                <S.Card>
                    <S.IconServices alt='MasterCred - Sem Consulta ao SPC/Serasa' src={Star} />
                    <h4>Sem Consulta ao SPC/Serasa</h4>
                </S.Card>
                <S.Card>
                    <S.IconServices alt='MasterCred - Dinheiro Rápido e Fácil' src={Money} />
                    <h4>Dinheiro Rápido e Fácil</h4>
                </S.Card>
                <S.Card>
                    <S.IconServices alt='MasterCred - Atendimento Personalizado' src={Military} />
                    <h4>Atendimento Personalizado</h4>
                </S.Card>
            </S.CardsIcons>
        </S.ServicesContainer>
    )
}