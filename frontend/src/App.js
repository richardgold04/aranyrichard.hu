import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
			<Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Hero />
			<About />
			<Experience />
    </div>
  );
}

export default App;
