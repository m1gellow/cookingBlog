'use client'
import Lenis from 'lenis'
import Header from "./components/ui/Header";
import Welcome from "./components/ui/Welcome";
import { useEffect } from 'react';

export default function Home() {
  

useEffect(() => {
  const lenis = new Lenis();

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
