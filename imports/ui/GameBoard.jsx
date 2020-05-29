import React, { Component, componentDidMount } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import ReactModal from 'react-modal';
import { CSSTransition } from 'react-transition-group'

import MyDrag from './MyDrag.jsx';
import GameHeader from './GameHeader.jsx';
import {Langs} from './Languages.jsx';

import {Game, GameStatuses, GameStages, ModalStates, ErrorStates, UndoParams, UndoStates, UndoRoles, ThreeStates, TableStates, Roles, DiLength, SuitsMap, RanksMap, NumPlayers, CardLocMax, CardSize, CardSlotMargin, CardSlotSize, DeckComplete} from '../api/models/game.js';
import {userDrawCardGame, userOpenDiGame, userCardMigrationGame, userStartGameGame, userClearTableGame, userThreeFromDiGame, userEndTurnGame, userSeePrevTableGame, userEndGameGame, userSetFirstDrawerGame, userConfirmOpenDiGame, userCancelOpenDiGame, userSetRoleGame, userClearPrevTableGame, userErrorAwayGame, userModalAwayGame, userModalShowGame, userUndoShowGame, userUndoAwayGame, userUndoGame, userRestartGameGame, userWrapUpGame, userDelayedModalAlreadyGame} from '../api/methods/games.js';

export const TableOrder = [0, 1, 3, 2];

export const Anim = {
  fadeSlideInOut: {
    class: 'fadeSlideInOut',
    timeout: 1000,
    delay: 1000
  },
  slideIn: {
    class: 'slideIn',
    timeout: 500,
    delay: 1000
  },
  slideInQuick: {
    class: 'slideInQuick',
    timeout: 500,
    delay: 250
  },
  fadeInOut: {
    class: 'fadeInOut',
    timeout: 250
  },
  fadeInOutDelayOut: {
    class: 'fadeInOutDelayOut',
    timeout: 250,
    delay: 1500
  },
  fadeInOutDelayIn: {
    class: 'fadeInOutDelayIn',
    timeout: 250,
    delay: 1500
  },
  fadeInOutExtraDelayOut: {
    class: 'fadeInOutExtraDelayOut',
    timeout: 250,
    delay: 2000
  },
  fadeInOutExtra2DelayOut: {
    class: 'fadeInOutExtra2DelayOut',
    timeout: 250,
    delay: 2500
  },
  fadeInOutExtra3DelayOut: {
    class: 'fadeInOutExtra3DelayOut',
    timeout: 250,
    delay: 3000
  },
  fadeInOutExtra3DelayIn: {
    class: 'fadeInOutExtra3DelayIn',
    timeout: 250,
    delay: 3000
  },
  fadeInOut65: {
    class: 'fadeInOut65',
    timeout: 250,
  },
  fadeInOut65DelayIn: {
    class: 'fadeInOut65DelayIn',
    timeout: 250,
    delay: 1500
  }
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
    backgroundColor: '#ffe766'
  }
}

