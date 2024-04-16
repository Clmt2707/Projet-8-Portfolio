import './App.css';
import Header from './Layout/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact'
import Footer from './Layout/Footer';


function App () {
  return (
    <div className='app'>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;