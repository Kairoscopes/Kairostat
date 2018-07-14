import React, { Component } from 'react';
import './Dashboard.css';
import Tasks from './Tasks/Tasks';
import Settings from './accountSettings/Settings';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import Alert from 'react-s-alert';
import axios from 'axios';
import env from '../../../config/env';
import Center from 'react-center';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 5,
    marginBottom: 12,
    fontWeight: 400,
  },
  logOut: {
    position: "absolute",
    right: "1%",
    top: "1%",
    backgroundColor: "#FF1744",
    width: "7%",
    margin: "1%"
    // disabledBackgroundColor: "#FF1744"
  },
  tabs: {
    // backgroundColor: "#67c26f",
    backgroundColor: "#00A99D",
    color: "white"
  },
  tabsActive: {
    // #139149
    backgroundColor: "#00d8ca"
    // backgroundColor: "#FF1744"
  }
};

class Dashboard extends Component {
  constructor(props){
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
      showAlert: false
    }
  }

  activeTab(e) {
    e.target.style = styles.tabsActive;
  }

  //show alert for 5 seconds and then set the state to not display it (because otherwise other alerts from child components
  //  are duplicated)
  _toggleAlert(){
    this.setState({showAlert:true}, () => { setTimeout( ()=>{ this.setState( {showAlert:false}) }, 5100 ) });
  }

  _logOut() {
    axios.post(env.API_URL + '/auth/logout', { token: localStorage.getItem("token") })
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data.message);
          this._toggleAlert();
          Alert.success(res.data.message);
          localStorage.removeItem("token");
          this.props.history.push("/");
        }
        else {
          console.log(res.data.message);
          this._toggleAlert();
          Alert.error("<span style='color:#FF1744'>" + res.data.message + "</span>", this.alertOptions);
        }
      })
      .catch((err) => {
        console.log(String(err));
        this._toggleAlert();
        Alert.error(String(err));
      })
  }

  render() {
    return (
      <div className="Dashboard">
        <Center><h1>Kairostat</h1></Center>
        <RaisedButton label="Log Out" buttonStyle={styles.logOut} onClick={() => this._logOut()} />
        {
              this.state.showAlert?
              <Center><Alert stack={{ limit: 1, spacing: 50 }} /></Center>
              :
              <div></div>
        }
        <Tabs>
          <Tab label="Chat" >
            <div>
              <h2 style={styles.headline}>Teams</h2>
            </div>
          </Tab>
          <Tab label=" Tasks" >
            <div>
              <h2 style={styles.headline}>Tasks</h2>
              <Tasks />
            </div>
          </Tab>
          <Tab label="Profile">
            <div>
              <h2 style={styles.headline}>User Profile</h2>
              <Settings />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default withRouter(Dashboard);
