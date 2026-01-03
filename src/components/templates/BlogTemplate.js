import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../../styles/blogs/blog-template.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogTemplate = ({ blogContent }) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    
    if (!blogContent) {
        return (
            <div className="blog-template">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={8}>
                            <div className="blog-not-found">
                                <h1 
                                    data-aos="fade-in" 
                                    data-aos-delay="300"
                                >
                                    Blog Post Not Found
                                </h1>
                                <p 
                                    data-aos="fade-in" 
                                    data-aos-delay="400"
                                >
                                    Sorry, the blog post you're looking for doesn't exist.
                                </p>
                                <button 
                                    className="back-button" 
                                    onClick={() => navigate('/blogs')}
                                    data-aos="fade-in" 
                                    data-aos-delay="500"
                                >
                                    ← Back to Blogs
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    const blogImage = blogContent.image;

    return (
        <div className="blog-template">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <article className="blog-article">
    
                            <header className="blog-header">
                                <h1 
                                    className="blog-title" 
                                    data-aos="fade-in" 
                                    data-aos-delay="300"
                                >
                                    {blogContent.title}
                                </h1>
                                <div 
                                    className="blog-meta"
                                    data-aos="fade-in" 
                                    data-aos-delay="400"
                                >
                                    <span className="blog-date">{blogContent.date}</span>
                                    {blogContent.author && (
                                        <>
                                            <span className="meta-separator">•</span>
                                            <span className="blog-author">Yiyan Huang</span>
                                        </>
                                    )}
                                </div>
                                <button 
                                    className="back-button" 
                                    onClick={() => navigate('/blogs')}
                                    data-aos="fade-in" 
                                    data-aos-delay="500"
                                >
                                    ← Back to Blogs
                                </button>
                            </header>

                            <div 
                                className="blog-image-container"
                                data-aos="fade-up" 
                                data-aos-anchor-placement="top-bottom" 
                                data-aos-delay="600"
                            >
                                <img 
                                    src={blogImage} 
                                    alt={blogContent.title}
                                    className="blog-featured-image"
                                />
                            </div>

                            <div 
                                className="blog-body"
                                dangerouslySetInnerHTML={{ __html: blogContent.content }}
                                data-aos="fade-up" 
                                data-aos-anchor-placement="top-bottom" 
                                data-aos-delay="700"
                            />
                        </article>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogTemplate;
