import rehypeRaw from 'rehype-raw';
import img_1 from '../assets/404.jpg'
import ReactMarkdown from 'react-markdown'

const Content = ({ blog }) => {
    const {
        cover_image,
        title,
        tags,
        body_html

    } = blog;
    console.log(blog);
    return (
        <div>

            <div>
                <img src={cover_image ? cover_image : img_1} alt="" className="w-full max-h-[350px]" />
            </div>
            <p className='my-5'>{tags.map(tag => <span className="mr-4 hover:underline cursor-pointer" key={tag}>#{tag}</span>)}</p>
            <h2 className='font-semibold text-xl sm:text-3xl hover:underline'>{title}</h2>
            {/* <p>{body_html}</p> */}

            <ReactMarkdown className='overflow-x-hidden' rehypePlugins={rehypeRaw}>{body_html}</ReactMarkdown>
            

        </div>
    );
};

export default Content;