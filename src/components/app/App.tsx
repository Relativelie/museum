import { CarouselComponent } from '../carousel/CarouselComponent';
import { Faq } from '../faq/Faq';
import { Menu } from '../menu/Menu';
import { News } from '../news/News';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <CarouselComponent />
      <Faq />
      <News />
    </div>
  );
}

export default App;
