"use client";
import { useEffect, useRef, useState } from 'react';
import Call from './components/call/Call'
import Headline from './components/headline/Headline'
import Services from './components/services/Services'
import { ShapeTwo } from './components/headline/headeline.styles';
import Shape from '@/public/headline/shape-two.png'
import Footer from './components/footer/Footer';

export default function Home() {
  const [size, setSize ] = useState<any>(0)
  const refBody = useRef(null)

  useEffect(() => {
       refBody !== null ? setSize(refBody.current) : setSize(0)

  },[refBody])

  return (
    <main ref={refBody}>
      <Headline />
      <Services />
      <Call />
      <Footer />
      <ShapeTwo alt='MasterCred - Empréstimos e Consórcios' src={Shape} size={size !== 0 ? size.clientHeight : 2000} />
    </main>
  )
}
