import logo from './logo.svg';
import './App.css';
import NavbarMain from './Components/navbar';
import Hero from './Components/hero';
import {  CarouselCustomNavigation } from './Components/carosel';
import { SimpleFooter } from './Components/footer';

function Home() {
  return (
    <div className="App">
     <Hero />
     <CarouselCustomNavigation />
     <SimpleFooter />
    </div>
  );
}

export default Home;
