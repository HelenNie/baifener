import React, { Component, componentDidMount } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import ReactModal from 'react-modal';
import MyDrag from './MyDrag.jsx';


import GameHeader from './GameHeader.jsx';
import {Game, GameStatuses, GameStatusitos, DiLength, SuitsMap, RanksMap, NumPlayers, Partners} from '../api/models/game.js';
import {userDrawCardGame, userOpenDiGame, userCardMigrationGame, userStartGameGame, userPlayCardGame, userTakeBackCardGame, userClearTableGame, userLiangThreeGame, userTakeBackThreeGame, userCollectPointsGame, userThreeFromDiGame, userThreeFromDiTakeDiGame, userEndTurnGame, userSeePrevTableGame, userEndGameGame, userPointsOnTableGame, userSetFirstDrawerGame, userConfirmOpenDiGame, userCancelOpenDiGame} from '../api/methods/games.js';


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
    collectPoints: '台下拿分',
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
    collectPoints: 'Collect Points',
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

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // Originally used to dynamically resize handArea and round dimensions to multiple of draggable 'grid' to fit an even number of cards into width and height of handArea, but not using draggable 'grid' right now
  //     // columnRef: React.createRef(), // add ref={this.state.columnRef} to handArea column
  //     // handAreaWidth: '', // add style={{width: this.state.handAreaWidth+'px', height: this.state.handAreaHeight+'px'}} to handArea
  //     // handAreaHeight: ''
  //   }
  // }

  handleBackToGameList() {
    this.props.backToGameListHandler();
  }

  handleStartGame() {
    let game = this.props.game;
    userStartGameGame.call({gameId: game._id});
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

  handleCollectPoints() {
    let game = this.props.game;
    userCollectPointsGame.call({gameId: game._id});
  }

  handleSeePrevTable() {
    let game = this.props.game;
    userSeePrevTableGame.call({gameId: game._id});
  }

  handleEndGame() {
    let game = this.props.game;
    userEndGameGame.call({gameId: game._id});
  }

  // Originally used to dynamically resize handArea and round dimensions to multiple of draggable 'grid' to fit an even number of cards into width and height of handArea, but not using draggable 'grid' right now
  // handleResize(elem, e) {
  //   var parentPadding = 10; //px //parent = .column
  //   var widthShare = 1; //100%
  //   var heightShare = 0.7; //70%
  //   var gridSize = 10; //px //not used currently

  //   var parent = elem.state.columnRef.current;
  //   if (parent) {
  //     var parentWidth = parent.offsetWidth;
  //     var parentHeight = parent.offsetHeight;
  //     elem.setState({
  //       handAreaWidth: Math.floor( ( ( parentWidth - 2 * parentPadding ) * widthShare ) / gridSize ) * gridSize,
  //       handAreaHeight: Math.floor(( ( parentHeight - 2 * parentPadding ) * heightShare ) / gridSize ) * gridSize
  //     });
  //   }    
  // }

  // componentDidMount() {
  //   this.handleResize(this, '');

  //   var elem = this;
  //   window.addEventListener('resize', this.handleResize.bind(this, elem));
  // }

  renderStatus() {
    let game = this.props.game;

    let currentPlayerIndex = game.getCurrentPlayerIndex();
    let currPlayerStatus = "";
    if (currentPlayerIndex == -1 || currentPlayerIndex == null) {
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

  render() {
    let game = this.props.game;
    let user = this.props.user;
    let userIsCurrPlayer = false;
    let handAreaStyle = {};
    if (game.userIdToIndex(user._id) == game.getCurrentPlayerIndex()) {
      userIsCurrPlayer = true;
    }

    let userCards = game.hands[user.username];
    let diCards = game.di; 
    let pointCards = game.taiXiaPoints;
    let tableCards = game.currTableCards;
    let threeCard = '';
    if (game.shownThree) {
      threeCard = RanksMap['three']+game.zhu;
    }

    if (userIsCurrPlayer && game.statusito != GameStatusitos.DI) {
      userIsCurrPlayer = true;
      handAreaStyle['backgroundColor'] = "gold";
    }

    //set up players in order starting with diopener, and marking relevant roles
    let tablePlayers = {};
    let playerName = '';
    let playerStyle = {};
    let diOpenerIdx = 0;
    let tableOrder = [0, 1, 3, 2];

    if (game.diopener) {
      diOpenerIdx = game.usernameToIndex(game.diOpener);
    }

    for (var i = 0; i < tableOrder.length; i++) {
      playerName = game.players[(diOpenerIdx + tableOrder[i]) % NumPlayers].username;
      playerStyle = {};
      if (playerName == user.username) {
        playerStyle['backgroundColor'] = '#55876c';
      } else if (playerName == Partners[user.username]) {
        playerStyle['backgroundColor'] = '#8cb7a0';
      } else {
        playerStyle['backgroundColor'] = 'lightgray';
      }
      if (game.usernameToIndex(playerName) == game.getCurrentPlayerIndex()) {
        playerStyle['border'] = '4px solid gold';
      } else {
        playerStyle['border'] = '0px solid black';
      }
      tablePlayers[playerName] = playerStyle;
    }

    return (
      <div className="ui container">
        <GameHeader user={user}/>

        <ReactModal
          isOpen = {game.modalOpen.drawFirst}
          className = "modal"
          overlayClassName = "overlay"
          ariaHideApp={false}>
          <br></br>
          <p className="modalBanner">Let's get started!</p>
          <br></br>
          <button className="ui green button" onClick={this.handleSetFirstDrawer.bind(this)}>Click here to draw first</button>
        </ReactModal>

        <ReactModal
          isOpen = {game.modalOpen.openDi && game.modalOpenDiUser == user.username}
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

          {(game.statusito != GameStatusitos.FINISHED)? (
              <button className="ui button red" onClick={this.handleEndGame.bind(this)} style={{float: 'right'}}>{CurrLang.endGame}</button>
          ):null}

        </div>

        {/* Status banner */}
        {this.renderStatus()}

        {/* Hand */}
        <div className="row">
          <div className="column">
            <p className="banner"><b>{CurrLang.handArea}</b></p>

            {(game.statusito == GameStatusitos.DRAWING) ? (
              (userIsCurrPlayer) ? (
                <button className="ui button blue corner" onClick={this.handleDrawCard.bind(this)}>{CurrLang.drawCard}</button>
              ): (
                <button className="ui button blue corner" onClick={this.handleDrawCard.bind(this)} disabled>{CurrLang.drawCard}</button>
              )
            ): (game.statusito == GameStatusitos.PLAYING) ? (
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

          

          {/* Di to find three */}
          {(game.statusito == GameStatusitos.DI && game.threeFromDiCount > 0 && game.diOpener == '') ? (
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
                <br></br>
                <button className="ui button blue" onClick={this.handleOpenDi.bind(this)}>{CurrLang.openDi}</button>
              </div>
            </div>

          //Opened di
          ): (game.statusito == GameStatusitos.DI && game.diOpener == user.username) ? (
            <div className="column" id="tableColumn">
              <p className="banner"><b>{CurrLang.diArea}</b></p>
              <div className="diArea">
                {diCards.map((diCard, index) => (
                  <img src={"/images/" + diCard + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, diCard)} draggable="false" key={diCard}></img>
                ))}
              </div>
              <div className="nextArea">
                <br></br>
                <br></br>
                <button className="ui button red" onClick={this.handleStartGame.bind(this)}>{CurrLang.startPlaying}</button>
              </div>
            </div>

          //Di during WRAPUP
          ): (game.statusito == GameStatusitos.WRAPUP || game.statusito == GameStatusitos.FINISHED) ? (
            <div className="column" id="tableColumn">
              <p className="banner"><b>{CurrLang.diArea}</b></p>
              <div className="diAreaWrapup">
                  {diCards.map((diCard, index) => (
                    <img src={"/images/" + diCard + ".png"} className="handle" draggable="false" key={diCard}></img>
                  ))}
              </div>
              <div className="nextArea">
                <br></br>
                <br></br>
                {(game.collectPointsActive == true && game.underdogs.includes(user.username))? (
                  <button className="ui button blue" onClick={this.handleCollectPoints.bind(this)}>{CurrLang.collectPoints}</button>
                ):null}
              </div>
            </div>
          ): (

            //Played cards
            <div className="column" id="tableColumn">
              <p className="banner"><b>{CurrLang.tableArea}</b></p>

              {(game.statusito == GameStatusitos.PLAYING) ? (
                (game.seePrevTableActive == true)? (
                  <button className="ui button blue corner" onClick={this.handleSeePrevTable.bind(this)}>{CurrLang.seePrevTable}</button>
                ): (
                  <button className="ui button blue corner" onClick={this.handleSeePrevTable.bind(this)} disabled>{CurrLang.seePrevTable}</button>
                )
              ): null}

              <div className="rowTable">

                {Object.keys(tablePlayers).map((player, index) => (
                  <div className="tableArea" key={index} style={tablePlayers[player]}>
                    <p className="tableBanner"><b>{player}</b></p>
                    {Object.keys(tableCards).map((card, index) => (
                      (tableCards[card] == player)? (
                        (tableCards[card] == user.username)? (
                          <img src={"/images/" + card + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, card)} draggable="false" key={card}></img>
                        ): (
                          <img src={"/images/" + card + ".png"} className="handle" draggable="false" key={card}></img>
                        )
                      ):null
                    ))}
                  </div>
                ))}  

                {(game.seeingPrevTable) ? (
                    <div className="rowTableShadow"></div>
                ): null}

              </div>
              <div className="nextArea">
                <br></br>
                <br></br>
                {(game.statusito == GameStatusitos.DI && !game.shownThree)? (
                  <button className="ui button blue" onClick={this.handleThreeFromDi.bind(this)}>{CurrLang.openDiForThree}&rarr;</button>
                ): (game.statusito == GameStatusitos.PLAYING && game.collectPointsActive && game.underdogs.includes(user.username))? (
                  <button className="ui button blue" onClick={this.handleCollectPoints.bind(this)}>{CurrLang.collectPoints}</button>
                ): (game.statusito == GameStatusitos.PLAYING && game.clearTableActive)? (
                  <button className="ui button blue" onClick={this.handleClearTable.bind(this)}>{CurrLang.clearTable}</button>
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
