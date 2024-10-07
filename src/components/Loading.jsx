import { RingLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="w-full flex items-center justify-center min-h-[calc(100vh-120px)]">
            <RingLoader color="#fd19c7" /> 
        </div>
    );
};

export default Loading;