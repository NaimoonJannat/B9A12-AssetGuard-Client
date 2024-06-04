import HomeHrAssets from './HomeHrAssets';
import HomeHrBanner from './HomeHrBanner';
import HomePending from './HomePending';

const HomeHr = () => {
  
    return (
        <div>
            <HomeHrBanner></HomeHrBanner>
            <div className='w-full md:w-4/5 mx-auto'>
            <HomePending></HomePending>
            <HomeHrAssets></HomeHrAssets>
            </div>
        </div>
    );
};

export default HomeHr;
