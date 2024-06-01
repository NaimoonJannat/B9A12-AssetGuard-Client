

const Title = ({title, subtitle}) => {
    return (
        <div className="md:w-1/2 mx-auto text-center my-8">
        <h2 className="uppercase text-4xl text-[#240750] border-y-2">{title}</h2>
        <p className="text-[#57A6A1] mb-2">--- {subtitle} ---</p>
    </div>
    );
};

export default Title;