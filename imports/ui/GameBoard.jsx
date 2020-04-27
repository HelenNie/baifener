import React, { Component, componentDidMount } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import ReactModal from 'react-modal';
import MyDrag from './MyDrag.jsx';


import GameHeader from './GameHeader.jsx';
import {Game, GameStatuses, GameStages, ModalStates, ThreeStates, TableStates, Roles, DiLength, SuitsMap, RanksMap, NumPlayers} from '../api/models/game.js';
import {userDrawCardGame, userOpenDiGame, userCardMigrationGame, userStartGameGame, userClearTableGame, userThreeFromDiGame, userEndTurnGame, userSeePrevTableGame, userEndGameGame, userSetFirstDrawerGame, userConfirmOpenDiGame, userCancelOpenDiGame, userSetRoleGame, userClearPrevTableGame} from '../api/methods/games.js';


export const Langs = {
  CHINESE: {
    baifener: '百分',
    logIn: '登录',
    logOut: '退出',
    enterYourName: '用户名', 
    listOfGames: '你的游戏',
    joinGame: '加入',
    enterGame: '进入',
    leaveGame: '离开',
    newGame: '新游戏',
    gameNumber: '游戏',
    waiting: '等待',
    back: '回去',
    drawCard: '摸牌',
    openDiForThree: '揭底找三',
    openDi: '揭底',
    startPlaying: '开始',
    finishTurn: '结束出牌',
    clearTable: '清空',
    seePrevTable: '看上一局',
    handArea: '我的牌',
    diArea: '底',
    pointsArea: '台下分',
    tableArea: '牌桌',
    stage: '阶段',
    zhu: '主',
    currPlayer: '现任玩家',
    endGame: '结束游戏',
    gameFinished: '游戏结束',
    statusito: {
      'DRAWING': '摸牌', 
      'DI': '摸底',
      'PLAYING': '作战',
      'WRAPUP': '拿底',
      'FINISHED': '结束'
    },
    suits: {
      'H':'红桃', 
      'S':'黑桃', 
      'D':'方片', 
      'C':'梅花'
    },
    me: '我',
    partner: '同伙',
  },
  ENGLISH: {
    baifener: 'Baifener',
    logIn: 'Log In',
    logOut: 'Log Out',
    enterYourName: 'Enter your username', 
    listOfGames: 'Your Games',
    joinGame: 'Join',
    enterGame: 'Enter',
    leaveGame: 'Leave',
    newGame: 'New Game',
    gameNumber: 'Game',
    waiting: 'Waiting',
    back: 'Back',
    drawCard: 'Draw Card',
    openDiForThree: 'Look for Three in Kitty',
    openDi: 'Reveal Kitty',
    startPlaying: 'Start',
    finishTurn: 'End Turn',
    clearTable: 'Clear Table',
    seePrevTable: 'See Previous Round',
    handArea: 'HAND',
    diArea: 'Kitty',
    pointsArea: 'ATTACKER POINTS',
    tableArea: 'TABLE',
    stage: 'Stage',
    zhu: 'Trump Suit',
    currPlayer: 'Current Player',
    endGame: 'End Game',
    gameFinished: 'Game Finished',
    statusito: {
      'DRAWING': 'Drawing', 
      'DI': 'Reveal Trump',
      'PLAYING': 'Playing',
      'WRAPUP': 'Trump Points',
      'FINISHED': 'Finished'
    },
    suits: {
      'H':'Hearts', 
      'S':'Spades', 
      'D':'Diamonds', 
      'C':'Clubs'
    },
    me: 'Me',
    partner: 'Partner',
  }
}

export const CurrLang = Langs.ENGLISH;


export default class GameBoard extends Component {

  handleBackToGameList() {
    this.props.backToGameListHandler();
  }

  handleStartGame() {
    let game = this.props.game;
    userStartGameGame.call({gameId: game._id});
  }

  handleSetRole(role) {
    let game = this.props.game;
    userSetRoleGame.call({gameId: game._id, role: role});
  }

  handleSetFirstDrawer() {
    let game = this.props.game;
    userSetFirstDrawerGame.call({gameId: game._id});
  }

  handleDrawCard() {
    let game = this.props.game;
    userDrawCardGame.call({gameId: game._id});
  }

