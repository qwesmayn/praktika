import './App.css';
import Header_main from './components/Header_main/header';
import Footer_body from './components/Footer_body/Footer_body';
import Body_main from './components/Body_main/Body_main';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/login';
import Registration from './components/registration/registration';
import { VisibilityHandler } from './VisibleHandler';
import { useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <VisibilityHandler notAllowedRoute={["/login/*", "",]}>
        <Header_main />
      </VisibilityHandler>
      <Routes>
        <Route path="/" element={<Body_main />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contacts/*" element={<Contact />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/login/registration/*" element={<Registration />} />
      </Routes>
      <VisibilityHandler notAllowedRoute={["/login/*", "" ]}>
        <Footer_body />
      </VisibilityHandler>
    </BrowserRouter>
  );

}

export default App;
