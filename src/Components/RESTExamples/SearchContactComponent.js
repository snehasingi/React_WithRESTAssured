import React from 'react'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchContactComponent = ({contacts}) => {
    return (
        <React.Fragment>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Full Name</th>
      <th scope="col">Emaill Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{contacts.id}</th>
      <td>{contacts.name}</td>
      <td>{contacts.email}</td>
    </tr>
  </tbody>
</table>
        </React.Fragment>
    )
};

export default SearchContactComponent