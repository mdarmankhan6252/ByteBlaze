import bg_ani from '../assets/bg_ani.svg'
import Banner from '../components/Banner';
const Home = () => {
    return (
        <div className='min-h-[calc(100vh-120px)] relative flex items-center justify-center flex-col -pt-10'>
            <Banner/>
            <img src={bg_ani} alt="bg-animation" className="absolute bottom-0 w-full" />
        </div>
    );
};

export default Home;