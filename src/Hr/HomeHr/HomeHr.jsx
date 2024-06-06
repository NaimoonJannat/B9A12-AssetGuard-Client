
import ExtraOne from './ExtraOne';
import ExtraTwo from './ExtraTwo';
import HomeHrAssets from './HomeHrAssets';
import HomeHrBanner from './HomeHrBanner';
import HomePending from './HomePending';
import LimitedStock from './LimitedStock';
import RequestsPieChart from "./PieChart";

const HomeHr = () => {
  
    return (
        <div>
            <HomeHrBanner></HomeHrBanner>
            <div className='w-full md:w-4/5 mx-auto space-y-20 my-14'>
            <HomePending></HomePending>
            <ExtraOne></ExtraOne>
            <HomeHrAssets></HomeHrAssets>
            <RequestsPieChart></RequestsPieChart>
            <LimitedStock></LimitedStock>
            <ExtraTwo></ExtraTwo>
            </div>
        </div>
    );
};

export default HomeHr;
