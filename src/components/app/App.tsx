import { CarouselComponent } from '../carousel/CarouselComponent';
import { Faq } from '../faq/Faq';
import { Feedback } from '../feedback/Feedback';
import { Footer } from '../footer/Footer';
import { Menu } from '../menu/Menu';
import { News } from '../news/News';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <CarouselComponent />
        <Faq />
        <News />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
