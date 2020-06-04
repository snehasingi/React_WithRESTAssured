import React from 'react'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = ({contacts}) => {
    return (
        <React.Fragment>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        <p class="card-text">{contact.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
};

export default Contacts