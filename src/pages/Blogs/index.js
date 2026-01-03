import React from 'react'

import { NavBar } from "../../components/common/NavBar";
import Footer from '../../components/common/Footer';
import BlogList from '../../components/sections/BlogList';

const Blogs = () => {
  return (
	<div>
		<NavBar />
		<BlogList />
		<Footer />
	</div>
  )
}

export default Blogs;
