import HomeBannerNorm from "./HomeBannerNorm";
import HomePendingNorm from "./HomePendingNorm";
import HomeRequestsByDate from "./HomeRequestsByDate";
import Notice from "./Notice";

const HomeNormal = () => {
    return (
        <div className="space-y-20">
            <HomeBannerNorm></HomeBannerNorm>
            <div>
            <HomePendingNorm></HomePendingNorm>
            <HomeRequestsByDate></HomeRequestsByDate>
            <Notice></Notice>
            
        </div>
        </div>
    );
};

export default HomeNormal;