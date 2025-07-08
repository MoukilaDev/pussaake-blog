import AdBanner from './AdBanner';
import React from 'react';

const ContentBox = ()=> {
    return(
        <div>
            <AdBanner/>
                <div className="App-content">
                    <h2>Pessaake blog!</h2>
                    <h3>Welcome to this react website test blog</h3>
                    <h3>Welcome to this react website test blog</h3>
                    <h3>Welcome to this react website test blog</h3>
                </div>
            <AdBanner/>
        </div>
    )
}
export default ContentBox;