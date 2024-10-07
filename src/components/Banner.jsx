import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="space-y-6 max-w-xl mx-auto text-center">
            <h1 className="text-2xl sm:text-5xl font-bold">Welcome to <span className="font-bold bg-300% bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
            <p>ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
            <div className="space-x-6">
                <Link to='/blogs' className="px-8 py-3 relative shadow-lg before:absolute 
before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent 
hover:before:w-full hover:before:h-full hover:before:border-primary hover:before:transition-all hover:before:duration-500 
after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-primary 
after:absolute after:bottom-0 after:right-0 after:w-0 
after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500 border font-semibold"> Blogs
                </Link>
                <Link to='/bookmarks' className="px-8 py-3 relative shadow-lg before:absolute 
before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent 
hover:before:w-full hover:before:h-full hover:before:border-primary hover:before:transition-all hover:before:duration-500 
after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-primary 
after:absolute after:bottom-0 after:right-0 after:w-0 
after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500 border font-semibold"> Bookmarks
                </Link>
            </div>
        </div>
    );
};

export default Banner;