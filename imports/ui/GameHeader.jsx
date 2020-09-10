import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'

import {LanguageOptions, Langs} from './Languages.jsx';

export default class GameBoard extends Component {
  handleLogout() {
    Meteor.logout();
  }

  render() {
    return (
      <div className="ui menu inverted">
        <div className="header item">
          {Langs[this.props.currLang].gameHeader.baifener}
        </div>
        <div className="right menu">
          <div className="item">
            <Dropdown
              button
              className='icon'
              onChange={this.props.handleLangDropdown}
              floating
              labeled
              icon='world'
              options={LanguageOptions}
              text={Langs[this.props.currLang].gameHeader.selectLanguage}
            />
          </div>

          {this.props.user? (
            <span>
              <div className="item">
                <i className="meh icon"/>
                {this.props.user.username}
              </div>
              <a className="item" onClick={this.handleLogout.bind(this)}>
                {Langs[this.props.currLang].gameHeader.logOut}
              </a>
            </span>
          ): null}
        </div>
      </div>
    )
  }
}
