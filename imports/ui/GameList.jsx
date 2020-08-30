import React, { Component } from 'react';
import GameHeader from './GameHeader.jsx';
import {Langs} from './Languages.jsx';
import {Game, GameStatuses} from '../api/models/game.js';
import {newGame, userJoinGame, userLeaveGame} from '../api/methods/games.js';

export default class GameList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      findGameId: '',
      errorMsg: '',
    };
  }

  handleNewGame() {
    newGame.call({});
  }

  handleLeaveGame(gameId) {
    userLeaveGame.call({gameId: gameId});
  }

  handleJoinGame(gameId) {
    userJoinGame.call({gameId: gameId});
  }

  handleEnterGame(gameId) {
    this.props.enterGameHandler(gameId);
  }

  handleGameIDChange(e) {
    this.setState({findGameId: e.target.value});
  }

  handleSubmit(e) {
    console.log("Find game");
    e.preventDefault();
    this.handleJoinGame(this.state.findGameId);
  }

  activeGames() {
    // return _.filter(this.props.games, (game) => {
    //   return game.status === GameStatuses.WAITING || game.status === GameStatuses.STARTED;
    // });
    return _.filter(this.props.games, (game) => {
      var playerInGame = false;
      for (var i = 0; i < game.players.length; i++) {
        if (game.players[i].userId == this.props.user._id) {
          playerInGame = true;
        }
      }
      return (game.status === GameStatuses.WAITING || game.status === GameStatuses.STARTED) && playerInGame;
    });
  }

  myCurrentGameId() {
    let game = _.find(this.activeGames(), (game) => {
      return game.userIdToIndex(this.props.user._id) !== null;
    });
    return game === undefined? null: game._id;
  }

  renderPlayers(game) {
    let player1 = game.players.length > 0? game.players[0].username: Langs[this.props.currLang].gameList.waiting+"...";
    let player2 = game.players.length > 1? game.players[1].username: Langs[this.props.currLang].gameList.waiting+"...";
    let player3 = game.players.length > 2? game.players[2].username: Langs[this.props.currLang].gameList.waiting+"...";
    let player4 = game.players.length > 3? game.players[3].username: Langs[this.props.currLang].gameList.waiting+"...";
    return (
      <div>
        <div>
          <i className="user icon"></i> {player1}
        </div>
        <div>
          <i className="user icon"></i> {player2}
        </div>
        <div>
          <i className="user icon"></i> {player3}
        </div>
        <div>
          <i className="user icon"></i> {player4}
        </div>
      </div>
    )
  }

  render() {
    return (
    <div className="ui container">
      <GameHeader
        user={this.props.user}
        currLang={this.props.currLang}
        handleLangDropdown={this.props.handleLangDropdown} />

      <h1 className="ui top attached header">{Langs[this.props.currLang].gameList.listOfGames}</h1>
      <div className="ui attached segment">
        <div className="ui three cards">
          {this.activeGames().map((game, index) => {
            return (
              <div key={game._id} className="ui card gray">
                <div className="content" id="gameCardHeader">
                  <div className="header">
                    {game.status === GameStatuses.WAITING? (
                      <span className="ui right yellow corner label">
                        <i className="idea icon"/>
                      </span>
                    ): null}
                    {Langs[this.props.currLang].gameList.gameNumber} {index+1} (id = {game._id})
                  </div>
                </div>
                <div className="content">
                  {this.renderPlayers(game)}
                </div>

                <div className="extra content" id="gameCardFooter">
                  {/* can leave only if user is in the game, and the game is not started */}
                  {this.myCurrentGameId() === game._id && game.status === GameStatuses.WAITING? (
                    <button className="ui red button" onClick={this.handleLeaveGame.bind(this, game._id)}>{Langs[this.props.currLang].gameList.leaveGame}</button>
                  ): null}

                  {/* can join only if user is not in any game, and the game is not started */}
                  {this.myCurrentGameId() === null && game.status === GameStatuses.WAITING? (
                    <button className="ui yellow button" onClick={this.handleJoinGame.bind(this, game._id)}>{Langs[this.props.currLang].gameList.joinGame}</button>
                  ): null}

                  {/* can enter only if the game is started */}
                  {game.status === GameStatuses.STARTED? (
                    <button className="ui green button" onClick={this.handleEnterGame.bind(this, game._id)}>{Langs[this.props.currLang].gameList.enterGame}</button>
                  ): null}

                  {/* just a invisible dummy button to make up the space */}
                  <button className="ui button" style={{visibility: "hidden"}}>Dummy</button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Only show new game button if player is not in any room */}
      </div>
      <div className="ui attached segment">
        <div>
          <button className="ui button green" onClick={this.handleNewGame.bind(this)} disabled={this.myCurrentGameId() !== null}>{Langs[this.props.currLang].gameList.newGame}</button>
        </div>
      </div>
      <div className="ui attached segment">
        <form className={(this.state.errorMsg !== ''? 'error ': '') + "ui form"} name="find-game-form" onSubmit={this.handleSubmit.bind(this)}>

          <div className="ui error message">
            <div className="header">{this.state.errorMsg}</div>
          </div>

          <div className="inline fields">
            <div className="field">
              <input type="text" onChange={this.handleGameIDChange.bind(this)} placeholder={"Enter game ID"}/>
            </div>
            <div className="field">
              <input className="ui green button" type="submit" value="Find Game"/>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
  }
}