  handleOpenDi() {
    let game = this.props.game;
    userOpenDiGame.call({gameId: game._id});
  }

  handleConfirmOpenDi() {
    let game = this.props.game;
    userConfirmOpenDiGame.call({gameId: game._id});
  }

  handleCancelOpenDi() {
    let game = this.props.game;
    userCancelOpenDiGame.call({gameId: game._id});
  }

  handleCardMigration(card) {
    let game = this.props.game;
    userCardMigrationGame.call({gameId: game._id, card: card});
  }

  handleThreeFromDi() {
    let game = this.props.game;
    userThreeFromDiGame.call({gameId: game._id});
  }

  handleEndTurn() {
    let game = this.props.game;
    userEndTurnGame.call({gameId: game._id});
  }

  handleClearTable() {
    let game = this.props.game;
    userClearTableGame.call({gameId: game._id});
  }

  handleClearPrevTable() {
    let game = this.props.game;
    userClearPrevTableGame.call({gameId: game._id});
  }

  handleSeePrevTable() {
    let game = this.props.game;
    userSeePrevTableGame.call({gameId: game._id});
  }

  handleEndGame() {
    let game = this.props.game;
    userEndGameGame.call({gameId: game._id});
  }

  renderStatus() {
    let game = this.props.game;

    if (game.status === GameStatuses.STARTED) {
      return (
        <div className="ui attached center aligned segment">
          <p><b>{CurrLang.stage}:</b>{game.stage}</p>
        </div>
        )
    } else {
      return (
        <div className="ui attached center aligned segment">
          <p>{CurrLang.gameFinished}!</p>
        </div>
        )
    }
  }

