import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomeHrBanner = () => {
    return (
        <div>
        <Carousel autoPlay="true">
        <div className=" text-white bg-[#240750]">
<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="https://i.ibb.co/5xdsyxz/banner2.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
    </div>
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl text-[#57A6A1] font-bold leading-none sm:text-6xl">Empower Your HR Operations
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">Take control of your HR responsibilities 
            <br  className="hidden md:inline lg:hidden" />with our powerful tools. Effortlessly add and manage assets, approve requests, and maintain a productive workplace with ease.
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
        <img src="https://i.ibb.co/Wsby1tc/banner1.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
    </div>
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl text-[#57A6A1] font-bold leading-none sm:text-6xl">Streamline Your Asset Management
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">Simplify the process of tracking and managing company 
            <br  className="hidden md:inline lg:hidden" />assets with our intuitive platform. From hiring employees to approving asset requests, everything you need is at your fingertips.   
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

export default HomeHrBanner;