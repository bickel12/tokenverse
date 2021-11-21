import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/views/Home/Home";
import Contact from "./components/views/Contact";
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/elements/Navigation";



function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
