import './App.css';
import Header_main from './components/Header_main/header';
import Footer_body from './components/Footer_body/Footer_body';
import Body_main from './components/Body_main/Body_main';
import About from './components/About/About';
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Header_main />
      <Body_main />
      <Footer_body />
      <About />
      <Contact />
    </div>
  );
}

export default App;
