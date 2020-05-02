import React, { Component } from 'react';

import {CurrLang} from './GameBoard.jsx';

export default class GameBoard extends Component {
  handleLogout() {
    Meteor.logout();
  }
  render() {
    return (
      <div className="ui menu inverted">
        <div className="header item">
          {CurrLang.gameHeader.baifener}
        </div>

        {this.props.user? (
          <div className="right menu">
            <div className="item">
              <i className="meh icon"/>
              {this.props.user.username}
            </div>
            <a className="item" onClick={this.handleLogout.bind(this)}>
              {CurrLang.gameHeader.logOut}
            </a>
          </div>
        ): null}
      </div>
    )
  }
}
