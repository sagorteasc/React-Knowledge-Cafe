import { useEffect, useState } from "react";
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmak }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            {/* <h1 className="text4-xl">Blogs: {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmak={handleAddToBookmak}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmak: PropTypes.func.isRequired
}

export default Blogs;