  render() {
    let game = this.props.game;
    let user = this.props.user;
    let currPlayer = game.players[game.getCurrentPlayerIndex()];
    let userIsCurrPlayer = (currPlayer ? (user.username == currPlayer.username) : false);
    
    let userCards = game.hands[user.username];
    let diCards = game.di; 
    let pointCards = game.taiXiaPoints;
    let tableCards = game.currTableCards;

    let handAreaStyle = {};
    if (userIsCurrPlayer) {
      handAreaStyle['backgroundColor'] = "gold";
    }

    //wrap function //set up players in order starting with diOpener, and styling accordingly
    let tablePlayers = {};

    let playerName = '';
    let playerStyle = {};
    let startingIdx = game.getFirstPlayerShown();
    let tableOrder = [0, 1, 3, 2];

    for (var i = 0; i < tableOrder.length; i++) {
      playerName = game.players[(startingIdx + tableOrder[i]) % NumPlayers].username;
      playerStyle = {};
      if (playerName == user.username) {
        playerStyle['backgroundColor'] = '#55876c';
        playerStyle['border'] = '4px solid #55876c';
      } else if (game.arePartners(playerName, user.username)) {
        playerStyle['backgroundColor'] = '#8cb7a0';
        playerStyle['border'] = '4px solid #8cb7a0';
      } else {
        playerStyle['backgroundColor'] = 'lightgray';
        playerStyle['border'] = '4px solid lightgray';
      }
      tablePlayers[playerName] = playerStyle;
    }

    if (game.showCurrPlayerBorder(user)) {
      tablePlayers[currPlayer.username]['border'] = '4px solid gold';
    }

    return (
      <div className="ui container">
        <GameHeader user={user}/>

      {/* Modals */}
        <ReactModal
          isOpen = {(game.modalState == ModalStates.SET_ROLE) || (game.modalState == ModalStates.SET_ROLE_AGAIN)}
          className = "modal"
          overlayClassName = "overlay"
          ariaHideApp={false}>
          <br></br>
          <p className="modalBanner">Let's get started!</p>

          {(!(user.username in game.playerRoles)) ? (
            <div className="modalDiv"> 
              {(game.modalState == ModalStates.SET_ROLE_AGAIN) ? (
                <p>Looks like you and your friends do not agree on your roles...Let's try this again!</p>
              ): null}
                <p><b>Select your team:</b></p>
                <br></br>
                <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.DEFENDER)}>Defender</button>
                <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.ATTACKER)}>Attacker</button>
                <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.TBD)}>TBD</button>
            </div>
          ): (
            <p>Waiting for other players to confirm...</p>
          )}

        </ReactModal>

        <ReactModal
          isOpen = {game.modalState == ModalStates.SET_DRAW_FIRST}
          className = "modal"
          overlayClassName = "overlay"
          ariaHideApp={false}>
          <br></br>
          <p className="modalBanner">Will you draw first?</p>

          {(game.playerRoles[user.username] == Roles.ATTACKER || game.playerRoles[user.username] == Roles.TBD) ? (
            <div className="modalDiv"> 
              <br></br>
               <button className="ui green button" onClick={this.handleSetFirstDrawer.bind(this)}>Click here to draw first</button>
            </div>
          ): (
            <p>Waiting for opponents to start drawing...</p>
          )}

          
        </ReactModal>

        <ReactModal
          isOpen = {game.modalState == ModalStates.OPEN_DI && game.diOpener == user.username}
          className = "modal"
          overlayClassName = "overlay"
          ariaHideApp={false}>
          <br></br>
          <p className="modalBanner">Are you ready to open the kitty?</p>
          <br></br>
          <button className="ui green button" onClick={this.handleConfirmOpenDi.bind(this)}>Meow!</button>
          <button className="ui green button" onClick={this.handleCancelOpenDi.bind(this)}>Nope</button>
        </ReactModal>

        {/* Buttons */}
        <div className="buttons">
          
          <button className="ui button black" onClick={this.handleBackToGameList.bind(this)}>{CurrLang.back}</button>

          {(game.stage != GameStages.FINISHED)? (
              <button className="ui button red" onClick={this.handleEndGame.bind(this)} style={{float: 'right'}}>{CurrLang.endGame}</button>
          ):null}

        </div>

        {/* Status banner */}
        {this.renderStatus()}

        {/* Hand */}
        <div className="row">
          <div className="column">
            <p className="banner"><b>{CurrLang.handArea}</b></p>

            {/* WRAP */}
            {(game.stage != GameStages.SET_UP) ? (
              <p className="playerRole">Role: {game.playerRoles[user.username]}</p>
            ): null}

            {(game.threeState != ThreeStates.NOT_SHOWN) ? (
              <img src={"/images/" + SuitsMap[game.zhu] + ".png"} className="zhuImage"></img>
            ): null}

            {(game.stage == GameStages.DRAW) ? (
              (userIsCurrPlayer) ? (
                <button className="ui button blue corner" onClick={this.handleDrawCard.bind(this)}>{CurrLang.drawCard}</button>
              ): (
                <button className="ui button blue corner" onClick={this.handleDrawCard.bind(this)} disabled>{CurrLang.drawCard}</button>
              )
            ): (game.stage == GameStages.PLAY) ? (
              (userIsCurrPlayer)? (
                <button className="ui button blue corner" onClick={this.handleEndTurn.bind(this)}>{CurrLang.finishTurn}</button>
              ): (
                <button className="ui button blue corner" onClick={this.handleEndTurn.bind(this)} disabled>{CurrLang.finishTurn}</button>
              )
            ): null}

            <div className="handArea" style={handAreaStyle}>
                {userCards.map((card, index) => (
                  <MyDrag
                    key={card}
                    card={card}
                    user={user}
                    game={game}
                    location={game.cardLocations[card]}
                    zIndex={game.cardZIndexes[card]}
                  />
                ))}
            </div>
            <div className="landingArea">
              <p className="landingText">Card</p>
            </div>
          </div>

          <div className="column" id="dummyColumn1"></div>


          {/* Wrap main Areas and next areas separately */}

          {/* Di to find three */}
          {(game.stage == GameStages.FIND_THREE_IN_DI) ? (
            <div className="column" id="tableColumn">
              <p className="banner"><b>{CurrLang.diArea}</b></p>
              <div className="diArea">
                {diCards.map((diCard, index) => (
                  (index < game.threeFromDiCount) ? (
                    <img src={"/images/" + diCard + ".png"} className="handle" draggable="false" key={diCard}></img>
                  ): (
                    <p key={diCard}></p>
                  )
                ))}
              </div>
              <div className="nextArea">
                <br></br>
                {(game.playerRoles[user.username] == Roles.DEFENDER) ? (
                  <button className="ui button blue" onClick={this.handleOpenDi.bind(this)}>{CurrLang.openDi}</button>
                ): (
                  <p>Waiting for opponents to open kitty...</p>
                )}
              </div>
            </div>

          //Opened di
          ): (game.stage == GameStages.DI && game.diOpener == user.username) ? (
            <div className="column" id="tableColumn">
              <p className="banner"><b>{CurrLang.diArea}</b></p>
              <div className="diArea">
                {diCards.map((diCard, index) => (
                  <img src={"/images/" + diCard + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, diCard)} draggable="false" key={diCard}></img>
                ))}
              </div>
              <div className="nextArea">
                <br></br>
                <button className="ui button red" onClick={this.handleStartGame.bind(this)}>{CurrLang.startPlaying}</button>
              </div>
            </div>

          //Di during WRAPUP and FINISHED
          ): ((game.stage == GameStages.WRAP_UP) || (game.stage == GameStages.FINISHED)) ? (
            <div className="column" id="tableColumn">
              <p className="banner"><b>{CurrLang.diArea}</b></p>
              <div className="diAreaWrapup">
                  {diCards.map((diCard, index) => (
                    <img src={"/images/" + diCard + ".png"} className="handle" draggable="false" key={diCard}></img>
                  ))}
              </div>
            </div>
          ): (

            //Played cards
            <div className="column" id="tableColumn">
              <p className="banner"><b>{CurrLang.tableArea}</b></p>

              {(game.tableState == TableStates.SEE_PREV_TABLE)? (
                <button className="ui button blue corner" onClick={this.handleSeePrevTable.bind(this)}>{CurrLang.seePrevTable}</button>
              ): (game.tableState == TableStates.CLEAR_PREV_TABLE)? (
                <button className="ui button blue corner" onClick={this.handleClearPrevTable.bind(this)}>Clear prev table</button>
              ): (game.stage == GameStages.PLAY)? (
                <button className="ui button blue corner" onClick={this.handleSeePrevTable.bind(this)} disabled>{CurrLang.seePrevTable}</button>
              ): null}

              <div className="rowTable">

                {Object.keys(tablePlayers).map((player, index) => (
                  <div className="tableArea" key={index} style={tablePlayers[player]}>
                    <p className="tableBanner"><b>{player}</b></p>
                    {Object.keys(tableCards).map((card, index) => (
                      (tableCards[card] == player)? (
                        <img src={"/images/" + card + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, card)} draggable="false" key={card}></img>
                      ):null
                    ))}
                  </div>
                ))}  

                {(game.disableTableArea(user)) ? (
                    <div className="rowTableShadow"></div>
                ): null}

              </div>
              <div className="nextArea">
                <br></br>
                {(game.stage == GameStages.DONE_DRAWING && game.threeState == ThreeStates.NOT_SHOWN)? (
                  (game.playerRoles[user.username] == Roles.DEFENDER) ? (
                    <button className="ui button blue" onClick={this.handleThreeFromDi.bind(this)}>{CurrLang.openDiForThree}&rarr;</button>
                  ): (
                    <p>Waiting for opponents to look for trump suit in kitty...</p>
                  )
                ): (game.stage == GameStages.DONE_DRAWING && game.threeState != ThreeStates.NOT_SHOWN) ? (
                  (game.playerRoles[user.username] == Roles.DEFENDER) ? (
                    <button className="ui button blue" onClick={this.handleOpenDi.bind(this)}>{CurrLang.openDi}</button>
                  ): (
                    <p>Waiting for opponents to open kitty...</p>
                  )
                ): (game.tableState == TableStates.CLEAR_TABLE)? (
                  <button className="ui button blue" onClick={this.handleClearTable.bind(this)}>Click here if you won this round</button>
                ): (game.stage == GameStages.DI && game.diOpener != user.username) ? (
                  <p>Waiting for {game.diOpener} to start the game...</p>
                ): (
                  <p>Placeholder</p>
                )}
              </div>
            </div>
          )}

          <div className="column" id="dummyColumn2"></div>
        
          <div className="column" id="pointsColumn">
            <p className="banner"><b>{CurrLang.pointsArea}</b></p>
            <div className="pointsArea">
                {pointCards.map((pointCard, index) => (
                  <img src={"/images/" + pointCard + ".png"} className="handle" draggable="false" key={pointCard}></img>
                ))}
            </div>
          </div>
        </div> 
      </div>
    )
  }
}
