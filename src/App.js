import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Home from './pages/Home'
import Awards from './pages/Awards'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Extracurriculars from './pages/Extracurriculars';
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'

function App() {
  return (
    <Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/awards" element={<Awards />} /> 
			<Route path="/experiences" element={<Experience />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/extracurriculars" element={<Extracurriculars />} />
			<Route path="/blogs" element={<Blogs />} />
			<Route path="/blogs/:blogId" element={<Blog />} />
		</Routes>
	</Router>
  );
}

export default App;
