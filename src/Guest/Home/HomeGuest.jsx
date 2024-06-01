import About from "./About";
import Banner from "./Banner";
import Packages from "./Packages";


const HomeGuest = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-full md:w-4/5 mx-auto">
            <About></About>
            <Packages></Packages>
            </div>
        </div>
    );
};

export default HomeGuest;