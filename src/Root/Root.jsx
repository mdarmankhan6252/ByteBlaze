import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <div className="h-[68px]">
                <Nav />
            </div>
            <div className="min-h-[calc(100vh-120px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;