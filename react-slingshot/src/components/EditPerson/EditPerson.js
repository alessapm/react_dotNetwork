import React, { Component } from 'react';
import update from 'react-addons-update';
import { Link } from "react-router";
import { browserHistory } from "react-router";

export default class EditPerson extends Component {
  constructor(props){
    super(props);

    console.log('props: ', props)

    this.state = {
      person: {
        firstname: '',
        lastname: '',
        email: '',
        username: ''
      }
    }
  }

  componentDidMount(){
    fetch(`http://myapi-profstream.herokuapp.com/api/4ccd39/persons/${this.props.params.id}`, {
      method: 'GET'
    })
    .then((result) => {
      result.json().then((Person) => {
        this.setState({person: Person})
      })
    })
    .catch(err => console.log(err))
  }

  deleteSubmit(event){
  event.preventDefault();

  fetch(`http://myapi-profstream.herokuapp.com/api/4ccd39/persons/${this.props.params.id}`, {
    method: 'DELETE'
  })
  .then(() => {
    browserHistory.push('/');
  })
  .catch(err => console.log('err: ', err))
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
  } //closes handleChange

  handleSubmit(event){
    event.preventDefault();

    fetch(`http://myapi-profstream.herokuapp.com/api/4ccd39/persons/${this.props.params.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        firstname: this.state.person.firstname,
        lastname: this.state.person.lastname,
        email: this.state.person.email,
        username: this.state.person.username
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      browserHistory.push('/');
    })
    .catch(err => console.log(err))
  } //closes handleSubmit



render(){
  return(
    <div className="wrapper">

        <h1 className="blue-text text-darken-4"> dotNetwork</h1>
        <Link to="/" className="add">Home</Link>

      <div className="contains-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>First Name:</label>
          <input name="firstname"
          onChange={this.handleChange.bind(this)}
          value={this.state.person.firstname}
          className="blue accent-1"
          type="text" /><br />

          <label>Last Name:</label>
          <input name="lastname"
          value={this.state.person.lastname}
          className="blue accent-1"
          onChange={this.handleChange.bind(this)}
          type="text" /><br />

          <label>Email:</label>
          <input name="email"
          className="blue accent-1"
          value={this.state.person.email}
          onChange={this.handleChange.bind(this)}
          type="text" /><br />

          <label>Username:</label>
          <input name="username"
          className="blue accent-1"
          value={this.state.person.username}
          onChange={this.handleChange.bind(this)}
          type="text" /><br />

          <button type="submit" className="blue darken-4 blue-text text-lighten-5 waves-effect waves-light btn">Submit</button><br /><br />

          <form onSubmit={this.deleteSubmit.bind(this)}>
              <button type='submit' className="pink accent-4 blue-text text-lighten-5 waves-effect waves-light btn">Delete Contact</button>
          </form>


        </form>
      </div>
    </div>
  )
}


}
