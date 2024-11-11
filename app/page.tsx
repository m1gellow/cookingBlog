'use client'
import Lenis from 'lenis'
import Header from "./components/ui/Header";
import Welcome from "./components/ui/Welcome";
import { useEffect } from 'react';

export default function Home() {
  

useEffect(() => {
  const lenis = new Lenis();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function raf(time: any){
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
})
  
  
  return (
    <div>
      <Header/>
      <Welcome/>
    </div>
  );
}
