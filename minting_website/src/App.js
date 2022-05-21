import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Minter from './components/minter';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/minter" element = {<Minter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
