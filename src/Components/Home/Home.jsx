
import { useContext } from 'react';
import Banner from './Banner';
import WhyChoseUs from './WhyChoseUs';
import { AuthContext } from '../AuthProvider';
import Cars from './cars';

const Home = () => {
    const {datas,dataloading}=useContext(AuthContext)
    console.log(dataloading)
    if(dataloading){
        return <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <div>
            <Banner></Banner>
            <WhyChoseUs></WhyChoseUs>
            <Cars cars={datas}></Cars>
        </div>
    );
};

export default Home;