import './App.css';
import Example from './components/Example';
import About from './components/About';
import './components/styles.css';
import Tabs from './components/Tabs';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <div>
        <Example/>
        <About/>
        <Tabs/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
