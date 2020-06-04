import React, { useState, useEffect } from "react";
import Contacts from './Contacts';

const RESTAPIHooksApp = () => {
  const [hasError, setErrors] = useState(false);
  //Using [] in state initialization to mention its a array of contacts
  // If its a single contact we would have defined it using {}
  const [contacts, setContacts] = useState([]);

  //async/await helps writing asynchronous code in a way that looks synchronous
  //It Used mostly for data fetching and other initialization stuff
  // To use async/wait some steps to follow are:
  //1. put the async keyword in front of your functions
  //2. use await in the function's body
  //3. catch any errors
  async function fetchData() {
    const res = await fetch("http://jsonplaceholder.typicode.com/users");
    res
      .json()
      .then(res => setContacts(res))
      .catch(err => setErrors(err));
  }

  //Hooks don’t have lifecycle effects such as componentDidMount or componentWillMount
  //The Effect Hook lets you perform side-effects in function components.
  //Data fetching, setting up a subscription, and manually changing the DOM in React 
  //components are all examples of side-effects.
  //useEffect is a React Hook that accepts a callback as it’s the first argument.
  useEffect(() => {
    fetchData();
  },[]);
  /*Note:
  -With useEffect, you can handle lifecycle events directly inside function components. 
  Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount.
  
  - By using this Hook, you tell React that your component needs to do something 
  after render. React will remember the function you passed , and call it later after
   performing the DOM updates.

  - useEffect runs after every render (by default), and can optionally clean up for itself before it runs again.
   */

  return (    
    <Contacts contacts={contacts} />
    );
};
export default RESTAPIHooksApp;