import { Random } from 'meteor/random'
import React, { Component } from 'react';
import GameHeader from './GameHeader.jsx';
import {CurrLang} from './GameBoard.jsx';

export const Users = ['one', 'two', 'three', 'four'];
export const Partners = {'one':'three', 'two':'four', 'three':'one', 'four':'two'};
export const Password = "password";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      errorMsg: '',
    };
    for (var i = 0; i < Users.length; i++) {
      Accounts.createUser({
        username: Users[i],
        password: Password
      });
    }
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let username = this.state.username.trim();
    if (username === '') {
      this.setState({errorMsg: CurrLang.loginForm.err.noUsername});
      return;
    }

    this.handleLogin(username, Password, this.handleLoginCallback.bind(this));
  }

  handleLogin(username, password, callback) {
    Meteor.loginWithPassword(username, password, function(err) {
      if (err) {
        callback();
      }
    });
  }

  handleLoginCallback() {
    this.setState({errorMsg: CurrLang.loginForm.err.wrongUsername});
  }

  render() {
    return (
      <div className="ui container">
        <GameHeader user={this.props.user}/>

        <div className="ui segment">
          <form className={(this.state.errorMsg !== ''? 'error ': '') + "ui form"} name="login-form" onSubmit={this.handleSubmit.bind(this)}>

            <div className="ui error message">
              <div className="header">{this.state.errorMsg}</div>
            </div>

            <div className="inline fields">
              <div className="field">
                <input type="text" onChange={this.handleUsernameChange.bind(this)} placeholder={CurrLang.loginForm.enterYourName}/>
              </div>
              <div className="field">
                <input className="ui green button" type="submit" value={CurrLang.loginForm.logIn}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
