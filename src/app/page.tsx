import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Product from "./components/Product";


export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div>
        <Hero />
        <Product />
        <AboutUs/>
      </div>
    </div>
  );
}
