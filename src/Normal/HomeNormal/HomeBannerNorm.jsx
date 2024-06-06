import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const HomeBannerNorm = () => {
    return (
        <div>
        <Carousel autoPlay="true">
        <div className=" text-white bg-[#240750]">
<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="https://i.ibb.co/rHx2nTV/request.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
    </div>
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl text-[#57A6A1] font-bold leading-none sm:text-6xl">Get the Assets You Need
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">Enhance your productivity by requesting the assets
            <br  className="hidden md:inline lg:hidden" /> you need, when you need them. Stay organized and focused with our easy-to-use platform.
        </p>
        <div className="w-1/4">
    
            
        </div>
    </div>
</div>
</div>
{/* join as employee  */}
        <div className=" text-white bg-[#240750]">
<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="https://i.ibb.co/wBZtvNT/team-up.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
    </div>
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl text-[#57A6A1] font-bold leading-none sm:text-6xl">Team Up and Thrive
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">Collaborate effortlessly with your colleagues and ensure 
            <br  className="hidden md:inline lg:hidden" />you have the tools you need to succeed. Request and manage your assets seamlessly with Asset Guard.    
        </p>
        <div className="w-1/4">
    
            
        </div>
    </div>
</div>
</div>

    
    
</Carousel>
        
    </div>
    );
};

export default HomeBannerNorm;