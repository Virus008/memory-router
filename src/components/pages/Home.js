import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h3>Hello,</h3>
                    <p>This is home page.</p>
                </div>
                <div className="page-content">
                    <h5>Memory Router</h5>
                    <ul>
                        <li>URL in the browser doesn’t change. URL in memory changes.</li>
                        <li>Good for non browser environment and testing.</li>
                        <li>It doesn’t have history, so you can't go back or forward.</li>
                    </ul>
                </div>
            </div>            
        );
    }
}

export default Home;
