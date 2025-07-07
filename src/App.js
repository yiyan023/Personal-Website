import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Home from './pages/Home'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/skills" element={<Skills />} /> 
			<Route path="/experiences" element={<Experience />} />
			<Route path="/projects" element={<Projects />} />
		</Routes>
	</Router>
  );
}

export default App;
