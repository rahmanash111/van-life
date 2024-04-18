import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="home-div">
          <header className="about-header">
            <Link to={'/'} className="heading-div">#VANLIFE</Link>
            <div className="navigator-div">
                <Link to={'/about'}>About</Link>
                <Link>Vans</Link>
            </div>
          </header>
        </div>
        <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
          <footer className="about-footer">
            <div className="copy-right">Ⓒ</div> <div>2022 #VANLIFE</div> 
          </footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
