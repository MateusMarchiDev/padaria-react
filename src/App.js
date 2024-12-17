import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testemonial from './Components/Testemonial.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testemonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
