import React, { Component } from 'react';
import { createContainer, withTracker } from 'meteor/react-meteor-data';
import Games from '../api/collections/games.js';
import GameList from './GameList.jsx';
import GameBoard from './GameBoard.jsx';
import LoginForm from './LoginForm.jsx';

import {Langs} from './Languages.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGameId: null,
      currLang: 'English'
    }
  }

  handleEnterGame(gameId) {
    this.setState({selectedGameId: gameId});
  }

  handleBackToGameList() {
    this.setState({selectedGameId: null});
  }

  selectedGame() {
    let selectedGame = _.find(this.props.games, (game) => {
      return game._id === this.state.selectedGameId;
    });
    return selectedGame;
  }

  handleLangDropdown(event, data) {
    this.setState({currLang: data.value});
  }

  render() {
    if (!this.props.user) {
      return (
        <div>
          <LoginForm
            currLang={this.state.currLang}
            handleLangDropdown={this.handleLangDropdown.bind(this)} />
        </div>
      )
    }

    if (this.state.selectedGameId === null) {
      return (
        <GameList
          games={this.props.games}
          enterGameHandler={this.handleEnterGame.bind(this)}
          user={this.props.user}
          currLang={this.state.currLang}
          handleLangDropdown={this.handleLangDropdown.bind(this)} />
      )
    } else {
      return (
        <GameBoard
          game={this.selectedGame()}
          backToGameListHandler={this.handleBackToGameList.bind(this)}
          user={this.props.user}
          currLang={this.state.currLang}
          handleLangDropdown={this.handleLangDropdown.bind(this)} />
      )
    }
  }
}

export default withTracker(() => {
  Meteor.subscribe('games');

  return {
    user: Meteor.user(),
    games: Games.find().fetch()
  };
})(App);
