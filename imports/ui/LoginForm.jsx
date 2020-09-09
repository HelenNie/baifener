import { Random } from 'meteor/random'
import React, { Component } from 'react';
import GameHeader from './GameHeader.jsx';
import {Langs} from './Languages.jsx';

export default class LoginForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      username: '',
      password: '',
      errorMsg: '',
    };
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  usernameHelper() {
    let username = this.state.username.trim();
    if (username === '') {
      this.setState({errorMsg: Langs[this.props.currLang].loginForm.err.noUsername});
      return false;
    }
    return username;
  }

  passwordHelper() {
    let password = this.state.password.trim();
    if (password === '') {
      this.setState({errorMsg: Langs[this.props.currLang].loginForm.err.noPassword});
      return false;
    }
    return password;
  }

  handleCreateAccount(e) {
    e.preventDefault();
    let username = this.usernameHelper();
    let password = this.passwordHelper();

    //Use in GameList and ap to gameID
    var randomWords = require('random-words');
    console.log(randomWords({exactly:1, wordsPerString:3, separator:'-'}))

    if(username && password) {
      this.handleCreateAccountHelper(username, password, this.handleCreateAccountCallback.bind(this));
    }
  }

  handleCreateAccountHelper(username, password, callback) {
    Accounts.createUser(
      {
        username: username,
        password: password
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
    let password = this.passwordHelper();

    if(username && password) {
      this.handleLoginHelper(username, password, this.handleLoginCallback.bind(this));
    }
  }

  handleLoginHelper(username, password, callback) {
    Meteor.loginWithPassword(username, password, function(err) {
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
                <input type="text" onChange={this.handleUsernameChange.bind(this)} placeholder={Langs[this.props.currLang].loginForm.username}/>
              </div>
            </div>
            <div className="inline fields">
              <div className="field">
                <input type="password" onChange={this.handlePasswordChange.bind(this)} placeholder={Langs[this.props.currLang].loginForm.password}/>
              </div>
            </div>
              <div className="field">
                <input className="ui green button" type="submit" value={Langs[this.props.currLang].loginForm.logIn}/>
                <input className="ui blue button" type="submit" onClick={this.handleCreateAccount.bind(this)} value={Langs[this.props.currLang].loginForm.createAccount}/>
              </div>

          </form>
        </div>
      </div>
    )
  }
}
