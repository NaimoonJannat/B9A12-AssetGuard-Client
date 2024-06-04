import ExtraOne from './ExtraOne';
import ExtraTwo from './ExtraTwo';
import HomeHrAssets from './HomeHrAssets';
import HomeHrBanner from './HomeHrBanner';
import HomePending from './HomePending';
import LimitedStock from './LimitedStock';

const HomeHr = () => {
  
    return (
        <div>
            <HomeHrBanner></HomeHrBanner>
            <div className='w-full md:w-4/5 mx-auto space-y-20'>
            <HomePending></HomePending>
            <HomeHrAssets></HomeHrAssets>
            <ExtraOne></ExtraOne>
            <LimitedStock></LimitedStock>
            <ExtraTwo></ExtraTwo>
            </div>
        </div>
    );
};

export default HomeHr;
