import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Header from './component/Header/Header';
import Home from "./component/Home/Home";




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path='/Home' element={<Home />} />
        <Route path='/about' element={<AboutUs/>} />




      </Routes>


    </div>
  );
}

export default App;
