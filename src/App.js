import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Blogs from './components/Blogs';

function App() {
  return (
    <Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/skills" element={<Skills />} /> 
			<Route path="/experiences" element={<Experience />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/blog" element={<Blogs />} />
		</Routes>
	</Router>
  );
}

export default App;
