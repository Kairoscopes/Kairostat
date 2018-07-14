import React, { Component } from 'react';

/* image imports */
import loadingGif from './loading.gif'; //from loading.io

import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import env from '../../../../config/env';
import Alert from 'react-s-alert';
// import Center from 'react-center';

import './Tasks.css';
// import { relative } from 'path';

const tradeButtonStyle = {
  backgroundColor: "#67c26f"
};

const submitButtonStyle = {
  backgroundColor: "#67c26f",
};

// When the user clicks on <span> (x), close the modal
// spanOnClick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// windowOnClick = function(event) {
//   if (event.target == modal) {
//       modal.style.display = "none";
//   }
// }

export default class Tasks extends Component {

  constructor(props) {
    super(props);

    this.alertOptions = {
      offset: 100,
      position: 'top',
      theme: 'dark',
      timeout: 5000,
      transition: 'scale',
      html: true
    };

    this.state = {
      tasks: [],
      render: true,
      formDisabled: false,
      token: localStorage.getItem("token")
    };

  }

  // handle tick/untick of task
  // handleChange(exchange, event) {

  // }

  //re-fetch list of user's tasks and render them
  reRenderList() {
  //   axios.get(env.API_URL + '/api/suggestions')
  //     .then((res) => {
  //       // console.log(res.data);
  //       this.setState({ trades: res.data });
  //       let suggestionsArray = res.data.map((prices, index) => {
  //         // console.log(prices);
  //         return (this.generateCard(prices, index));
  //       })
  //       this.setState({ cards: suggestionsArray });

  //     })
  //     .catch((err) => {
  //       Alert.error("<span style='color:red'>" + String(err) + "</span>", this.alertOptions);
  //     })
  }

 
  componentDidMount() {
    // this.reRenderSuggestions();

    // setInterval(function () {
    //   this.reRenderSuggestions();
    // }.bind(this), 8000)
  }

  render() {

    //user's tasks
    var tasks = [];
  
    return (
      <div className="Tasks">

        <Checkbox label="task 1" />
        <br />
        <Checkbox label="task 2" checked="true" />
        <br />
        <Checkbox label="task 3" />
        <br />

        <div className="reRenderButton">
          <RaisedButton label="Refresh" type="button" buttonStyle={submitButtonStyle} onClick={() =>
            this.reRenderList()} />
        </div>
        <Alert stack={{ limit: 1, spacing: 50 }} />

      </div>

    );
  }
}
