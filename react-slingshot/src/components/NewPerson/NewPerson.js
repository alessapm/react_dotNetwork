import React, { Component } from 'react';
import { Link } from "react-router";
import update from "react-addons-update";
import { browserHistory } from "react-router";


export default class NewPerson extends Component {
  constructor(props){
    super(props);

    this.state = {
      person: {}
    }

  }

render(){
  return(
    <h1>Add New Contact</h1>
  )
}


}
