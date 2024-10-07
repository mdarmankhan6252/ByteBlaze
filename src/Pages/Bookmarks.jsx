import { useEffect, useState } from "react";
import { getBlog } from "../Utilities/Shared";
import BlogCard from "../components/BlogCard";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const storedBlogs = getBlog();
        setBlogs(storedBlogs)
    },[])
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {
                blogs.map(blog =>{
                    <BlogCard blog={blog} key={blog.id}/>
                })
            }
        </div>
    );
};

export default Bookmarks;