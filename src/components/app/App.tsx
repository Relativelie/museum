import { CarouselComponent } from '../carousel/CarouselComponent';
import { Feedback } from '../feedback/Feedback';
import { Menu } from '../menu/Menu';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <CarouselComponent />
      <Feedback />
    </div>
  );
}

export default App;
