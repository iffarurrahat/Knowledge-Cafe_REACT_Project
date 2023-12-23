
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmarks, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <div>
                {
                    blogs.map(blog => <Blog
                        handleMarkAsRead={handleMarkAsRead}
                        handleBookmarks={handleBookmarks}
                        key={blog.id}
                        blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};

export default Blogs;

