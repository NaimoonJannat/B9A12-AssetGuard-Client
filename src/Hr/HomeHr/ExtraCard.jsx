

const ExtraCard = ({user}) => {
    return (
            <img alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700" src={user.photo} />
    );
};

export default ExtraCard;