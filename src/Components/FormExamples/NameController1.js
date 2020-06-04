import React,{Component} from 'react';

class NameFormControlled1 extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      fullName: ""
    };
  }
 
  handleSubmitForm(event) {
    alert("Full Name: " + this.state.fullName);
    event.preventDefault();
  }
 
  handleChange(event) {
    var value = event.target.value;
 
    this.setState({
      fullName: value
    });
  }
 
   //Displays text box contents on Change
  render() {
    return (
      <form onSubmit={event => this.handleSubmitForm(event)}>
        <label>
          Full Name: <input type="text" value={this.state.fullName} onChange={event => this.handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />
        <p>{this.state.fullName}</p>        
      </form>
    );
  }
}
  export default NameFormControlled1;