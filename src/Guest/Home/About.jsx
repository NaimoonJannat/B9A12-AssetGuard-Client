import Title from "../../Shared/Title";
import img from "../../assets/Home/about.jpg"
const About = () => {
    return (
        <div>
            <Title title="About Us" subtitle="Streamlining Asset Management for a More Efficient Workplace"></Title>
            <section className="text-white">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#240750]">
			<img src={img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<p className="text-base">Welcome to Asset Guard! Our mission is to revolutionize asset management for businesses of all sizes. We provide a comprehensive and user-friendly web application designed to help HR managers efficiently track and manage company assets. From returnable items like laptops and chairs to non-returnable supplies like pens and paper, Asset Guard simplifies the entire process. With features that allow for easy employee onboarding, asset requests, approvals, and detailed tracking, we ensure your workforce remains productive and your resources are optimally utilized. Join us in making asset management seamless and effective.</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default About;