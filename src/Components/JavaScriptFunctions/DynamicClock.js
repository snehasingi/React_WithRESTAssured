import React,{Component} from 'react'
class DynamicClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    startClock = () =>{
      this.date = setInterval(() => this.tick(),1000);
    }

    stopClock = () =>{
      clearInterval(this.date);
    }
    componentWillUnmount() {
      clearInterval(this.date);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
    render() {
        return (
          <div>
            <h3> Dynamic Clock : {this.state.date.toLocaleTimeString()}</h3>
            <button name="start" onClick={this.startClock}> Start </button>
            <button name="stop" onClick={this.stopClock}> Stop </button>
          </div>
        );
      }
}

export default DynamicClock;