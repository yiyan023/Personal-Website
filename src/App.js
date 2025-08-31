import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Home from './pages/Home'
import Awards from './pages/Awards'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/awards" element={<Awards />} /> 
			<Route path="/experiences" element={<Experience />} />
			<Route path="/projects" element={<Projects />} />
		</Routes>
	</Router>
  );
}

export default App;
