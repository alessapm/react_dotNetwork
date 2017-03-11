import React, { Component } from 'react';
import People from './People';
import { Link } from 'react-router';

export default class Homepage extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div id="wrapper">
        <h1> dotNetwork </h1>
        <Link to="/people/new">Add Contact</Link>
        <People />
        <Link to="/people/new">Add Contact</Link>
      </div>
    )
  }


}
