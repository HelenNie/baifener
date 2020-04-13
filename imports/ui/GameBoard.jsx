import React, { Component, componentDidMount } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import MyDrag from './MyDrag.jsx';


import GameHeader from './GameHeader.jsx';
import {Game, GameStatuses, GameStatusitos, DiLength, SuitsMap} from '../api/models/game.js';
import {userDrawCardGame, userOpenCloseDiGame, userCardMigrationGame, userStartGameGame, userPlayCardGame, userTakeBackCardGame, userClearTableGame, userLiangThreeGame, userTakeBackThreeGame, userCollectPointsGame, userThreeFromDiGame, userThreeFromDiTakeDiGame, userEndTurnGame, userSetCardLocGame, userSeePrevTableGame} from '../api/methods/games.js';


export const Langs = {
  CHINESE: {
    baifener: '百分',
    logIn: '登录',
    logOut: '退出',
    enterYourName: '用户名', 
    listOfGames: '你的游戏',
    joinGame: '加入',
    enterGame: '进入',
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
    collectPoints: '拿分',
    seePrevTable: '看上一局',
    handArea: '手',
    diArea: '底',
    pointsArea: '台下分',
    tableArea: '牌桌',
    stage: '阶段',
    zhu: '主',
    currPlayer: '现任玩家',
    gameFinished: '游戏结束',
    statusito: {
      'DRAWING': '摸牌', 
      'DI': '摸底',
      'PLAYING': '作战',
      'WRAPUP': '结束'
    },
    suits: {
      'H':'红桃', 
      'S':'黑桃', 
      'D':'方片', 
      'C':'梅花'
    }
  },
  ENGLISH: {
    baifener: 'Baifener',
    logIn: 'Log in',
    logOut: 'Log out',
    enterYourName: 'Enter your username', 
    listOfGames: 'Your Games',
    joinGame: 'Join',
    enterGame: 'Enter',
    newGame: 'New Game',
    gameNumber: 'Game',
    waiting: 'Waiting',
    back: 'Back',
    drawCard: 'Draw Card',
    openDiForThree: 'Look for Three in Bottom-6',
    openDi: 'Reveal Bottom-6',
    startPlaying: 'Start',
    finishTurn: 'End Turn',
    clearTable: 'Clear Table',
    collectPoints: 'Collect Points',
    seePrevTable: 'See previous round',
    handArea: 'HAND',
    diArea: 'Bottom-6',
    pointsArea: 'Underdog Points',
    tableArea: 'TABLE',
    stage: 'Stage',
    zhu: 'Power Suit',
    currPlayer: 'Current Player',
    gameFinished: 'Game Finished',
    statusito: {
      'DRAWING': 'Drawing', 
      'DI': 'Di',
      'PLAYING': 'Playing',
      'WRAPUP': 'Wrap-up'
    },
    suits: {
      'H':'Hearts', 
      'S':'Spade', 
      'D':'Diamond', 
      'C':'Clover'
    }
  }
}

export const CurrLang = Langs.CHINESE;


