
const TeamCard = ({team}) => {
     console.log(team);
    return (
        <div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={team?.photo} />
				<p className="text-xl font-semibold leading-tight">{team?.name}</p>
				<p className="text-gray-400">{team?.role}</p>
			</div>
    );
};

export default TeamCard;