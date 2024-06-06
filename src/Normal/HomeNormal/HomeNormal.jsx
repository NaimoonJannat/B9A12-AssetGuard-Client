import HomePendingNorm from "./HomePendingNorm";
import HomeRequestsByDate from "./HomeRequestsByDate";

const HomeNormal = () => {
    return (
        <div className="py-20">
            <HomePendingNorm></HomePendingNorm>
            <HomeRequestsByDate></HomeRequestsByDate>
            
        </div>
    );
};

export default HomeNormal;