export default class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      containerRef: React.createRef(),
      handAreaWidth: '',
      handAreaHeight: ''
    }
  }

  handleBackToGameList() {
    this.props.backToGameListHandler();
  }

  handleStartGame() {
    let game = this.props.game;
    userStartGameGame.call({gameId: game._id});
  }

  handleDrawCard() {
    let game = this.props.game;
    userDrawCardGame.call({gameId: game._id});
  }

  handleOpenCloseDi() {
    let game = this.props.game;
    userOpenCloseDiGame.call({gameId: game._id});
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

  handleCollectPoints() {
    let game = this.props.game;
    userCollectPointsGame.call({gameId: game._id});
  }

  handleSeePrevTable() {
    let game = this.props.game;
    userSeePrevTableGame.call({gameId: game._id});
  }

  renderStatus() {
    let game = this.props.game;

    let currentPlayerIndex = game.getCurrentPlayerIndex();
    let currPlayerStatus = "";
    if (currentPlayerIndex == -1) {
      currPlayerStatus = "-";
    } else {
      currPlayerStatus = game.players[currentPlayerIndex].username;
    }

    let zhuStatus = "";
    if (game.zhu == "") {
      zhuStatus = "-";
    } else {
      zhuStatus = CurrLang.suits[game.zhu];
    }    

    if (game.status === GameStatuses.STARTED) {
      return (
        <div className="ui attached center aligned segment">
          <p><b>{CurrLang.stage}:</b> {CurrLang.statusito[game.statusito]}</p>
          <p><b>{CurrLang.zhu}:</b> {zhuStatus}</p>
          <p><b>{CurrLang.currPlayer}:</b> {currPlayerStatus}</p>
        </div>
        )
    } else if (game.status === GameStatuses.FINISHED) {
      return (
        <div className="ui attached center aligned segment">
          <p>{CurrLang.gameFinished}!</p>
        </div>
        )
    } else {
      return (
        <div className="ui attached center aligned segment">
        </div>
        )
    }
  }

  componentDidMount() {
    this.handleResize(this, '');

    var elem = this;
    window.addEventListener('resize', this.handleResize.bind(this, elem));
  }

  handleResize(elem, e) {
    var parentPadding = 25;
    var widthShare = 1;
    var heightShare = 0.7;

    var parent = elem.state.containerRef.current;
    if (parent) {
      var parentWidth = parent.offsetWidth;
      var parentHeight = parent.offsetHeight;
      elem.state.handAreaWidth = Math.floor( ( ( parentWidth - parentPadding ) * widthShare ) / 10 ) * 10;
      elem.state.handAreaHeight = Math.floor(( ( parentHeight - parentPadding ) * heightShare ) / 10 ) * 10;
    }    
  }

  render() {
    let game = this.props.game;
    let user = this.props.user;
    let userIsCurrPlayer = false;
    if (game.userIdToIndex(user._id) == game.getCurrentPlayerIndex()) {
      userIsCurrPlayer = true;
    }

    let userCards = game.hands[user.username];
    let diCards = game.di; 
    let pointCards = game.taiXiaPoints;
    let tableCards = game.currTableCards;
    let cardLocations = game.cardLocations;


    return (
      <div className="ui container">
        <GameHeader user={user}/>

        {/* Buttons */}
        <div className="buttons">
          <button className="ui button blue" onClick={this.handleBackToGameList.bind(this)}>{CurrLang.back}</button>

          {/* DRAWING buttons */}
          {(game.statusito == GameStatusitos.DRAWING && (userIsCurrPlayer || game.getCurrentPlayerIndex() == -1))? (
            <button className="ui button blue" onClick={this.handleDrawCard.bind(this)}>{CurrLang.drawCard}</button>
          ):null}

          {/* DI buttons */}
          {(game.statusito == GameStatusitos.DI) ? (
            (!game.shownThree && !game.threeFromDiDone)? (
              <button className="ui button blue" onClick={this.handleThreeFromDi.bind(this)}>{CurrLang.openDiForThree}</button>
            ): ((game.diOpener == user.username || !game.diOpened) && !game.diOpen)? (
              <button className="ui button blue" onClick={this.handleOpenCloseDi.bind(this)}>{CurrLang.openDi}</button>
            ): (game.diOpener == user.username && game.diOpened)? (
              <button className="ui button blue" onClick={this.handleStartGame.bind(this)}>{CurrLang.startPlaying}</button>
            ):null
          ):null}

          {/* PLAYING or WRAPUP buttons */}
          {(game.statusito == GameStatusitos.PLAYING && userIsCurrPlayer)? (
            <button className="ui button blue" onClick={this.handleEndTurn.bind(this)}>{CurrLang.finishTurn}</button>
          ):null}

          {(game.collectPointsActive == true && game.underdogs.includes(user.username))? (
              <button className="ui button blue" onClick={this.handleCollectPoints.bind(this)}>{CurrLang.collectPoints}</button>
          ):null}

          {(game.clearTableActive == true)? (
              <button className="ui button blue" onClick={this.handleClearTable.bind(this)}>{CurrLang.clearTable}</button>
          ):null}

          {(game.seePrevTableActive == true)? (
              <button className="ui button blue" onClick={this.handleSeePrevTable.bind(this)}>{CurrLang.seePrevTable}</button>
          ):null}
        </div>

        {/* Status banner */}
        {this.renderStatus()}

        {/* Hand */}
        <div className="row">
          <div className="column" ref={this.state.containerRef}>
            <p className="banner"><b>{CurrLang.handArea}</b></p>
            <div className="handArea" style={{width: this.state.handAreaWidth+'px', height: this.state.handAreaHeight+'px'}}>
                {userCards.map((card, index) => (
                  <MyDrag
                    key={card}
                    card={card}
                    user={user}
                    game={game}
                    location={cardLocations[card]}
                  />
                ))}
            </div>

            {/* Di and points */}
            {(game.diOpen && game.diOpener == user.username )? (
              <div className="diArea">
                <p className="banner"><b>{CurrLang.diArea}</b></p>
                  {diCards.map((diCard, index) => (
                    <img src={"/images/" + diCard + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, diCard)} draggable="false" key={diCard}></img>
                  ))}
              </div>
            ):null}
              
            {(pointCards.length > 0)? (
              <div className="diArea">
                <p className="banner"><b>{CurrLang.pointsArea}</b></p>
                  {pointCards.map((pointCard, index) => (
                    <img src={"/images/" + pointCard + ".png"} className="handle" draggable="false" key={pointCard}></img>
                  ))}
              </div>
            ):null}
          
            {(game.statusito == GameStatusitos.WRAPUP)? (
            <div className="diArea">
              <p className="banner"><b>{CurrLang.diArea}</b></p>
                {diCards.map((diCard, index) => (
                  <img src={"/images/" + diCard + ".png"} className="handle" draggable="false" key={diCard}></img>
                ))}
            </div>
            ):null}
          </div>

          {/* Table */}
          <div className="column">
            <p className="banner"><b>{CurrLang.tableArea}</b></p>
            {(game.players).map((player, outerIndex) => (
              <div className="tableArea" id={player.username} key={outerIndex}>
                <p className="tableBanner"><b>{player.username}</b></p>
                {Object.keys(tableCards).map((card, index) => (
                  (tableCards[card] == player.username)? (
                    (tableCards[card] == user.username)? (
                      <img src={"/images/" + card + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, card)} draggable="false" key={card}></img>
                    ): (
                      <img src={"/images/" + card + ".png"} className="handle" draggable="false" key={card}></img>
                    )
                  ):null
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
