import React, { Component } from 'react';
import { Link } from 'react-router';
import update from "react-addons-update";

export default class People extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
      id: 0
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

      <div id="forIteration">
        {this.state.people.map((person) => {
          return (
            <div key={person.id} className='person col s6 m6 l6 blue accent-1'>

              <h3 className="blue-text text-lighten-5 blue accent-3">{person.firstname} {person.lastname}</h3>
              <p> {person.email} </p>
              <p> known as: {person.username}</p>
              <button className="blue darken-4 blue-text text-lighten-5 waves-effect waves-light btn"><Link to={`/people/${person.id}/edit`}>Edit</Link></button>


            </div>

          )
        })}
      </div>
    </div> //closes wrap

  )

}


} // closes People
