import { React, useEffect } from 'react'
import { Row, Container } from 'react-bootstrap'
import '../../styles/blogs/blogs.css'

import { blogData } from '../../constants/blog_info.js';
import BlogCard from '../templates/BlogCard';

import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogList = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

	return (
		<div className='blog'>
			<h1 data-aos="fade-in" data-aos-delay="300">Blogs</h1>
			<p data-aos="fade-in" data-aos-delay="300" className='intro'>A collection of my deepest thoughts</p>
			<Container className='blogs'>
				{blogData.map((blog, index) => (
					<Row 
						key={index}
						data-aos="fade-up" 
						data-aos-anchor-placement="top-bottom" 
						data-aos-delay="700" 
						className='justify-content-center align-items-center'
					>
						<BlogCard 
							key={blog.title} 
							blog={blog} 
						/>
					</Row>
				))}
			</Container>
		</div>
	)
}

export default BlogList