import React, { Component, componentDidMount } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import ReactModal from 'react-modal';
import MyDrag from './MyDrag.jsx';


import GameHeader from './GameHeader.jsx';
import {Game, GameStatuses, GameStages, ModalStates, ThreeStates, TableStates, Roles, DiLength, SuitsMap, RanksMap, NumPlayers} from '../api/models/game.js';
import {userDrawCardGame, userOpenDiGame, userCardMigrationGame, userStartGameGame, userClearTableGame, userThreeFromDiGame, userEndTurnGame, userSeePrevTableGame, userEndGameGame, userSetFirstDrawerGame, userConfirmOpenDiGame, userCancelOpenDiGame, userSetRoleGame, userClearPrevTableGame} from '../api/methods/games.js';

export const TableOrder = [0, 1, 3, 2];

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
    gameHeader: {
      baifener: '百分儿',
      logOut: '退出'
    },
    loginForm: {
      logIn: '登录',
      enterYourName: '用户名'
    },
    gameList: {
      listOfGames: '游戏单',
      joinGame: '加入',
      enterGame: '进入',
      leaveGame: '离开',
      newGame: '新游戏',
      gameNumber: '游戏',
      waiting: '等待中'
    },
    gameBoard: {
      buttons: {
        back: '回去',
        endGame: '结束游戏',
        drawCard: '摸牌',
        finishTurn: '结束出牌',
        clearTable: '清空',
        seePrevTable: '看上一局',
        clearPrevTable: '清空上一局'
      },
      banners: {
        handArea: '我的牌',
        diArea: '底',
        pointsArea: '台下分',
        tableArea: '牌桌',
      },
      modals: {
        selectTeam: "请选择你的队!",
        setRoleAgainText: "看样子你和你的朋友还没有分好队...请再试一次!",
        setRoleWaiting: "在等其他玩家确认...",
        drawFirst: "谁先摸?",
        drawFirstButton: "点击先摸",
        drawFirstWaiting: "等对手先摸...",
        openKitty: "确定要揭底?",
        openKittyYes: "确定",
        openKittyNo: "取消"
      },
      handArea: {
        role: "队",
        card: "牌"
      },
      nextArea: {
        openDiForThree: '揭底找三',
        openDi: '揭底',
        startPlaying: '开始',
        wonRoundButton: "你的牌最大吗",
        findThreeWaiting: "等对手揭底找三...",
        openKittyWaiting: "等对手揭底...",
        startGameWaiting: "等游戏开始..."
      },
      roles: {
        DEFENDER: "台上",
        ATTACKER: "台下",
        TBD: "未知"
      }
    }    
  },
  ENGLISH: {
    gameHeader: {
      baifener: 'Baifener',
      logOut: 'Log Out'
    },
    loginForm: {
      logIn: 'Log In',
      enterYourName: 'Enter your username'
    },
    gameList: {
      listOfGames: 'Your Games',
      joinGame: 'Join',
      enterGame: 'Enter',
      leaveGame: 'Leave',
      newGame: 'New Game',
      gameNumber: 'Game',
      waiting: 'Waiting'
    },
    gameBoard: {
      buttons: {
        back: 'Back',
        endGame: 'End Game',
        drawCard: 'Draw Card',
        finishTurn: 'End Turn',
        clearTable: 'Clear Table',
        seePrevTable: 'See Previous Plays',
        clearPrevTable: 'Clear Previous Plays'
      },
      banners: {
        handArea: 'My Hand',
        diArea: 'Kitty',
        pointsArea: 'Attacker Team Points',
        tableArea: 'Cards Table',
      },
      modals: {
        selectTeam: "Select your team!",
        setRoleAgainText: "Looks like you and your friends do not agree on your roles...Let's try this again!",
        setRoleWaiting: "Waiting for other players to confirm...",
        drawFirst: "Who will draw first?",
        drawFirstButton: "Click here to draw first",
        drawFirstWaiting: "Waiting for opponents to draw first...",
        openKitty: "Are you sure you want to open the kitty?",
        openKittyYes: "Meow",
        openKittyNo: "Nope"
      },
      handArea: {
        role: "Role",
        card: "Card"
      },
      nextArea: {
        openDiForThree: 'Look for Three in Kitty',
        openDi: 'Open Kitty',
        startPlaying: 'Start',
        wonRoundButton: "Click here if you won this round",
        findThreeWaiting: "Waiting for opponents to look for trump suit in kitty...",
        openKittyWaiting: "Waiting for opponents to open kitty...",
        startGameWaiting: "Waiting for game to start..."
      },
      roles: {
        DEFENDER: "Defender",
        ATTACKER: "Attacker",
        TBD: "TBD"
      }
    }
  }
}

