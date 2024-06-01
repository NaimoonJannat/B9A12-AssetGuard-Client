import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/Home/hr-banner.png";
import img2 from "../../assets/Home/employee-banner.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay="true">
            <div className=" text-white bg-[#240750]">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={img1} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Join As
				<span className="text-[#57A6A1]"> HR</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Empower your workforce with AssetGuard! Join as an HR Manager today 
				<br  className="hidden md:inline lg:hidden" />and streamline your asset management process with ease. 
			</p>
			<div className="w-1/4">
				<Link to="/join-hr" className="w-full btn px-6 text-lg font-semibold rounded bg-[#57A6A1] text-[#240750]">Join</Link>
				
			</div>
		</div>
	</div>
</div>
{/* join as employee  */}
            <div className=" text-white bg-[#240750]">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={img2} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Join As an
				<span className="text-[#57A6A1]"> Employee</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Unlock your potential with AssetGuard! Join as an employee today and simplify your 
				<br  className="hidden md:inline lg:hidden" />access to company assets. Easily request the tools you need, keep track of your assigned items, and stay organized with our user-friendly interface.  
			</p>
			<div className="w-1/4">
				<Link to="/join-employee" className="w-full btn px-6 text-lg font-semibold rounded bg-[#57A6A1] text-[#240750]">Join</Link>
				
			</div>
		</div>
	</div>
</div>

        
        
    </Carousel>
            
        </div>
    );
};

export default Banner;