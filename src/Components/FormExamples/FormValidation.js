import React,{Component} from "react";
import ReactDOM from "react-dom";
import '../Css/formvalidation.css'

class FormValidation extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    if(email.length <= 4 || password.length <= 3)
        alert("Invalid username/password");
    else
        alert(`Signed up with email: ${email} password: ${password}`);
  };

  render() {
    const { email, password } = this.state;
    //The below mentioned property helps enable or disable the Submit button
    const isEnabled = email.length > 0 && password.length > 0;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button disabled={!isEnabled}>Sign up</button>
      </form>
    );
  }
}

export default FormValidation;