export const CurrLang = Langs.CHINESE;


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
        tablePlayers[playerName] = Object.assign({}, CssValues.tableArea.user);
      } else if (game.arePartners(playerName, user.username)) {
        tablePlayers[playerName] = Object.assign({}, CssValues.tableArea.partner);
      } else {
        tablePlayers[playerName] = Object.assign({}, CssValues.tableArea.opponents);
      }
    }

    if (game.showCurrPlayerBorder(user)) {
      let currPlayer = game.players[game.getCurrentPlayerIndex()];
      let tablePlayer = 
      tablePlayers[currPlayer.username].border = CssValues.tableArea.currPlayer.border;
    }

    return tablePlayers;
  }

  renderHandAreaStyle(game, user) {
    let handAreaStyle = {};
    if (user.username == game.getCurrPlayer()) {
      handAreaStyle = Object.assign({}, CssValues.handArea);
    }
    return handAreaStyle;
  }

  renderModal(game, user, modal) {
    var banner;
    var content;
    var condition = true;

    switch (modal) {
      case ModalStates.SET_ROLE:
        banner = CurrLang.gameBoard.modals.selectTeam;
        content = user.username in game.playerRoles ? 
          <p className="modalWaitText">{CurrLang.gameBoard.modals.setRoleWaiting}</p> :
          <div className="modalContent">
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.DEFENDER)}>{CurrLang.gameBoard.roles[Roles.DEFENDER]}</button>
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.ATTACKER)}>{CurrLang.gameBoard.roles[Roles.ATTACKER]}</button>
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.TBD)}>{CurrLang.gameBoard.roles[Roles.TBD]}</button>
          </div>;
        break;
      case ModalStates.SET_ROLE_AGAIN:
        banner = CurrLang.gameBoard.modals.selectTeam;
        content = user.username in game.playerRoles ? 
          <p className="modalWaitText">{CurrLang.gameBoard.modals.setRoleWaiting}</p> :
          <div className="modalContent">
            <p>{CurrLang.gameBoard.modals.setRoleAgainText}</p>
            <br></br>
            <br></br>
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.DEFENDER)}>{CurrLang.gameBoard.roles[Roles.DEFENDER]}</button>
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.ATTACKER)}>{CurrLang.gameBoard.roles[Roles.ATTACKER]}</button>
            <button className="ui green button" onClick={this.handleSetRole.bind(this, Roles.TBD)}>{CurrLang.gameBoard.roles[Roles.TBD]}</button>
          </div>;
        break;
      case ModalStates.SET_DRAW_FIRST:
        banner = CurrLang.gameBoard.modals.drawFirst;
        content = game.playerRoles[user.username] == Roles.DEFENDER ? 
          <p className="modalWaitText">{CurrLang.gameBoard.modals.drawFirstWaiting}</p> :
          <div className="modalContent">
            <button className="ui green button" onClick={this.handleSetFirstDrawer.bind(this)}>{CurrLang.gameBoard.modals.drawFirstButton}</button>
          </div>;
        break;
      default:
        banner = CurrLang.gameBoard.modals.openKitty;
        content = 
          <div className="modalContent">
            <button className="ui green button" onClick={this.handleConfirmOpenDi.bind(this)}>{CurrLang.gameBoard.modals.openKittyYes}</button>
            <button className="ui black button" onClick={this.handleCancelOpenDi.bind(this)}>{CurrLang.gameBoard.modals.openKittyNo}</button>
          </div>;
        condition = user.username == game.diOpener;
        break;
    }

    return (
      <ReactModal
          isOpen = { game.modalState == modal && condition}
          className = "modal"
          overlayClassName = "modalOverlay"
          ariaHideApp={false}>
          <p className="modalBanner">{ banner }</p>
          <br></br>
          <br></br>
          <div className="modalDiv"> 
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
      items.push(<p id="playerRole" key="1">{CurrLang.gameBoard.handArea.role}: {CurrLang.gameBoard.roles[game.playerRoles[user.username]]}</p>);
    }
    if (game.stage == GameStages.DRAW) {
      item1 = <button className="ui button blue corner" key="2" onClick={this.handleDrawCard.bind(this)}>{CurrLang.gameBoard.buttons.drawCard}</button>;
      item2 = <button className="ui button blue corner" key="2" onClick={this.handleDrawCard.bind(this)} disabled>{CurrLang.gameBoard.buttons.drawCard}</button>;
      items.push(this.renderByRole(game, user.username, game.getCurrPlayer(), item1, item2));
    }
    if (game.stage == GameStages.PLAY) {  
      item1 = <button className="ui button blue corner" key="3" onClick={this.handleEndTurn.bind(this)}>{CurrLang.gameBoard.buttons.finishTurn}</button>;
      item2 = <button className="ui button blue corner" key="3" onClick={this.handleEndTurn.bind(this)} disabled>{CurrLang.gameBoard.buttons.finishTurn}</button>;
      items.push(this.renderByRole(game, user.username, game.getCurrPlayer(), item1, item2));
    }

    return items;
  }

  renderTableAreaItems(game, user) {
    var items = [];

    if (game.threeState != ThreeStates.NOT_SHOWN) {
      items.push(<img src={"/images/" + SuitsMap[game.zhu] + ".png"} id="zhuImage" key="1"></img>);
    }

    if (game.tableState == TableStates.SEE_PREV_TABLE) {
      items.push(<button className="ui button blue corner" key="2" onClick={this.handleSeePrevTable.bind(this)}>{CurrLang.gameBoard.buttons.seePrevTable}</button>);
    } else if (game.tableState == TableStates.CLEAR_PREV_TABLE) {
      items.push(<button className="ui button blue corner" key="2" onClick={this.handleClearPrevTable.bind(this)}>{CurrLang.gameBoard.buttons.clearPrevTable}</button>);
    } else {
      items.push(<button className="ui button blue corner" key="2" onClick={this.handleSeePrevTable.bind(this)} disabled>{CurrLang.gameBoard.buttons.seePrevTable}</button>);
    }

    return items;
  }

  renderTableCol(game, user) {
    let diCards = game.di; 
    let tableCards = game.currTableCards;
    let tablePlayers = this.renderTablePlayersStyle(game, user);

    var bannerText;
    var content;

    if (game.stage == GameStages.FIND_THREE_IN_DI) {
      // Di to find three view
      bannerText = CurrLang.gameBoard.banners.diArea;
      content = 
        <div className="area" id="diArea">
          {diCards.slice(0, game.threeFromDiCount).map((diCard, index) => (
            <img src={"/images/" + diCard + ".png"} className="handle" draggable="false" key={diCard}></img>
          ))}
        </div>
    } else if (game.stage == GameStages.DI && game.diOpener == user.username) {
      //Open di view
      bannerText = CurrLang.gameBoard.banners.diArea;
      content = 
        <div className="area" id="diArea">
          {diCards.map((diCard, index) => (
            <img src={"/images/" + diCard + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, diCard)} draggable="false" key={diCard}></img>
          ))}
        </div>
    } else if ((game.stage == GameStages.WRAP_UP) || (game.stage == GameStages.FINISHED)) {
      //Di during WRAPUP and FINISHED view
      bannerText = CurrLang.gameBoard.banners.diArea;
      content = 
        <div className="area" id="diArea">
            {diCards.map((diCard, index) => (
              <img src={"/images/" + diCard + ".png"} className="handle" draggable="false" key={diCard}></img>
            ))}
        </div>
    } else {
      //Playing view
      bannerText = CurrLang.gameBoard.banners.tableArea;
      content = 
        <div id="tableArea">
          {this.renderTableAreaItems(game, user)}
          {Object.keys(tablePlayers).map((player, index) => (
            <div className="playerArea" key={index} style={tablePlayers[player]}>
              <p className="tableBanner"><b>{player}</b></p>
              {Object.keys(tableCards).map((card, index) => (
                (tableCards[card] == player)? (
                  <img src={"/images/" + card + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, card)} draggable="false" key={card}></img>
                ):null
              ))}
            </div>
          ))}  

          {(game.disableTableArea(user)) ? (
            <div id="tableAreaShadow"></div>
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
      item1 = <button className="ui button orange" key="1" onClick={this.handleThreeFromDi.bind(this)}>{CurrLang.gameBoard.nextArea.openDiForThree}&rarr;</button>;
      item2 = <p className="nextAreaWaitText" key="1">{CurrLang.gameBoard.nextArea.findThreeWaiting}</p>;
      items.push(this.renderByRole(game, game.playerRoles[user.username], Roles.DEFENDER, item1, item2));
    } else if ((game.stage == GameStages.DONE_DRAWING && game.threeState != ThreeStates.NOT_SHOWN) || (game.stage == GameStages.FIND_THREE_IN_DI)) {
      //Open di button
      item1 = <button className="ui button orange" key="2" onClick={this.handleOpenDi.bind(this)}>{CurrLang.gameBoard.nextArea.openDi}</button>;
      item2 = <p className="nextAreaWaitText" key="2">{CurrLang.gameBoard.nextArea.openKittyWaiting}</p>;
      items.push(this.renderByRole(game, game.playerRoles[user.username], Roles.DEFENDER, item1, item2));
    } else if (game.stage == GameStages.DI) {
      //Start playing button
      item1 = <button className="ui button orange" key="3" onClick={this.handleStartGame.bind(this)}>{CurrLang.gameBoard.nextArea.startPlaying}</button>;
      item2 = <p className="nextAreaWaitText" key="3">{CurrLang.gameBoard.nextArea.startGameWaiting}</p>;
      items.push(this.renderByRole(game, user.username, game.diOpener, item1, item2));
    } else if (game.tableState == TableStates.CLEAR_TABLE) {
      //Won round button
      items.push(<button className="ui button orange" key="4" onClick={this.handleClearTable.bind(this)}>{CurrLang.gameBoard.nextArea.wonRoundButton}</button>);
    } else {
      //Default
      items.push(<p key="5">Placeholder</p>);
    }

    return items;
  }

  renderByRole(game, userAttr, role, item1, item2) {
    if (userAttr == role) {
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
          <button className="ui button black topButton" onClick={this.handleBackToGameList.bind(this)}>{CurrLang.gameBoard.buttons.back}</button>
          {(game.stage != GameStages.FINISHED)? (
            <button className="ui button red topButton" onClick={this.handleEndGame.bind(this)}>{CurrLang.gameBoard.buttons.endGame}</button>
          ): (
            <button className="ui button red topButton" onClick={this.handleEndGame.bind(this)} disabled>{CurrLang.gameBoard.buttons.endGame}</button>
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
            <p className="banner"><b>{CurrLang.gameBoard.banners.handArea}</b></p>
            {this.renderHandAreaItems(game, user)}
            <div className="area" id="handArea" style={handAreaStyle}>
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
                <div id="landingArea">
                  <br></br>
                  <p id="landingText">{CurrLang.gameBoard.handArea.card}</p>
                </div>
            </div>
          </div>

          <div className="column dummy" id="dummyColumn1"></div>

          {/* Table and di areas */}
          <div className="column smart" id="tableColumn">
            { this.renderTableCol(game, user).banner }
            { this.renderTableCol(game, user).content }
            <div id="nextArea">
              <br></br>
              { this.renderNextArea(game, user) }
            </div>
          </div>

          <div className="column dummy" id="dummyColumn2"></div>
        
          {/* Points area */}
          <div className="column smart" id="pointsColumn">
            <p className="banner"><b>{CurrLang.gameBoard.banners.pointsArea}</b></p>
            <div className="area" id="pointsArea">
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
