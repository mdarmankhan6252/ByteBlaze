import { Link } from "react-router-dom";
import default_img from '../assets/404.jpg'

const BlogCard = ({blog}) => {
    const {id, cover_image, title, published_at, description} = blog;
    return (
        <Link to={`/blog/${id}`} rel="noopener noreferrer" className="max-w-sm mx-auto border-2 border-opacity-30 border-primary hover:border-secondary rounded-sm duration-500 hover:scale-105">
            <img role="presentation" className="object-cover w-full rounded h-44" src={cover_image ? cover_image : default_img} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <span className="text-xs">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default BlogCard;