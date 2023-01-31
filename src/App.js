import "./App.css";
import Textbox from "./Components/Textbox/Textbox";

function App() {
  return (
    <div className='App'>
      <div className='title'>Fast as fuck boiiii</div>
      <div className='subtitle'>
        Type these words as fast as you can. Type the first letter to start and
        Enter to restart.
      </div>
      <Textbox />
    </div>
  );
}

export default App;
