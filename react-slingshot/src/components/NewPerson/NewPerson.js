import React, { Component } from 'react';
import { Link } from "react-router";
import update from "react-addons-update";
import { browserHistory } from "react-router";


export default class NewPerson extends Component {
  constructor(props){
    super(props);

    this.state = {
      person: {
        firstname: "",
        lastname: "",
        email: "",
        username: ""
      }
    }

  }


   handleChange(event){
    let newState = update(this.state, {
      person: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState);
   }//closes handleChange


  handleSubmit(event){
    event.preventDefault();

    fetch('http://myapi-profstream.herokuapp.com/api/4ccd39/persons', {
      method: 'POST',
      body: JSON.stringify({
        firstname: this.state.person.firstname,
        lastname: this.state.person.lastname,
        email: this.state.person.email,
        username: this.state.person.username
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      browserHistory.push("/");
    }).catch(err => console.log(err))
  } //closes handleSubmit




render(){
  return(
    <div className="wrapper">
      <nav>
        <h1> dotNetwork</h1>
        <Link to="/">Home</Link>
      </nav>
      <div className="contains-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>First Name:</label>
          <input name="firstname"
          onChange={this.handleChange.bind(this)}
          type="text" /><br />

          <label>Last Name:</label>
          <input name="lastname"
          onChange={this.handleChange.bind(this)}
          type="text" /><br />

          <label>Email:</label>
          <input name="email"
          onChange={this.handleChange.bind(this)}
          type="text" /><br />

          <label>Username:</label>
          <input name="username"
          onChange={this.handleChange.bind(this)}
          type="text" /><br />

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  )
}


}
