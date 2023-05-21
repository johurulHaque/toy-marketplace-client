import React from 'react';
import Banner from '../Banner/Banner';
import TabItem from './TapItem';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>  
            <h2 className='text-center mt-6 font-bold text-2xl link-a'>Shop by category</h2>     
            <TabItem></TabItem>    
        </div>
    );
};

export default Home;