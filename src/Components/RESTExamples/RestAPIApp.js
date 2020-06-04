import React from 'react';
import Contacts from './Contacts';

class RestAPIApp extends React.Component{
    state = {
        contacts :[]
    }

    componentDidMount = () =>{
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) =>{
            this.setState({contacts : data});
            console.log(data);
        })
        .catch(console.log);
    }

    render() {
        return (
            <Contacts contacts={this.state.contacts} />        
            )
    }
}

export default RestAPIApp;
