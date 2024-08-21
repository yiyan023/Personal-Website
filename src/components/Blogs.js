import React from 'react'
import { NavBar } from './NavBar'
import WorkBlog from './blogs/WorkBlog'
import '../styling/blog/blog.css'
import Footer from './Footer'

const Blogs = () => {
  return (
	<div className='blog-div'>
		<NavBar />
		<WorkBlog />
		<Footer />
	</div>
  )
}

export default Blogs