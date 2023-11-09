import './App.css';
import Header_main from './components/Header_main/header';
import Footer_body from './components/Footer_body/Footer_body';
import Body_main from './components/Body_main/Body_main';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header_main />
        <Routes>
          <Route path="/main/*" element={<Body_main />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contacts/*" element={<Contact />} />
        </Routes>
        <Footer_body />
      </div>
    </BrowserRouter>
  );
}

export default App;
