import EffectHook from "./components/EffectHook";
import Example from "./components/StateHook";
import { Color } from "./components/use-reducer/color";
import ShowArea from "./components/use-reducer/ShowArea";
import Buttons from "./components/use-reducer/Buttons";

function App() {
  return (
    <div className="App">
      {/* <Example />
      <EffectHook /> */}
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
}

export default App;
