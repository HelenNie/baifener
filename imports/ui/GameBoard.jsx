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
    timeout: 1000
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
  },
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

export default class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.overlayRef = React.createRef();
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
    var margin = 7;
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

    inBools.push(game.stage == GameStages.DRAW && user.username == game.getCurrPlayer());
    items.push(<button className="roundCornerButton" id="roundCornerButtonDraw" key="3" onClick={this.handleDrawCard.bind(this)}></button>);
    inBools.push(game.stage == GameStages.DRAW && user.username != game.getCurrPlayer());
    items.push(<button className="roundCornerButton" id="roundCornerButtonDraw" key="3" onClick={this.handleDrawCard.bind(this)} disabled></button>);

    for (var i = 0; i < items.length; i++) {
      items[i] = this.animate(i, items[i], inBools[i], Anim.fadeInOut.class, Anim.fadeInOut.timeout)
    }

    return items;
  }

  renderTableAreaItems(game, user) {
    var items = [];
    var inBools = [];

    //endTurn button
    inBools.push(game.stage == GameStages.PLAY && user.username == game.getCurrPlayer() && game.userPlayedRightNumCards());
    items.push(<button className="roundCornerButton" id="roundCornerButtonEndTurn" onClick={this.handleEndTurn.bind(this)}></button>);
    inBools.push(game.stage == GameStages.PLAY && !(user.username == game.getCurrPlayer() && game.userPlayedRightNumCards()));
    items.push(<button className="roundCornerButton" id="roundCornerButtonEndTurn" onClick={this.handleEndTurn.bind(this)} disabled></button>);

    //See and hide prev table button
    inBools.push(game.tableState == TableStates.SEE_PREV_TABLE || game.tableState == TableStates.SEE_PREV_TABLE_FIRST);
    items.push(<button className="roundCornerButton" id="roundCornerButtonSeePrevTable" key="2" onClick={this.handleSeePrevTable.bind(this)}></button>);
    inBools.push(game.tableState == TableStates.CLEAR_PREV_TABLE);
    items.push(<button className="roundCornerButton" id="roundCornerButtonClearPrevTable" key="2" onClick={this.handleClearPrevTable.bind(this)}></button>);
    inBools.push(game.stage == GameStages.PLAY && (game.tableState == TableStates.CLEAR_TABLE || game.tableState == TableStates.NONE));
    items.push(<button className="roundCornerButton" id="roundCornerButtonSeePrevTable" key="2" onClick={this.handleSeePrevTable.bind(this)} disabled></button>);
    
    for (var i = 0; i < items.length; i++) {
      items[i] = this.animate(i, items[i], inBools[i], Anim.fadeInOut.class, Anim.fadeInOut.timeout)
    }

    return items;
  }

  renderTableColBanner(game, user) {
    var banner;

      if (game.stage == GameStages.FIND_THREE_IN_DI) {
        // Di to find three view
        banner = Langs[this.props.currLang].gameBoard.banners.findThreeInDi;
      } else if (game.stage == GameStages.DI && game.diOpener == user.username) {
        //Open di view
        banner = Langs[this.props.currLang].gameBoard.banners.openDi;
      } else if ((game.stage == GameStages.WRAP_UP) || (game.stage == GameStages.FINISHED)) {
        //Di during WRAPUP and FINISHED view
        banner = Langs[this.props.currLang].gameBoard.banners.diWrap;
      } else {
        //Playing view
        banner = Langs[this.props.currLang].gameBoard.banners.tableArea;
      }

    return (<p className="banner"><b>{ banner }</b></p>);
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
        <div className="playerArea" key={ player } style={tablePlayers[player]}>
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
    item1 = <button className="nextAreaItem myButton" onClick={this.handleThreeFromDi.bind(this)}>{Langs[this.props.currLang].gameBoard.nextArea.openDiForThree}&rarr;</button>;
    item2 = <p className="nextAreaItem waitText">{Langs[this.props.currLang].gameBoard.nextArea.findThreeWaiting}</p>;
    items.push(this.renderByRoleHelper(game, game.playerRoles[user.username], Roles.ATTACKER, item2, item1));
    bools.push(game.stage == GameStages.DONE_DRAWING && game.threeState == ThreeStates.NOT_SHOWN);

    //Open di button
    item1 = <button className="nextAreaItem myButton" onClick={this.handleOpenDi.bind(this)}>{Langs[this.props.currLang].gameBoard.nextArea.openDi}</button>;
    item2 = <p className="nextAreaItem waitText" >{Langs[this.props.currLang].gameBoard.nextArea.openKittyWaiting}</p>;
    items.push(this.renderByRoleHelper(game, game.playerRoles[user.username], Roles.ATTACKER, item2, item1));
    bools.push((game.stage == GameStages.DONE_DRAWING && game.threeState != ThreeStates.NOT_SHOWN) || (game.stage == GameStages.FIND_THREE_IN_DI));

    //Start playing button
    item1 = <button className="nextAreaItem myButton" onClick={this.handleStartGame.bind(this)} disabled={game.di.length != DiLength}>{Langs[this.props.currLang].gameBoard.nextArea.startPlaying}</button>;
    item2 = <p className="nextAreaItem waitText" >{Langs[this.props.currLang].gameBoard.nextArea.startGameWaiting}</p>;
    items.push(this.renderByRoleHelper(game, user.username, game.diOpener, item1, item2)),
    bools.push(game.stage == GameStages.DI);

    //Won round button
    items.push(<button className="nextAreaItem myButton" onClick={this.handleClearTable.bind(this)}>{Langs[this.props.currLang].gameBoard.nextArea.wonRoundButton}</button>);
    bools.push(game.tableState == TableStates.CLEAR_TABLE && game.stage == GameStages.PLAY);

    //Default
    items.push(<img className="nextAreaItem" id="placeholder" src={"/images/nextAreaPlaceholder.png"}></img>);
    bools.push(bools.every(v => v === false));

    for (var i = 0; i < items.length; i++) {
      items[i] = this.animate(i, items[i], bools[i], Anim.fadeSlideInOut.class, Anim.fadeSlideInOut.timeout);
    }

    return items;
  }

  renderByRoleHelper(game, userAttr, role, item1, item2) {
    if (userAttr == role) {
      return item1;
    } else {
      return item2;
    }
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
          { items }
      </div>
      );
  }

  renderEndGameShadow(game, user) {
    return (this.animate('endGameShadow', <div id="finishedShadow"></div>, game.stage == GameStages.FINISHED, Anim.fadeInOut65DelayIn.class, Anim.fadeInOut65DelayIn.timeout + Anim.fadeInOut65DelayIn.delay));
  }

  renderTopRow(game, user) {
    var items = [];

    //Back button
    items.push(<button className="ui button black topButton" key='1' onClick={this.handleBackToGameList.bind(this)}>{Langs[this.props.currLang].gameBoard.buttons.back}</button>);
    //End game button
    items.push(<button className="ui button red topButton" key='2' onClick={this.handleModalShow.bind(this, ModalStates.END_GAME)} disabled={game.stage == GameStages.FINISHED}>{Langs[this.props.currLang].gameBoard.buttons.endGame}</button>);
    //Restart game button
    items.push(<button className="ui button red topButton" key='3' onClick={this.handleModalShow.bind(this, ModalStates.RESTART_GAME)} disabled={game.stage == GameStages.SET_UP}>{Langs[this.props.currLang].gameBoard.buttons.restartGame}</button>)
    //Undo button
    var undoType = game.undoByPlayer[user.username][UndoParams.BUTTON];
    items.push(<button className="ui button orange topButton" id="undoButton" key = '4' onClick={this.handleUndoShow.bind(this)} disabled={undoType == UndoStates.NONE}>{Langs[this.props.currLang].gameBoard.buttons.undo}{Langs[this.props.currLang].gameBoard.undo[undoType]}</button>);
    //messageArea
    items.push(
      <div className="messageArea" key = '5'>
        {this.renderMessageArea(game, user)}
      </div>
    );    
        
    return (
      <div className="row" id="topRow">
        {items}
      </div>
      );
  }

  renderMessageArea(game, user) {
    var items = [];
    var inBools = [];

    var role = user.username in game.playerRoles ? game.playerRoles[user.username] : '';

    inBools.push(game.stage != GameStages.SET_UP && role != Roles.TBD);
    items.push(<img src={"/images/" + role.toLowerCase() + ".png"} id="playerRoleIcon" key="1" title={Langs[this.props.currLang].gameBoard.roles[role]}></img>);
    inBools.push(game.stage != GameStages.SET_UP && game.zhu != '');
    items.push(<img src={"/images/" + SuitsMap[game.zhu] + ".png"} id="zhuIcon" key="2" title={Langs[this.props.currLang].gameBoard.suits[SuitsMap[game.zhu]]}></img>);

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

        {/* TopRow */}
        {this.renderTopRow(game, user)}

        {/* MainRow */}
        <div className="row" id="mainRow">

          {/* Hand */}
          <div className="column smart">
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
                <div className="quarter-circle-top-right"></div>
                <div id="landingArea">
                  <br></br>
                  <p id="landingText">{Langs[this.props.currLang].gameBoard.handArea.card}</p>
                </div>
                {this.renderHandAreaLines(game, user)}
            </div>
          </div>

          <div className="column dummy" id="dummyColumn1"></div>

          {/* Table and di areas */}
          <div className="column smart" id="tableColumn">

            { this.renderTableColBanner(game, user) }
            { this.renderTableAreaItems(game, user) }

            <div className="area" id="tableArea">
              { this.renderTableColWrapUpDiView(game, user) }
              { this.renderTableColDiAreaView(game, user) }
              { this.renderTableColPlayingView(game, user) }
            </div>
            
            
            <div id="nextArea">
              { this.renderNextArea(game, user) }
            </div>
          </div>

          <div className="column dummy" id="dummyColumn2"></div>
        
          {/* Points area */}
          <div className="column smart" id="pointsColumn">
            <p className="banner"><b>{Langs[this.props.currLang].gameBoard.banners.pointsArea}</b></p>
            { this.renderPointsArea(game, user) }
          </div>

          { this.renderEndGameShadow(game, user) }

        </div> 
      </div>
    )
  }
}
