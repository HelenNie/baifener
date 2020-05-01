import React, { Component, componentDidMount } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import ReactModal from 'react-modal';
import MyDrag from './MyDrag.jsx';


import GameHeader from './GameHeader.jsx';
import {Game, GameStatuses, GameStages, ModalStates, ThreeStates, TableStates, Roles, DiLength, SuitsMap, RanksMap, NumPlayers} from '../api/models/game.js';
import {userDrawCardGame, userOpenDiGame, userCardMigrationGame, userStartGameGame, userClearTableGame, userThreeFromDiGame, userEndTurnGame, userSeePrevTableGame, userEndGameGame, userSetFirstDrawerGame, userConfirmOpenDiGame, userCancelOpenDiGame, userSetRoleGame, userClearPrevTableGame} from '../api/methods/games.js';

export const TableOrder = [0, 1, 3, 2];

export const CssAttributes = {
  backgroundColor: 'backgroundColor',
  border: 'border'
}

export const CssValues = {
  tableArea: {
    user: {
      backgroundColor: '#55876c',
      border: '4px solid #55876c'
    },
    partner: {
      backgroundColor: '#8cb7a0',
      border: '4px solid #8cb7a0'
    },
    opponents: {
      backgroundColor: 'lightgray',
      border: '4px solid lightgray'
    },
    currPlayer: {
      border: '4px solid gold'
    }
  },
  handArea: {
    backgroundColor: 'gold'
  }
}

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

  renderTablePlayersStyle(game, user) {
    //set up players in order starting with diOpener, and styling accordingly
    let tablePlayers = {};
    let playerName = '';
    let startingIdx = game.getFirstPlayerShown();

    for (var i = 0; i < TableOrder.length; i++) {
      playerName = game.players[(startingIdx + TableOrder[i]) % NumPlayers].username;
      if (playerName == user.username) {
        tablePlayers[playerName] = CssValues.tableArea.user;
      } else if (game.arePartners(playerName, user.username)) {
        tablePlayers[playerName] = CssValues.tableArea.partner;
      } else {
        tablePlayers[playerName] = CssValues.tableArea.opponents;
      }
    }

    if (game.showCurrPlayerBorder(user)) {
      let currPlayer = game.players[game.getCurrentPlayerIndex()];
      tablePlayers[currPlayer.username][CssAttributes.border] = CssValues.tableArea.currPlayer.border;
    }

    return tablePlayers;
  }

  renderHandAreaStyle(game, user) {
    let handAreaStyle = {};
    if (user.username == game.getCurrPlayer()) {
      handAreaStyle[CssAttributes.backgroundColor] = CssValues.handArea.backgroundColor;
    }
    return handAreaStyle;
  }

  renderModal(game, user, modal) {
    var banner;
    var content;

    switch (modal) {
      case ModalStates.SET_ROLE:
        banner = "Select your team!";
        content = user.username in game.playerRoles ? 
          "Waiting for other players to confirm..." :
          <div className="modalContent">
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.DEFENDER)}>Defender</button>
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.ATTACKER)}>Attacker</button>
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.TBD)}>TBD</button>
          </div>;
        break;
      case ModalStates.SET_ROLE_AGAIN:
        banner = "Select your team!";
        content = user.username in game.playerRoles ? 
          "Waiting for other players to confirm..." :
          <div className="modalContent">
            <p>Looks like you and your friends do not agree on your roles...Let's try this again!</p>
            <br></br>
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.DEFENDER)}>Defender</button>
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.ATTACKER)}>Attacker</button>
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.TBD)}>TBD</button>
          </div>;
          break;
      case ModalStates.SET_DRAW_FIRST:
        banner = "Will you draw first?";
        content = game.playerRoles[user.username] == Roles.DEFENDER ? 
          "Waiting for opponents to start drawing..." :
          <div className="modalContent">
            <button className="ui green button" onClick={this.handleSetFirstDrawer.bind(this)}>Click here to draw first</button>
          </div>;
          break;
      default:
        banner = "Are you ready to open the kitty?";
        content = 
          <div className="modalContent">
            <p>"Are you sure you want to open to kitty?"</p>
            <button className="ui green button" onClick={this.handleConfirmOpenDi.bind(this)}>Meow!</button>
            <button className="ui green button" onClick={this.handleCancelOpenDi.bind(this)}>Nope</button>
          </div>;
    }

    return (
      <ReactModal
          isOpen = { game.modalState == modal }
          className = "modal"
          overlayClassName = "overlay"
          ariaHideApp={false}>
          <br></br>
          <p className="modalBanner">{ banner }</p>
          <div className="modalDiv"> 
            <br></br>
            { content }
          </div>
      </ReactModal>
      );
  }

  renderHandAreaItems(game, user) {
    var items = [];
    var item1;
    var item2;

    if (game.stage != GameStages.SET_UP) {
      items.push(<p className="playerRole" key="1">Role: {game.playerRoles[user.username]}</p>);
    }
    if (game.threeState != ThreeStates.NOT_SHOWN) {
      items.push(<img src={"/images/" + SuitsMap[game.zhu] + ".png"} className="zhuImage" key="2"></img>);
    }
    if (game.stage == GameStages.DRAW) {
      item1 = <button className="ui button blue corner" key="3" onClick={this.handleDrawCard.bind(this)}>{CurrLang.drawCard}</button>;
      item2 = <button className="ui button blue corner" key="3" onClick={this.handleDrawCard.bind(this)} disabled>{CurrLang.drawCard}</button>;
      items.push(this.renderByRole(game, user, item1, item2, game.getCurrPlayer()));
    }
    if (game.stage == GameStages.PLAY) {
      item1 = <button className="ui button blue corner" key="4" onClick={this.handleEndTurn.bind(this)}>{CurrLang.finishTurn}</button>;
      item2 = <button className="ui button blue corner" key="4" onClick={this.handleEndTurn.bind(this)} disabled>{CurrLang.finishTurn}</button>;
      items.push(this.renderByRole(game, user, item1, item2, game.getCurrPlayer()));
    }

    return items;
  }

  renderTableAreaItems(game, user) {
    var button;

    if (game.tableState == TableStates.SEE_PREV_TABLE) {
      button = <button className="ui button blue corner" onClick={this.handleSeePrevTable.bind(this)}>{CurrLang.seePrevTable}</button>;
    } else if (game.tableState == TableStates.CLEAR_PREV_TABLE) {
      button = <button className="ui button blue corner" onClick={this.handleClearPrevTable.bind(this)}>Clear prev table</button>;
    } else {
      button = <button className="ui button blue corner" onClick={this.handleSeePrevTable.bind(this)} disabled>{CurrLang.seePrevTable}</button>;
    }

    return button;
  }

  renderTableCol(game, user) {
    let diCards = game.di; 
    let tableCards = game.currTableCards;
    let tablePlayers = this.renderTablePlayersStyle(game, user);

    var bannerText;
    var content;

    if (game.stage == GameStages.FIND_THREE_IN_DI) {
      // Di to find three view
      bannerText = CurrLang.diArea;
      content = 
        <div className="diArea">
          {diCards.slice(0, game.threeFromDiCount).map((diCard, index) => (
            <img src={"/images/" + diCard + ".png"} className="handle" draggable="false" key={diCard}></img>
          ))}
        </div>
    } else if (game.stage == GameStages.DI && game.diOpener == user.username) {
      //Open di view
      bannerText = CurrLang.diArea;
      content = 
          <div className="diArea">
            {diCards.map((diCard, index) => (
              <img src={"/images/" + diCard + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, diCard)} draggable="false" key={diCard}></img>
            ))}
          </div>
    } else if ((game.stage == GameStages.WRAP_UP) || (game.stage == GameStages.FINISHED)) {
      //Di during WRAPUP and FINISHED view
      bannerText = CurrLang.diArea;
      content = 
          <div className="diAreaWrapup">
              {diCards.map((diCard, index) => (
                <img src={"/images/" + diCard + ".png"} className="handle" draggable="false" key={diCard}></img>
              ))}
          </div>
    } else {
      //Playing view
      bannerText = CurrLang.tableArea;
      content = 
        <div className="rowTable">
          {this.renderTableAreaItems(game, user)}
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
        </div>;
    }

    return ({banner: <p className="banner"><b>{ bannerText }</b></p>, content: content});
  }

  renderNextArea(game, user) {
    let items = [];
    var item1;
    var item2;

    if (game.stage == GameStages.DONE_DRAWING && game.threeState == ThreeStates.NOT_SHOWN) {
      //Find three in di button
      item1 = <button className="ui button blue" key="1" onClick={this.handleThreeFromDi.bind(this)}>{CurrLang.openDiForThree}&rarr;</button>;
      item2 = <p key="1">Waiting for opponents to look for trump suit in kitty...</p>;
      items.push(this.renderByRole(game, user, item1, item2, Roles.DEFENDER));
    } else if ((game.stage == GameStages.DONE_DRAWING && game.threeState != ThreeStates.NOT_SHOWN) || (game.stage == GameStages.FIND_THREE_IN_DI)) {
      //Open di button
      item1 = <button className="ui button blue" key="2" onClick={this.handleOpenDi.bind(this)}>{CurrLang.openDi}</button>;
      item2 = <p key="2">Waiting for opponents to open kitty...</p>;
      items.push(this.renderByRole(game, user, item1, item2, Roles.DEFENDER));
    } else if (game.stage == GameStages.DI) {
      //Start playing button
      item1 = <button className="ui button red" key="3" onClick={this.handleStartGame.bind(this)}>{CurrLang.startPlaying}</button>;
      item2 = <p key="3">Waiting for {game.diOpener} to start the game...</p>;
      items.push(this.renderByRole(game, user, item1, item2, game.diOpener));
    } else if (game.tableState == TableStates.CLEAR_TABLE) {
      //Clear table button
      items.push(<button className="ui button blue" key="4" onClick={this.handleClearTable.bind(this)}>Click here if you won this round</button>);
    } else {
      //Default
      items.push(<p key="5">Placeholder</p>);
    }

    return items;
  }

  renderByRole(game, user, item1, item2, role) {
    if (game.playerRoles[user.username] == role) {
      return item1;
    } else {
      return item2;
    }
  }

  render() {
    let game = this.props.game;
    let user = this.props.user;
    
    let userCards = game.hands[user.username];
    let pointCards = game.taiXiaPoints;

    let handAreaStyle = this.renderHandAreaStyle(game, user);

    console.log(game.stage);

    return (
      <div className="ui container">
        {/* Header */}
        <GameHeader user={user}/>

        {/* Modals */}
        {this.renderModal(game, user, ModalStates.SET_ROLE)}
        {this.renderModal(game, user, ModalStates.SET_ROLE_AGAIN)}
        {this.renderModal(game, user, ModalStates.SET_DRAW_FIRST)}
        {this.renderModal(game, user, ModalStates.OPEN_DI)}

        {/* TopRow */}
        <div className="row" id="topRow">
          {/* Buttons */}
          <button className="ui button black topButton" onClick={this.handleBackToGameList.bind(this)}>{CurrLang.back}</button>
          {(game.stage != GameStages.FINISHED)? (
            <button className="ui button red topButton" onClick={this.handleEndGame.bind(this)}>{CurrLang.endGame}</button>
          ): (
            <button className="ui button red topButton" onClick={this.handleEndGame.bind(this)} disabled>{CurrLang.endGame}</button>
          )}  
          {/* Message */}
          <div className="messageArea">
            <p>:{game.stage}</p>
          </div>
        </div>

        {/* MainRow */}
        <div className="row" id="mainRow">

          {/* Hand */}
          <div className="column smart">
            <p className="banner"><b>{CurrLang.handArea}</b></p>
            {this.renderHandAreaItems(game, user)}
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

          {/* Table and di areas */}
          <div className="column smart" id="tableColumn">
            { this.renderTableCol(game, user).banner }
            { this.renderTableCol(game, user).content }
            <div className="nextArea">
              <br></br>
              { this.renderNextArea(game, user) }
            </div>
          </div>

          <div className="column" id="dummyColumn2"></div>
        
          {/* Points area */}
          <div className="column smart" id="pointsColumn">
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
