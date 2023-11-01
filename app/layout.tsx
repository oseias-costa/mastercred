import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'
import { GlobalStyle } from './lib/GlobalStyle'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ["400", "700", "900"] 

})

export const metadata: Metadata = {
  title: 'MasterCred - Empréstimo Consignado',
  description: 'MasterCred - Empréstimo Consignado - PRECISANDO DE DINHEIRO? FÁCIL E RÁPIDO FAÇA UMA SIMULAÇÃO. Converse com o nosso time comercial e saiba o melhor empréstimo consignado para você!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
