import React from 'react';

class StaticClock extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h3> Static Clock : {this.props.date.toLocaleTimeString()}</h3>
            </React.Fragment>
        )
    }
}
export default StaticClock;