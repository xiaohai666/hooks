import './App.css';
import Routers from "./Routers";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers/>

      </BrowserRouter>
    </div>
  );
}

export default App;
