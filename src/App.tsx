import { useEffect, useState } from 'react';
import Header from './components/header';
import HeroIntroTitle from './components/hero-intro-title';
import SelectedWork from './components/selected-work';
import Services from './components/services';
import Work from './components/work';
import Lenis from '@studio-freight/lenis';
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-coffee text-verge-black">
      <Header />
      <HeroIntroTitle />
      <Services />
      <SelectedWork />
      <Work />
    </div>
  );
}

export default App;
