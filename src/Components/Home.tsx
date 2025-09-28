import About from "./About";
import Contact from "./Contant";
import Directory from "./Directory";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Hero from "./Hero";
import Leaders from "./Leaders";
import Mosques from "./Mosques";
import News from "./News";
import Opportunities from "./Opportunities";
import People from "./People";
import Video from "./Video";



export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50 text-gray-900 font-sans">
      <Header/>
      <main className="max-w-6xl mx-auto px-6 space-y-10 pt-24">
        <Hero/>
        <About />
        <Leaders />
        <Video/>
        <News />
        <Directory />
        <People />
        <Mosques />
        <Opportunities />
        <Gallery />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