export default class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.overlayRef = React.createRef();
    this.state = {
      playerAreaID: ''
    };
  }

  playSound(sound) {
    var audio = new Audio("/sounds/" + sound + ".wav");
    audio.play();
  }

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
    this.playSound('startGameGong');
    let game = this.props.game;
    userSetFirstDrawerGame.call({gameId: game._id});
  }

  handleDrawCard() {
    this.playSound('drawCard');
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
    this.setState({
      playerAreaID: ''
    });
    let game = this.props.game;
    userEndTurnGame.call({gameId: game._id});
  }

  handleClearTable() {
    this.setState({
      playerAreaID: 'delayBorderTransition'
    });
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

  handleModalShow(modal) {
    let game = this.props.game;
    userModalShowGame.call({gameId: game._id, modal: modal});
  }

  handleModalAway() {
    let game = this.props.game;
    userModalAwayGame.call({gameId: game._id});
  }

  handleDelayedModalAlready() {
    let game = this.props.game;
    userDelayedModalAlreadyGame.call({gameId: game._id});
  }

  handleErrorAway() {
    let game = this.props.game;
    userErrorAwayGame.call({gameId: game._id});
  }

  handleUndoShow(modal) {
    let game = this.props.game;
    userUndoShowGame.call({gameId: game._id});
  }

  handleUndoAway() {
    let game = this.props.game;
    userUndoAwayGame.call({gameId: game._id});
  }

  handleUndo() {
    this.setState({
      playerAreaID: ''
    });
    let game = this.props.game;
    userUndoGame.call({gameId: game._id});
  }

  handleWrapUp() {
    let game = this.props.game;
    userWrapUpGame.call({gameId: game._id});
  }

  handleRestartGame() {
    let game = this.props.game;
    userRestartGameGame.call({gameId: game._id});
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
      tablePlayers[game.getCurrPlayer()].border = CssValues.tableArea.currPlayer.border;
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

  renderHandAreaLines(game, user) {
    var items = [];
    var margin = 12;
    var firstTop = CardSize.y + margin;
    var top;
    for (var i = 0; i < CardLocMax.y; i++) {
      top = firstTop + CardSlotSize.y * i;
      items.push(<hr className='handAreaLine' key={i} style={{top: top + 'px'}}/>);
    }
    return items;
  }

  renderModal(game, user) {
    var banner;
    var content;

    switch (game.modalByPlayer[user.username]) {
      case ModalStates.SET_ROLE:
        banner = Langs[this.props.currLang].gameBoard.modals.selectTeam;
        content = 
          <div className="modalContent">
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.DEFENDER)}>{Langs[this.props.currLang].gameBoard.roles[Roles.DEFENDER]}</button>
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.ATTACKER)}>{Langs[this.props.currLang].gameBoard.roles[Roles.ATTACKER]}</button>
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.TBD)}>{Langs[this.props.currLang].gameBoard.roles[Roles.TBD]}</button>
          </div>;
        break;
      case ModalStates.SET_ROLE_WAITING:
        banner = Langs[this.props.currLang].gameBoard.modals.selectTeam;
        content =
          <div className="modalContent">
            <p className="modalWaitText">{Langs[this.props.currLang].gameBoard.modals.setRoleWaiting}</p>
          </div>;
        break;
      case ModalStates.SET_ROLE_AGAIN:
        banner = Langs[this.props.currLang].gameBoard.modals.selectTeam;
        content = 
          <div className="modalContent">
            <p>{Langs[this.props.currLang].gameBoard.modals.setRoleAgainText}</p>
            <br></br>
            <br></br>
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.DEFENDER)}>{Langs[this.props.currLang].gameBoard.roles[Roles.DEFENDER]}</button>
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.ATTACKER)}>{Langs[this.props.currLang].gameBoard.roles[Roles.ATTACKER]}</button>
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.TBD)}>{Langs[this.props.currLang].gameBoard.roles[Roles.TBD]}</button>
          </div>;
        break;
      case ModalStates.SET_ROLE_AGAIN_WAITING:
        banner = Langs[this.props.currLang].gameBoard.modals.selectTeam;
        content = 
          <div className="modalContent">
            <p className="modalWaitText">{Langs[this.props.currLang].gameBoard.modals.setRoleWaiting}</p> 
          </div>;
        break;
      case ModalStates.SET_DRAW_FIRST_DEFENDER:
        banner = Langs[this.props.currLang].gameBoard.modals.drawFirst;
        content = 
          <div className="modalContent">
            <p className="modalWaitText">{Langs[this.props.currLang].gameBoard.modals.drawFirstWaiting}</p>
          </div>;
        break;
      case ModalStates.SET_DRAW_FIRST_ATTACKER:
        banner = Langs[this.props.currLang].gameBoard.modals.drawFirst;
        content = 
          <div className="modalContent">
            <button className="ui red button" onClick={this.handleSetFirstDrawer.bind(this)}>{Langs[this.props.currLang].gameBoard.modals.drawFirstButton}</button>
          </div>;
        break;
      case ModalStates.RESTART_GAME:
        banner = Langs[this.props.currLang].gameBoard.modals.restartGame;
        content = 
          <div className="modalContent">
            <button className="ui red button" onClick={this.handleRestartGame.bind(this)}>{ Langs[this.props.currLang].gameBoard.modals.yes }</button>
            <button className="ui black button" onClick={this.handleModalAway.bind(this)}>{ Langs[this.props.currLang].gameBoard.modals.no }</button>
          </div>;
        break;
      case ModalStates.END_GAME:
        banner = Langs[this.props.currLang].gameBoard.modals.endGame;
        content = 
          <div className="modalContent">
            <button className="ui red button" onClick={this.handleEndGame.bind(this)}>{ Langs[this.props.currLang].gameBoard.modals.yes }</button>
            <button className="ui black button" onClick={this.handleModalAway.bind(this)}>{ Langs[this.props.currLang].gameBoard.modals.no }</button>
          </div>;
        break;
      case ModalStates.END_GAME_NOTICE:
        banner = Langs[this.props.currLang].gameBoard.modals.endGameNotice;
        content = 
          <div className="modalContent">
            <button className="ui black button" onClick={this.handleModalAway.bind(this)}>{ Langs[this.props.currLang].gameBoard.modals.ok }</button>
          </div>;
        break;
      case ModalStates.RESTART_FULL:
        banner = Langs[this.props.currLang].gameBoard.roles[game.winningTeam] + Langs[this.props.currLang].gameBoard.modals.restartGameFull;
        content = 
          <div className="modalContent">
            <p>{ Langs[this.props.currLang].gameBoard.roles[game.winningTeam] + Langs[this.props.currLang].gameBoard.modals.restartGameFullText1 + game.taiXiaPointsTotal + Langs[this.props.currLang].gameBoard.modals.restartGameFullText2}</p>
            <br></br>
            <br></br>
            <button className="ui red button" onClick={this.handleRestartGame.bind(this)}>{ Langs[this.props.currLang].gameBoard.modals.yes }</button>
            <button className="ui black button" onClick={this.handleModalAway.bind(this)}>{ Langs[this.props.currLang].gameBoard.modals.no }</button>
          </div>;
        break;
    }

    var delayModal = game.modalByPlayer[user.username] == ModalStates.RESTART_FULL; 

    return (
      <ReactModal
          isOpen = { game.modalByPlayer[user.username] != ModalStates.NONE }
          className = { delayModal && !game.delayedModalAlready ? {base: 'modalDelay', afterOpen: 'modalAfterOpen', beforeClose: 'modalBeforeClose'} : {base: 'modal', afterOpen: 'modalAfterOpen', beforeClose: 'modalBeforeClose'} }
          overlayClassName = { delayModal && !game.delayedModalAlready ? {base: 'overlayDelay', afterOpen: 'overlayAfterOpen', beforeClose: 'overlayBeforeClose'}: {base: 'overlay', afterOpen: 'overlayAfterOpen', beforeClose: 'overlayBeforeClose'} }
          closeTimeoutMS = { delayModal ? 4000 : 500 }
          overlayRef = {node => (this.overlayRef = node)}
          onAfterOpen = {this.modalOnAfterOpenCallback.bind(this, delayModal)}
          ariaHideApp = {false}>
          <div className="modalBannerDiv">
            <p className="modalBanner">{ banner }</p>
          </div>
          { content }
      </ReactModal>
      );
  }

  //Register that the delay for RESTART_FULL modal has happened already to avoid delay upon refresh
  modalOnAfterOpenCallback(delayedModal) {
    if (delayedModal) {
      this.overlayRef.addEventListener( 'webkitTransitionEnd', () => { 
        this.handleDelayedModalAlready();
      }, false );
    } 
  }

  renderModalError(game, user) {
    var error = game.errorByPlayer[user.username];

    var banner = Langs[this.props.currLang].gameBoard.errors.oops;
    var content = 
      <div className="modalContent">
        <p>{ Langs[this.props.currLang].gameBoard.errors[error] }</p>
        <br></br>
        <br></br>
        <button className="ui black button" onClick={this.handleErrorAway.bind(this)}>OK</button>
      </div>;

    return (
      <ReactModal
          isOpen = { error != ErrorStates.NONE }
          className = {{base: 'modal error', afterOpen: 'modalAfterOpen', beforeClose: 'modalBeforeClose'}}
          overlayClassName = {{base: 'overlay', afterOpen: 'overlayAfterOpen', beforeClose: 'overlayBeforeClose'}}
          closeTimeoutMS={500}
          ariaHideApp={false}>
          <div className="modalBannerDiv">
            <p className="modalBanner">{ banner }</p>
          </div>
          { content }
      </ReactModal>
      );
  }

  renderModalUndo(game, user) {
    var undoType = game.undoByPlayer[user.username][UndoParams.MODAL];
    var undoRole = game.undoByPlayer[user.username][UndoParams.ROLE];

    var banner = Langs[this.props.currLang].gameBoard.buttons.undo;

    switch (undoRole) { 
      case UndoRoles.UNDOER:
        var content = 
          <div className="modalContent">
            <p>{ Langs[this.props.currLang].gameBoard.undo.undoerBanner }</p>
            <p>{Langs[this.props.currLang].gameBoard.undo[undoType]}</p>
            <br></br>
            <br></br>
            <button className="ui red button" onClick={this.handleUndo.bind(this)}>{Langs[this.props.currLang].gameBoard.modals.yes}</button>
            <button className="ui black button" onClick={this.handleUndoAway.bind(this)}>{Langs[this.props.currLang].gameBoard.modals.no}</button>
          </div>;
        break;
      case UndoRoles.NOTICEE:
        var content = 
          <div className="modalContent">
            <p><b><font color="#4D6A6D">{ game.undoer }</font></b>{ Langs[this.props.currLang].gameBoard.undo.noticeeBanner }</p>
            <p>{Langs[this.props.currLang].gameBoard.undo[undoType]}</p>
            <br></br>
            <br></br>
            <button className="ui black button" onClick={this.handleUndoAway.bind(this)}>{Langs[this.props.currLang].gameBoard.modals.ok}</button>
          </div>;
        break;
    }

    return (
      <ReactModal
          isOpen = { undoType != UndoStates.NONE }
          className = {{base: 'modal', afterOpen: 'modalAfterOpen', beforeClose: 'modalBeforeClose'}}
          overlayClassName = {{base: 'overlay', afterOpen: 'overlayAfterOpen', beforeClose: 'overlayBeforeClose'}}
          closeTimeoutMS={500}
          ariaHideApp={false}>
          <div className="modalBannerDiv">
            <p className="modalBanner">{ banner }</p>
          </div>
          { content }
      </ReactModal>
      );
  }   

  renderHandAreaItems(game, user) {
    var items = [];
    var inBools = [];

    //drawCard button
    inBools.push(game.stage == GameStages.DRAW && user.username == game.getCurrPlayer());
    items.push(<button className="roundCornerButton" id="roundCornerButtonDraw" onClick={this.handleDrawCard.bind(this)}></button>);
    inBools.push(!(game.stage == GameStages.DRAW && user.username == game.getCurrPlayer()));
    items.push(<button className="roundCornerButton" id="roundCornerButtonDraw" onClick={this.handleDrawCard.bind(this)} disabled></button>);

    //endTurn button
    inBools.push(game.stage == GameStages.PLAY && user.username == game.getCurrPlayer() && game.userPlayedRightNumCards());
    items.push(<button className="roundCornerButton" id="roundCornerButtonEndTurn" onClick={this.handleEndTurn.bind(this)}></button>);
    inBools.push(!(game.stage == GameStages.PLAY && user.username == game.getCurrPlayer() && game.userPlayedRightNumCards()));
    items.push(<button className="roundCornerButton" id="roundCornerButtonEndTurn" onClick={this.handleEndTurn.bind(this)} disabled></button>);


    for (var i = 0; i < items.length; i++) {
      items[i] = this.animate(i, items[i], inBools[i], Anim.fadeInOut.class, Anim.fadeInOut.timeout)
    }

    return items;
  }

  renderTableAreaItems(game, user) {
    var items = [];
    var inBools = [];

    //See and hide prev table button
    inBools.push(game.tableState == TableStates.SEE_PREV_TABLE || game.tableState == TableStates.SEE_PREV_TABLE_FIRST);
    items.push(<button className="roundCornerButton" id="roundCornerButtonSeePrevTable" onClick={this.handleSeePrevTable.bind(this)}></button>);
    inBools.push(game.tableState == TableStates.CLEAR_PREV_TABLE);
    items.push(<button className="roundCornerButton" id="roundCornerButtonClearPrevTable" onClick={this.handleClearPrevTable.bind(this)}></button>);
    inBools.push(inBools.every(v => v === false));
    items.push(<button className="roundCornerButton" id="roundCornerButtonSeePrevTable" onClick={this.handleSeePrevTable.bind(this)} disabled></button>);

    for (var i = 0; i < items.length; i++) {
      items[i] = this.animate(i, items[i], inBools[i], Anim.fadeInOut.class, Anim.fadeInOut.timeout)
    }

    return items;
  }

  renderDiBanner(game, user) {
    var items = [];
    var inBools = [];
    var banners = [];
    var bannerItem;

    // Di to find three view
    inBools.push(game.stage == GameStages.FIND_THREE_IN_DI);
    banners.push(Langs[this.props.currLang].gameBoard.banners.findThreeInDi);

    //Open di view
    inBools.push(game.stage == GameStages.DI && game.diOpener == user.username);
    banners.push(Langs[this.props.currLang].gameBoard.banners.openDi);

    //Di during WRAPUP and FINISHED view
    inBools.push((game.stage == GameStages.WRAP_UP) || (game.stage == GameStages.FINISHED));
    banners.push(Langs[this.props.currLang].gameBoard.banners.diWrap);

    for (var i = 0; i < banners.length; i++) {
      bannerItem = <p className="diBanner"><b>{ banners[i] }</b></p>;
      items.push(this.animate(i, bannerItem, inBools[i], Anim.fadeSlideInOut.class, Anim.fadeSlideInOut.timeout));
    }

    return items;
  }

  renderTableColDiAreaView(game, user) {
    var items = [];
    var item;
    var inBool;
    var animClass;
    var totalTime;
    var card;

    var openDiShow = game.stage == GameStages.DI && game.diOpener == user.username;
    var findThreeOpenDiShow = (game.stage == GameStages.FIND_THREE_IN_DI) || openDiShow;
    var delayMult;

    for (var i = 0; i < game.di.length; i++) {
      card = game.di[i];
      item = <img src={"/images/" + card + ".png"} draggable="false" className={ openDiShow ? "handle" : '' } onDoubleClick={ openDiShow ? this.handleCardMigration.bind(this, card) : ()=> {}}></img>
      delayMult = (i < game.threeFromDiCount) ? i : (i - game.threeFromDiCount)
      inBool = (i < game.threeFromDiCount) ? findThreeOpenDiShow : openDiShow;
      animClass = (game.undidStartGame) ? '' : ((i < game.threeFromDiCount) ? Anim.slideIn.class+'-'+delayMult : Anim.slideInQuick.class+'-'+delayMult);
      totalTime = (game.undidStartGame) ? 0 : ((i < game.threeFromDiCount) ? Anim.slideIn.timeout + Anim.slideIn.delay * delayMult : Anim.slideInQuick.timeout + Anim.slideInQuick.delay * delayMult);
      items.push(this.animate(i, item, inBool, animClass, totalTime));
    }

    return (
      <div className="wrapper" id="diAreaWrapper">
        { items }
      </div>
      );
  }

  renderTableColWrapUpDiView(game, user) {
    var items = [];
    var item;
    var inBool;
    var animClass;
    var totalTime;
    var card;

    //Di during WRAPUP and FINISHED view
    var delayPoint;

    for (var i = 0; i < game.diOriginal.length; i++) {
      card = game.diOriginal[i];
      item = <img src={"/images/" + card + ".png"} draggable="false"></img>
      inBool = (game.stage == GameStages.WRAP_UP || game.stage == GameStages.FINISHED) && game.di.indexOf(card) > -1;
      delayPoint = game.taiXiaPoints.indexOf(card) > -1 && game.stage == GameStages.WRAP_UP;
      animClass = delayPoint ? Anim.fadeInOutExtra3DelayOut.class : Anim.fadeInOutExtra2DelayOut.class;
      totalTime = delayPoint ? Anim.fadeInOutExtra3DelayOut.timeout + Anim.fadeInOutExtra3DelayOut.delay : Anim.fadeInOutExtra2DelayOut.timeout;
      items.push(this.animate(card, item, inBool, animClass, totalTime, this.onWrapUpDiEnterCallback));
    } 

    return (
      <div className="wrapper" id="diAreaWrapper">
        { items }
      </div>
      );
  }

  onWrapUpDiEnterCallback(card) {
    var game = this.props.game;
    var user = this.props.user;
    if (game.di.indexOf(card) == DiLength - 1 && user.username == game.wrapUpWinner) {
      this.handleWrapUp();
    }
  }

  renderTableColPlayingView(game, user) {  
    let tableCards = game.currTableCards;
    let tablePlayers = this.renderTablePlayersStyle(game, user);

    var playerAreas = [];
    var playingViewShow = game.showPlayingView(user);

    var item;
    var card;
    var active;
    var delayPoint;
    var inBool;
    var animClass;
    var totalTime;

    for (var player in tablePlayers) {
      var items = [];
      for (var i = 0; i < DeckComplete.length; i++) {
        card = DeckComplete[i];
        inBool = card in tableCards && tableCards[card] == player;
        //Make card clickable if is user's turn during PLAY or is user's three
        active = (player == user.username) && (player == game.getCurrPlayer() || game.stage != GameStages.PLAY);
        item = <img src={"/images/" + card + ".png"} draggable="false" className={active ? "handle" : ''} onDoubleClick={ active ? this.handleCardMigration.bind(this, card) : ()=> {}}></img>;
        //Delay point cards fading out if during collect points
        delayPoint = game.taiXiaPoints.indexOf(card) > -1 && (game.tableState == TableStates.SEE_PREV_TABLE_FIRST || game.stage == GameStages.WRAP_UP);
        animClass = delayPoint ? Anim.fadeInOutDelayOut.class: Anim.fadeInOut.class;
        totalTime = delayPoint ? Anim.fadeInOutDelayOut.timeout + Anim.fadeInOutDelayOut.delay : Anim.fadeInOut.timeout;
        items.push(this.animate(card, item, inBool, animClass, totalTime));
      }

      playerAreas.push(
        <div className="playerArea" id={ this.state.playerAreaID } key={ player } style={tablePlayers[player]}>
          <p className="tableBanner"><b>{ player }</b></p>
          { items }
        </div>
      )
    }

    var disabledTableArea = this.animate('tableShadow', <div id="tableAreaShadow"></div>, game.disableTableArea(user), Anim.fadeInOut65.class, Anim.fadeInOut65.timeout);

    var wrapper =       
      <div className="wrapper" id="playerAreaWrapper">
        { playerAreas }
        { disabledTableArea }
      </div>

    var stallExit = game.stage == GameStages.WRAP_UP;
    animClass = stallExit ? Anim.fadeInOutExtraDelayOut.class : Anim.fadeInOut.class;
    totalTime = stallExit ? Anim.fadeInOutExtraDelayOut.timeout + Anim.fadeInOutExtraDelayOut.delay : Anim.fadeInOut.timeout;

    //Animate wrapper so that div doesn't cover di cards when clickable
    return this.animate('playingAreaView', wrapper, playingViewShow, animClass, totalTime);
  }

  renderNextArea(game, user) {
    let items = [];
    let bools = [];
    var item1;
    var item2;

    //Find three in di button
    items.push(<button className="nextAreaItem myButton" onClick={this.handleThreeFromDi.bind(this)}>{Langs[this.props.currLang].gameBoard.nextArea.openDiForThree}</button>);
    bools.push(game.stage == GameStages.DONE_DRAWING && game.threeState == ThreeStates.NOT_SHOWN && game.playerRoles[user.username] == Roles.DEFENDER);
    items.push(<p className="nextAreaItem waitText">{Langs[this.props.currLang].gameBoard.nextArea.findThreeWaiting}</p>);
    bools.push(game.stage == GameStages.DONE_DRAWING && game.threeState == ThreeStates.NOT_SHOWN && game.playerRoles[user.username] != Roles.DEFENDER);

    //Open di button
    items.push(<button className="nextAreaItem myButton" onClick={this.handleOpenDi.bind(this)}>{Langs[this.props.currLang].gameBoard.nextArea.openDi}</button>);
    bools.push(((game.stage == GameStages.DONE_DRAWING && game.threeState != ThreeStates.NOT_SHOWN) || (game.stage == GameStages.FIND_THREE_IN_DI)) && game.playerRoles[user.username] == Roles.DEFENDER);
    items.push(<p className="nextAreaItem waitText">{Langs[this.props.currLang].gameBoard.nextArea.openKittyWaiting}</p>);
    bools.push(((game.stage == GameStages.DONE_DRAWING && game.threeState != ThreeStates.NOT_SHOWN) || (game.stage == GameStages.FIND_THREE_IN_DI)) && game.playerRoles[user.username] != Roles.DEFENDER);

    //Start playing button
    items.push(<button className="nextAreaItem myButton" onClick={this.handleStartGame.bind(this)} disabled={game.di.length != DiLength}>{Langs[this.props.currLang].gameBoard.nextArea.startPlaying}</button>);
    bools.push(game.stage == GameStages.DI && user.username == game.diOpener);
    items.push(<p className="nextAreaItem waitText" >{Langs[this.props.currLang].gameBoard.nextArea.startGameWaiting}</p>);
    bools.push(game.stage == GameStages.DI && user.username != game.diOpener);

    //Won round button
    items.push(<button className="nextAreaItem myButton" onClick={this.handleClearTable.bind(this)}>{Langs[this.props.currLang].gameBoard.nextArea.wonRoundButton}</button>);
    bools.push(game.tableState == TableStates.CLEAR_TABLE && game.stage == GameStages.PLAY);

    //End game message
    items.push(<p className="nextAreaItem waitText">{Langs[this.props.currLang].gameBoard.nextArea.gameOver}</p>);
    bools.push(game.stage == GameStages.FINISHED);

    //Default
    items.push(<img className="nextAreaItem" id="placeholder" src={"/images/nextAreaPlaceholder.png"}></img>);
    bools.push(bools.every(v => v === false));

    for (var i = 0; i < items.length; i++) {
      items[i] = this.animate(i, items[i], bools[i], Anim.fadeSlideInOut.class, Anim.fadeSlideInOut.timeout);
    }

    return items;
  }

  renderPointsArea(game, user) {
    let pointCards = game.taiXiaPoints;
    var items = [];
    var item;
    var card;
    var inBool;
    var animClass;
    var totalTime;

    for (var i = 0; i < DeckComplete.length; i++) {
      card = DeckComplete[i];
      inBool = game.taiXiaPoints.indexOf(card) > -1;
      item = <img src={"/images/" + card + ".png"} draggable="false" key={card}></img>
      animClass = game.diOriginal.indexOf(card) > -1 ? Anim.fadeInOutExtra3DelayIn.class : Anim.fadeInOutDelayIn.class;
      totalTime = game.diOriginal.indexOf(card) > -1 ? Anim.fadeInOutExtra3DelayIn.timeout + Anim.fadeInOutExtra3DelayIn.delay : Anim.fadeInOutDelayIn.timeout + Anim.fadeInOutDelayIn.delay;
      items.push(this.animate(card, item, inBool, animClass, totalTime));
    }

    return (
      <div className="area" id="pointsArea">
        <p id="pointsAreaBanner">{Langs[this.props.currLang].gameBoard.banners.pointsArea}</p>
          { items }
      </div>
      );
  }

  renderButtonRow1Items(game, user) {
    var items = [];
    var inBools = [];

    var key = 0;

    //Back button
    items.push(<button className="ui button black topButton" key={key++} onClick={this.handleBackToGameList.bind(this)}>{Langs[this.props.currLang].gameBoard.buttons.back}</button>);
    items.push(<div className="dummyColumn3" key={key++}></div>);
    //Restart game button
    items.push(<button className="ui button red topButton" key={key++} onClick={this.handleModalShow.bind(this, ModalStates.RESTART_GAME)} disabled={game.stage == GameStages.SET_UP}>{Langs[this.props.currLang].gameBoard.buttons.restartGame}</button>)
    items.push(<div className="dummyColumn3" key={key++}></div>);
    //End game button
    items.push(<button className="ui button red topButton" key={key++} onClick={this.handleModalShow.bind(this, ModalStates.END_GAME)} disabled={game.stage == GameStages.FINISHED}>{Langs[this.props.currLang].gameBoard.buttons.endGame}</button>);
    items.push(<div className="dummyColumn4" key={key++}></div>);

    //Undo button
    var undoType = game.undoByPlayer[user.username][UndoParams.BUTTON];
    items.push(<button className="ui button orange topButton" key = {key++} onClick={this.handleUndoShow.bind(this)} disabled={undoType == UndoStates.NONE}>{Langs[this.props.currLang].gameBoard.buttons.undo}{Langs[this.props.currLang].gameBoard.undo[undoType]}</button>);  

    return items;
  }

  renderButtonRow2Items(game, user) {
    var items = [];
    var inBools = [];

    var role = user.username in game.playerRoles ? game.playerRoles[user.username] : '';

    //Role and trump icons
    inBools.push(true);
    items.push(<p><b>{ Langs[this.props.currLang].gameBoard.msgArea.role }</b></p>);
    inBools.push(game.stage != GameStages.SET_UP && role != Roles.TBD);
    items.push(<img src={"/images/" + role.toLowerCase() + ".png"} id="playerRoleIcon" title={Langs[this.props.currLang].gameBoard.roles[role]}></img>);
    inBools.push(true);
    items.push(<p><b>{ Langs[this.props.currLang].gameBoard.msgArea.zhu }</b></p>);
    inBools.push(game.stage != GameStages.SET_UP && game.zhu != '');
    items.push(<img src={"/images/" + SuitsMap[game.zhu] + ".png"} id="zhuIcon" title={Langs[this.props.currLang].gameBoard.suits[SuitsMap[game.zhu]]}></img>);

    for (var i = 0; i < items.length; i++) {
      items[i] = this.animate(i, items[i], inBools[i], Anim.fadeInOut.class, Anim.fadeInOut.timeout)
    }

    return items;
  }

  animate(key, item, bool, className, timeout, onEnter) {
    return (
      <CSSTransition
        key={key}
        in={bool}
        timeout={timeout}
        classNames={className}
        unmountOnExit
        onEntered={onEnter ? onEnter.bind(this, key) : () => {}}>
        {item}
      </CSSTransition>
      );
  }

  render() {
    let game = this.props.game;
    let user = this.props.user;
    
    let userCards = game.hands[user.username];

    let handAreaStyle = this.renderHandAreaStyle(game, user);

    return (
      <div className="ui container">
        {/* Header */}
        <GameHeader
          user={user}
          currLang={this.props.currLang}
          handleLangDropdown={this.props.handleLangDropdown} />

        {/* Modals */}
        {this.renderModal(game, user)}
        {this.renderModalError(game, user)}
        {this.renderModalUndo(game, user)}

        {/* MainRow */}
        <div className="row" id="mainRow">

           <div className="halfColumn" id="left">
            <div className="row" id="tableButtonsRow">
              <div className="column smart" id="buttonsColumn">
                <div className="row" id="buttonsRow1">
                { this.renderButtonRow1Items(game, user) }
                </div>
                <div className="row" id="buttonsRow2">
                { this.renderButtonRow2Items(game, user) }
                </div>
              </div>

              <div className="column dummy" id="dummyColumn5"></div>

              {/* Table and di areas */}
              <div className="column smart" id="tableColumn">

                <p className="banner"><b>{ Langs[this.props.currLang].gameBoard.banners.tableArea }</b></p>

                { this.renderTableAreaItems(game, user) }
                <div className="area" id="tableArea">
                  { this.renderDiBanner(game, user) }
                  { this.renderTableColWrapUpDiView(game, user) }
                  { this.renderTableColDiAreaView(game, user) }
                  { this.renderTableColPlayingView(game, user) }
                </div>
                
                <div id="nextArea">
                  { this.renderNextArea(game, user) }
                </div>
              </div>
            </div>

            <div className="column dummy" id="dummyColumn2"></div>
          
            {/* Points area */}
            <div className="column smart" id="pointsColumn">
              { this.renderPointsArea(game, user) }
            </div>
          </div>

          <div className="column dummy" id="dummyColumn1"></div>

          {/* Hand */}
          <div className="halfColumn" id="right">
            <div className="column smart" id="handAreaColumn">
              <p className="banner"><b>{Langs[this.props.currLang].gameBoard.banners.handArea}</b></p>
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
                  {/*  <div className="quarter-circle-top-right"></div> */}
                  <div id="landingArea">
                    {/* <br></br>
                    <p id="landingText">{Langs[this.props.currLang].gameBoard.handArea.card}</p> */}
                  </div>
                  {this.renderHandAreaLines(game, user)}
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}
