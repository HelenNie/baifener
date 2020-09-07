import { Random } from 'meteor/random'
import React, { Component } from 'react';
import GameHeader from './GameHeader.jsx';
import {Langs} from './Languages.jsx';

export const Password = "password";

export default class LoginForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      username: '',
      errorMsg: '',
    };
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  usernameHelper() {
    let username = this.state.username.trim();
    if (username === '') {
      this.setState({errorMsg: Langs[this.props.currLang].loginForm.err.noUsername});
      return false;
    }
    return username;
  }

  handleCreateAccount(e) {
    e.preventDefault();
    let username = this.usernameHelper();

    if(username) {
      this.handleCreateAccountHelper(username, this.handleCreateAccountCallback.bind(this));
    }
  }

  handleCreateAccountHelper(username, callback) {
    Accounts.createUser(
      {
        username: username,
        password: Password
      },
      function(err) {
        if (err) {
          callback();
        }
      }
    );
  }

  handleCreateAccountCallback(err) {
    this.setState({errorMsg: Langs[this.props.currLang].loginForm.err.usernameTaken});
  }

  handleLogin(e) {
    e.preventDefault();
    let username = this.usernameHelper();

    if(username) {
      this.handleLoginHelper(username, this.handleLoginCallback.bind(this));
    }
  }

  handleLoginHelper(username, callback) {
    Meteor.loginWithPassword(username, Password, function(err) {
      if (err) {
        callback();
      }
    });
  }

  handleLoginCallback() {
    this.setState({errorMsg: Langs[this.props.currLang].loginForm.err.wrongUsername});
  }

  render() {
    return (
      <div className="ui container">
        <GameHeader
          user={this.props.user}
          currLang={this.props.currLang}
          handleLangDropdown={this.props.handleLangDropdown} />

        <div className="ui segment">
          <form className={(this.state.errorMsg !== ''? 'error ': '') + "ui form"} name="login-form" onSubmit={this.handleLogin.bind(this)}>

            <div className="ui error message">
              <div className="header">{this.state.errorMsg}</div>
            </div>

            <div className="inline fields">
              <div className="field">
                <input type="text" onChange={this.handleUsernameChange.bind(this)} placeholder={Langs[this.props.currLang].loginForm.enterYourName}/>
              </div>
              <div className="field">
                <input className="ui green button" type="submit" value={Langs[this.props.currLang].loginForm.logIn}/>
                <input className="ui blue button" type="submit" onClick={this.handleCreateAccount.bind(this)} value={Langs[this.props.currLang].loginForm.createAccount}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
