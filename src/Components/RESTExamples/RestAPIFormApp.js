import React, { Component } from 'react';
import SearchContactComponent from './SearchContactComponent';

export default class RESTAPIFormApp extends Component{
        state={ 
            name:'',
            email:'',
            contacts : {} }
        
    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
    }
    handleSubmit = event =>{
         event.preventDefault();
        console.log("User name : " + this.state.name)
        console.log("User Email : " + this.state.email)
        const url ="https://jsonplaceholder.typicode.com/users/"
        const data = { name:this.state.name, email:this.state.email}
        fetch(url, {
            method: 'POST', // or ‘PUT’
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{ 'Content-Type': 'application/json' } 
        }).then(res => res.json())
        .then((data) =>{
            this.setState({contacts : data});
            console.log(data);
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)); 
    }
    render(){
        return(
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.handleChange} />
            <input type="email" name="email" onChange={this.handleChange} />
            <input type="submit" value="Add user" /> </form> <br></br> <br></br>
            <SearchContactComponent contacts={this.state.contacts} />
            </React.Fragment>
        )
    }
}