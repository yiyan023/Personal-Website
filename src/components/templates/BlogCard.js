import { React } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../styles/blogs/blogs.css';

const BlogCard = ({ blog }) => {
	const blogImage = blog.image;
	
	return (
		<Col className="blog-single" xs={10} md={8} xl={10}>
			<Link to={`/blogs/${blog.id}`} className="read-more">
				<Row className="align-items-center justify-content-center">
					<Col xs={12} md={12} xl={6} className="image-section">
						<div className='image-container'>
							<img src={blogImage} alt={blog.title}/>
						</div>
					</Col>
					<Col xs={12} md={12} xl={6} className="description-section">
						<div className='description '>
							<h2>{blog.title}</h2>
							<p>{blog.date}</p>
							<hr />
							<p className="explain">{blog.summary}</p>
						</div>
					</Col>
				</Row>
			</Link>
		</Col>
	);
};

export default BlogCard;
