import React, { Component } from 'react';
import { Link } from 'react-router';

export default class People extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: []
    }
  }

componentDidMount(){
  fetch('http://myapi-profstream.herokuapp.com/api/4ccd39/persons', {
    method: 'GET'
  })
  .then((results) => {
    // console.log('***results: ', results)
    results.json().then((data) => {
      // console.log('data ', data);
      this.setState({people: data})
    })
  })
  .catch(err => console.log(err));
}




render(){

  return (
    <div id="wrap">
      <h2>Connections: </h2>
      <div id="forIteration">
        {this.state.people.map((person) => {
          return (
            <div key={person.id}>
              <h3>{person.firstname} {person.lastname}</h3>
              <p> {person.email} </p>
              <p> known as: {person.username}</p><br />

            </div>
          )
        })}
      </div>
    </div> //closes wrap

  )

}


} // closes People
