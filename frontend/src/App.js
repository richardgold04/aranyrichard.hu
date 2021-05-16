import './App.css';
import About from './components/About/About';
import CallToAction from './components/CallToAction/CallToAction';
import Contact from './components/Contact/Contact';
import Experience from './components/Experiences/Experience';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Sidebar from './components/Main menu - sidebar/Sidebar';
import Skills from './components/Skills/Skills';


function App() {
  return (
		
    <div className="App">
			<Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
			<a name="home"></a>
      <Hero />
			<a name="about"></a>
			<About />
			<CallToAction />
			<Skills />
			<a name="portfolio"></a>
			<Portfolio />
			<CallToAction />
			<a name="experiences"></a>
			<Experience />
			<CallToAction />
			<a name="contact"></a>
			<Contact />
			<Footer />
		</div>
  );
}

export default App;
