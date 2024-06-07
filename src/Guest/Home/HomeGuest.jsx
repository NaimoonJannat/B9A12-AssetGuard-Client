import { Helmet } from "react-helmet";
import About from "./About";
import Banner from "./Banner";
import Packages from "./Packages";


const HomeGuest = () => {
    return (
        <div>
            <Helmet>
                <title>AssetGuard | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="w-full md:w-4/5 mx-auto">
            <About></About>
            <Packages></Packages>
            </div>
        </div>
    );
};

export default HomeGuest;