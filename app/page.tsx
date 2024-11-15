import Header from "./components/ui/Header";
import Welcome from "./components/ui/Welcome";
import Benefits from "./components/ui/Benefits";
import Devider from "./components/shared/Devider";
import News from "./components/ui/News";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center container  justify-center ">
      <Header />
      <Devider index={1} />
      <Welcome />
      <Benefits />
      <Devider index={3} />

      <News />

      <Footer />
    </div>
  );
}
