import React from 'react';
import { useParams } from 'react-router-dom';
import BlogTemplate from '../../components/templates/BlogTemplate';
import { blogContentData } from '../../constants/blog_content';
import { NavBar } from '../../components/common/NavBar';
import Footer from '../../components/common/Footer';

const Blog = () => {
    const { blogId } = useParams();
    
    const blogContent = blogContentData.find(blog => blog.id === blogId);
    
    return (
        <>
            <NavBar />
            <BlogTemplate blogContent={blogContent} />
            <Footer />
        </>
    );
};

export default Blog;
