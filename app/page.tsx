"use client";
import Lenis from "lenis";
import Header from "./components/ui/Header";
import Welcome from "./components/ui/Welcome";
import { useEffect } from "react";
import Benefits from "./components/ui/Benefits";
import Devider from "./components/shared/Devider";
import News from "./components/ui/News";
import Footer from "./components/ui/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="flex flex-col items-center container justify-center ">
      <Header />
      <Devider index={1} />
      <Welcome />
      <Devider index={2} />
      <Benefits />
      <Devider index={3} />

      <News />

      <Footer />
    </div>
  );
}
