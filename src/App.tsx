import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about';
import Technologies from './components/technologies';
import Education from './components/education';
import Project from './components/project';
import Footer from './components/footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Technologies/>
      <Education/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
