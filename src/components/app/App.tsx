import { CarouselComponent } from "../carousel/CarouselComponent";
import { Menu } from "../menu/Menu";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Menu />
      <CarouselComponent/>
    </div>
  );
}

export default App;
