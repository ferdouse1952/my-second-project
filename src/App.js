import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./component/AboutUs/AboutUs";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Service from "./component/Service/Service";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
