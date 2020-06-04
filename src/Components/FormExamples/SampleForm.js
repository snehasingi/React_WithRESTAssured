import React from 'react';
import { render } from '@testing-library/react';

class SampleForm extends React.Component{
    state ={
        employeeName : "",
        age :""

    }
    handleChange = (event) => {
        if(event.target.name==="emp")
            this.setState({employeeName : event.target.value})
         else if(event.target.name==="age")
            this.setState({age : event.target.value})
    }

    formSubmitted = () => {
        alert(`Details submiteed as Name: ${this.state.employeeName} & Age: ${this.state.age}`)
    }
    render(){
        return(
        <form onSubmit={this.formSubmitted}>
            Employee Name : <input type="text" value={this.state.employeeName} name="emp" onChange={this.handleChange}/>
            Age : <input type="text" value={this.state.age} name="age" onChange={this.handleChange}/>
            <input type="Submit"></input>
        </form>
        )
    }
}
export default SampleForm;
    
