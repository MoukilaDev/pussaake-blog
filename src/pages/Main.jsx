
import ContentBox from '../components/ContentBox';
import AdBanner from '../components/AdBanner';
import React from 'react';

const Main = ()=>{
    return(
        <div className="App-Main">
            <ContentBox/>
            <AdBanner/>
            <ContentBox/>
            <AdBanner/>
            <ContentBox/>
            <AdBanner/>
            <ContentBox/>
            <AdBanner/>
        </div>

    );
}
export default Main;