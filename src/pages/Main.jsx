import AdBanner from '../components/AdBanner';
import ContentBox from '../components/ContentBox';
import React from 'react';

const Main = ()=>{
    return(
        <div className="App-Main">
            <AdBanner/>
            <div className="App-content">
                <h2>Pessaake blog!</h2>
                <h3>Welcome to this react website test blog</h3>
                <h3>Welcome to this react website test blog</h3>
                <h3>Welcome to this react website test blog</h3>
            </div>
            <AdBanner/>
            <ContentBox/>
            
        </div>

    );
}
export default Main;