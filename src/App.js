import React, { Component } from 'react';
import RestAPIApp from './Components/RESTExamples/RestAPIApp'
import RestAPIAppWithHooks from './Components/RESTExamples/RestAPIAppWithHooks'
import RestAPIFormApp from './Components/RESTExamples/RestAPIFormApp'
import SearchContact from './Assignments/SearchContact'

class App extends Component {
  render(){
  return (
      <React.Fragment> 
        <SearchContact/>
        <RestAPIFormApp/>
        {/* <RestAPIAppWithHooks/> */}
        {/* <RestAPIApp/> */}
    </React.Fragment>
  );
  }
}

export default App;
