import HomeBannerNorm from "./HomeBannerNorm";
import HomePendingNorm from "./HomePendingNorm";
import HomeRequestsByDate from "./HomeRequestsByDate";

const HomeNormal = () => {
    return (
        <div className="space-y-20">
            <HomeBannerNorm></HomeBannerNorm>
            <div>
            <HomePendingNorm></HomePendingNorm>
            <HomeRequestsByDate></HomeRequestsByDate>
            
        </div>
        </div>
    );
};

export default HomeNormal;