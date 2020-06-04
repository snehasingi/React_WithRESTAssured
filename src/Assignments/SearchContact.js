import React from 'react';
import SearchContactComponent from '../Components/RESTExamples/SearchContactComponent';

class SearchContact extends React.Component{
    state = {
        contacts :{},
        searchValue : ""
    }

getValue = (event) =>{
    this.setState({searchValue : event.target.value})
}

fetchContact = () =>{
    var searchAPI ="http://jsonplaceholder.typicode.com/users/" + this.state.searchValue;
    fetch(searchAPI)
    .then(res => res.json())
    .then((data) =>{
        this.setState({contacts : data});
        console.log(data);
    })
    .catch(console.log);
}
    componentDidMount = () =>{
        
    }

    render() {
        return (<React.Fragment>
           <center> <h4>Assignment 1 - Search Contact using REST Assured</h4></center>
            <input
                     type="text" 
                     value={this.state.searchValue} 
                     name="text2"
                     onChange={this.getValue}>
                </input>
                
                <button onClick={this.fetchContact}> Search </button> <br></br> <br></br>
                <SearchContactComponent contacts={this.state.contacts} />
            </React.Fragment>        
            )
    }
}

export default SearchContact;
