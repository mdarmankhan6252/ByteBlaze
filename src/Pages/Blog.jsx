import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdOutlineContentPaste } from "react-icons/md";
import { useState } from "react";
import Content from "../components/Content";
import Author from "../components/Author";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { saveBlog } from "../Utilities/Shared";

const Blog = () => {
    const blog = useLoaderData()
    const navigate = useNavigate()
    const [tabIndex, setTabIndex] = useState(1)
    const {
        title,
        public_reactions_count,
        reading_time_minutes,
        published_at,
        comments_count,

    } = blog;

    const handleBlog = blog =>{
        console.log(blog);
        saveBlog(blog)
    }

    return (
        <div>
            <article className="max-w-3xl px-6 py-24 mx-auto space-y-16">
                <div className="w-full mx-auto space-y-4">
                    <button onClick={() => navigate('/blogs')} className="btn border border-gray-600">Go Back</button>
                    <h1 className="text-5xl font-bold leading-none">{title}</h1>
                    <div className="flex items-center justify-between py-4">
                        <p>{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>
                        {/* {new Date(blogs[1].published_at).toLocaleDateString()} */}
                        <p>{comments_count} comments • {public_reactions_count} views</p>
                    </div>
                    <hr />
                    {/* tabs here */}
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
                        <Link onClick={() => setTabIndex(1)} to='' className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}`}>
                            <MdOutlineContentPaste />
                            <span>Content</span>

                        </Link>
                        <Link onClick={() => setTabIndex(2)} to='author' className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 2 ? 'border border-b-0' : 'border-b'}`}>
                            <CiUser />
                            <span>Author</span>
                        </Link>
                        <span onClick={() => handleBlog(blog)} className="text-pink-600 text-3xl ml-4 cursor-pointer hover:scale-105 duration-300"><BsFillBookmarkPlusFill /></span>
                    </div>
                    {
                        tabIndex === 1 && <Content blog={blog} />
                    }
                    {
                        tabIndex === 2 && <Author blog={blog} />
                    }





                </div>

            </article >

        </div >
    );
};

export default Blog;