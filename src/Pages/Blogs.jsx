import { Link, useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Loading from "../components/Loading";

const Blogs = () => {
    const blogs = useLoaderData()
    const navigation = useNavigation()
    console.log(blogs);

    if(navigation.state === 'loading'){
        return <Loading/>
    }
    return (
        <section className="">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Link to='/' rel="noopener noreferrer"  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                    <img src={blogs[1].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[1].title}</h3>
                        <span className="text-xs">{new Date(blogs[1].published_at).toLocaleDateString()}</span>
                        <p>{blogs[1].description}</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* card will be map here */}
                    {
                        blogs.map((blog, i) => <BlogCard key={i} blog={blog}></BlogCard>)
                    }
                </div>
               
            </div>
        </section>
    );
};

export default Blogs;