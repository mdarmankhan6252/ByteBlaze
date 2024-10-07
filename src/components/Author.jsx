import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const Author = ({blog}) => {
    const {user} = blog;
    return (
        <div className="flex flex-col justify-center max-w-xl border mx-auto mt-6 p-6 shadow-md rounded-xl sm:px-12">
            <img src={user.profile_image} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
            <div className="space-y-4 text-center divide-y">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">{user.name}</h2>
                    <p className="px-5 text-xs sm:text-base">ID : {user.user_id}</p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center text-xl">
                    <Link target="_blank" to={`https://github.com/${user.github_username}`}>
                        <FaGithub/>
                    </Link>
                    <Link target="_blank" to={user.website_url}>
                    <TbWorld />
                    </Link>
                    <Link to=''>
                        <FaTwitter/>
                    </Link>
                    <Link to=''>
                        <FaInstagram/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Author;