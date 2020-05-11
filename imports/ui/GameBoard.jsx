import React, { Component, componentDidMount } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import ReactModal from 'react-modal';
import MyDrag from './MyDrag.jsx';


import GameHeader from './GameHeader.jsx';
import {Game, GameStatuses, GameStages, ModalStates, ErrorStates, UndoParams, UndoStates, UndoRoles, ThreeStates, TableStates, Roles, DiLength, SuitsMap, RanksMap, NumPlayers, CardLocMax, CardSize, CardSlotMargin, CardSlotSize} from '../api/models/game.js';
import {userDrawCardGame, userOpenDiGame, userCardMigrationGame, userStartGameGame, userClearTableGame, userThreeFromDiGame, userEndTurnGame, userSeePrevTableGame, userEndGameGame, userSetFirstDrawerGame, userConfirmOpenDiGame, userCancelOpenDiGame, userSetRoleGame, userClearPrevTableGame, userErrorAwayGame, userModalAwayGame, userModalShowGame, userUndoShowGame, userUndoAwayGame, userUndoGame, userRestartGameGame} from '../api/methods/games.js';

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
      baifener: '百分',
      logOut: '退出'
    },
    loginForm: {
      logIn: '登录',
      enterYourName: '用户名',
      err: {
        noUsername: '请输入用户名!',
        wrongUsername: '用户名不存在!'
      }
    },
    gameList: {
      listOfGames: '游戏单',
      joinGame: '加入游戏',
      enterGame: '进入游戏',
      leaveGame: '退出游戏',
      newGame: '新游戏',
      gameNumber: '游戏',
      waiting: '等待中'
    },
    gameBoard: {
      buttons: {
        back: '回去',
        endGame: '结束游戏',
        restartGame: '新游戏',
        undo: '撤回'
      },
      banners: {
        handArea: '我的牌',
        openDi: '揭底',
        findThreeInDi: '揭底找三',
        diWrap: '底',
        pointsArea: '台下分',
        tableArea: '牌桌',
      },
      modals: {
        selectTeam: "请选择你的队!",
        setRoleAgainText: "看样子你和你的朋友还没有分好队...请再试一次!",
        setRoleWaiting: "正在等其他玩家确认...",
        drawFirst: "如果该你先摸牌，请点击以下：",
        drawFirstButton: "我先摸",
        drawFirstWaiting: "正在等对手先摸...",
        endGame: "是否确定要结束游戏?",
        endGameNotice: "游戏已结束",
        restartGame: "是否确定要开始新的游戏?",
        restartGameNotice: "已开始新的游戏",
        yes: "是",
        no: "取消",
        ok: "知道了"
      },
      errors: {
        oops: '好像有点不对...',
        NOT_THREE: '你是想亮3吗? 你双击的牌不是3!',
        ALREADY_SHOWN_THREE: '你是想亮3吗? 此局已亮3了!',
        DI_FULL: '底已经满了！现取出牌来再往里放。',
        NOT_YOUR_TURN: "你是想出牌吗? 请稍等，还不该你出牌!",
        CLEAR_TABLE_FIRST: '你是想出牌吗? 请先清空牌桌!',
      },
      undo: {
        undoerBanner: '是否确定要撤回这一步?',
        noticeeBanner: ' 撤回了这一步:',
        SHOW_THREE: '亮三',
        OPEN_DI: '揭底',
        START_GAME: '扣底',
        PLAY_CARDS: '出牌',
        CLEAR_TABLE: '拿分'        
      },
      handArea: {
        card: "牌"
      },
      nextArea: {
        openDiForThree: '揭底找三',
        openDi: '揭底',
        startPlaying: '扣底',
        wonRoundButton: "我的牌最大",
        findThreeWaiting: "正在等对手揭底找三...",
        openKittyWaiting: "正在等对手揭底...",
        startGameWaiting: "正在等对手扣底..."
      },
      msgArea: {
        role: "队",
        zhu: "主"
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
      enterYourName: 'Enter your username',
      err: {
        noUsername: 'Username is required!',
        wrongUsername: 'Username does not exist!'
      }
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
        restartGame: 'Restart Game',
        undo: 'Undo'
      },
      banners: {
        handArea: 'My Hand',
        openDi: 'Open Kitty',
        findThreeInDi: 'Find Three in Kitty',
        diWrap: 'Kitty',
        pointsArea: 'Attacker Team Points',
        tableArea: 'Cards Table',
      },
      modals: {
        selectTeam: "Select your team!",
        setRoleAgainText: "Looks like you and your friends do not agree on your roles yet...Let's try this again!",
        setRoleWaiting: "Waiting for other players to confirm...",
        drawFirst: "Click below if you will draw first:",
        drawFirstButton: "I will draw first",
        drawFirstWaiting: "Waiting for opponents to draw first...",
        restartGame: "Are you sure you want to restart the game?",
        restartGameNotice: "A new game has started",
        endGame: "Are you sure you want to end the game?",
        endGameNotice: "The game has ended",
        yes: "Yes",
        no: "No",
        ok: "Ok"
      },
      errors: {
        oops: 'Oops!',
        NOT_THREE: 'Are you trying to show a 3? The card you doubleclicked is not a 3!',
        ALREADY_SHOWN_THREE: 'Are you trying to show a 3? A 3 has already been shown in this game!',
        DI_FULL: 'The kitty already has 6 cards! Take cards out before adding cards to the kitty.',
        NOT_YOUR_TURN: "Are you trying to play a card? It's not your turn!",
        CLEAR_TABLE_FIRST: 'Are you trying to play a card? Clear the table before playing a card!',
      },
      undo: {
        undoerBanner: 'Are you sure you want to undo this step?',
        noticeeBanner: ' undid this step:',
        SHOW_THREE: 'Show Three',
        OPEN_DI: 'Open Kitty',
        START_GAME: 'Stash Kitty',
        PLAY_CARDS: 'Play Cards',
        CLEAR_TABLE: 'Collect Points'  
      },
      handArea: {
        card: "Card"
      },
      nextArea: {
        openDiForThree: 'Look for Three in Kitty',
        openDi: 'Open Kitty',
        startPlaying: 'Stash Kitty',
        wonRoundButton: "Click here if you won this round",
        findThreeWaiting: "Waiting for opponents to look for three in kitty...",
        openKittyWaiting: "Waiting for opponents to open kitty...",
        startGameWaiting: "Waiting for game to stash kitty..."
      },
      msgArea: {
        role: "Role",
        zhu: "Trump"
      },
      roles: {
        DEFENDER: "Defender",
        ATTACKER: "Attacker",
        TBD: "TBD"
      }
    }
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

  handleModalShow(modal) {
    let game = this.props.game;
    userModalShowGame.call({gameId: game._id, modal: modal});
  }

  handleModalAway() {
    let game = this.props.game;
    userModalAwayGame.call({gameId: game._id});
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
        banner = CurrLang.gameBoard.modals.selectTeam;
        content = 
          <div className="modalContent">
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.DEFENDER)}>{CurrLang.gameBoard.roles[Roles.DEFENDER]}</button>
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.ATTACKER)}>{CurrLang.gameBoard.roles[Roles.ATTACKER]}</button>
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.TBD)}>{CurrLang.gameBoard.roles[Roles.TBD]}</button>
          </div>;
        break;
      case ModalStates.SET_ROLE_WAITING:
        banner = CurrLang.gameBoard.modals.selectTeam;
        content =
          <div className="modalContent">
            <p className="modalWaitText">{CurrLang.gameBoard.modals.setRoleWaiting}</p>
          </div>;
        break;
      case ModalStates.SET_ROLE_AGAIN:
        banner = CurrLang.gameBoard.modals.selectTeam;
        content = 
          <div className="modalContent">
            <p>{CurrLang.gameBoard.modals.setRoleAgainText}</p>
            <br></br>
            <br></br>
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.DEFENDER)}>{CurrLang.gameBoard.roles[Roles.DEFENDER]}</button>
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.ATTACKER)}>{CurrLang.gameBoard.roles[Roles.ATTACKER]}</button>
            <button className="ui red button" onClick={this.handleSetRole.bind(this, Roles.TBD)}>{CurrLang.gameBoard.roles[Roles.TBD]}</button>
          </div>;
        break;
      case ModalStates.SET_ROLE_AGAIN_WAITING:
        banner = CurrLang.gameBoard.modals.selectTeam;
        content = 
          <div className="modalContent">
            <p className="modalWaitText">{CurrLang.gameBoard.modals.setRoleWaiting}</p> 
          </div>;
        break;
      case ModalStates.SET_DRAW_FIRST_DEFENDER:
        banner = CurrLang.gameBoard.modals.drawFirst;
        content = 
          <div className="modalContent">
            <p className="modalWaitText">{CurrLang.gameBoard.modals.drawFirstWaiting}</p>
          </div>;
        break;
      case ModalStates.SET_DRAW_FIRST_ATTACKER:
        banner = CurrLang.gameBoard.modals.drawFirst;
        content = 
          <div className="modalContent">
            <button className="ui red button" onClick={this.handleSetFirstDrawer.bind(this)}>{CurrLang.gameBoard.modals.drawFirstButton}</button>
          </div>;
        break;
      case ModalStates.RESTART_GAME:
        banner = CurrLang.gameBoard.modals.restartGame;
        content = 
          <div className="modalContent">
            <button className="ui red button" onClick={this.handleRestartGame.bind(this)}>{ CurrLang.gameBoard.modals.yes }</button>
            <button className="ui black button" onClick={this.handleModalAway.bind(this)}>{ CurrLang.gameBoard.modals.no }</button>
          </div>;
        break;
      case ModalStates.RESTART_GAME_NOTICE:
        banner = CurrLang.gameBoard.modals.restartGameNotice;
        content = 
          <div className="modalContent">
            <button className="ui black button" onClick={this.handleModalAway.bind(this)}>{ CurrLang.gameBoard.modals.ok }</button>
          </div>;
        break;

      case ModalStates.END_GAME:
        banner = CurrLang.gameBoard.modals.endGame;
        content = 
          <div className="modalContent">
            <button className="ui red button" onClick={this.handleEndGame.bind(this)}>{ CurrLang.gameBoard.modals.yes }</button>
            <button className="ui black button" onClick={this.handleModalAway.bind(this)}>{ CurrLang.gameBoard.modals.no }</button>
          </div>;
        break;
      case ModalStates.END_GAME_NOTICE:
        banner = CurrLang.gameBoard.modals.endGameNotice;
        content = 
          <div className="modalContent">
            <button className="ui black button" onClick={this.handleModalAway.bind(this)}>{ CurrLang.gameBoard.modals.ok }</button>
          </div>;
        break;
    }

    return (
      <ReactModal
          isOpen = { game.modalByPlayer[user.username] != ModalStates.NONE }
          className = "modal"
          overlayClassName = "modalOverlay"
          ariaHideApp={false}>
          <div className="modalBannerDiv">
            <p className="modalBanner">{ banner }</p>
          </div>
          { content }
      </ReactModal>
      );
  }

  renderModalError(game, user) {
    var error = game.errorByPlayer[user.username];

    var banner = CurrLang.gameBoard.errors.oops;
    var content = 
      <div className="modalContent">
        <p>{ CurrLang.gameBoard.errors[error] }</p>
        <br></br>
        <br></br>
        <button className="ui black button" onClick={this.handleErrorAway.bind(this)}>OK</button>
      </div>;

    return (
      <ReactModal
          isOpen = { error != ErrorStates.NONE }
          className = "modal error"
          overlayClassName = "modalOverlay"
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

    var banner = CurrLang.gameBoard.buttons.undo;

    switch (undoRole) { 
      case UndoRoles.UNDOER:
        var content = 
          <div className="modalContent">
            <p>{ CurrLang.gameBoard.undo.undoerBanner }</p>
            <p>{CurrLang.gameBoard.undo[undoType]}</p>
            <br></br>
            <br></br>
            <button className="ui red button" onClick={this.handleUndo.bind(this)}>{CurrLang.gameBoard.modals.yes}</button>
            <button className="ui black button" onClick={this.handleUndoAway.bind(this)}>{CurrLang.gameBoard.modals.no}</button>
          </div>;
        break;
      case UndoRoles.NOTICEE:
        var content = 
          <div className="modalContent">
            <p><b><font color="#4D6A6D">{ game.undoer }</font></b>{ CurrLang.gameBoard.undo.noticeeBanner }</p>
            <p>{CurrLang.gameBoard.undo[undoType]}</p>
            <br></br>
            <br></br>
            <button className="ui black button" onClick={this.handleUndoAway.bind(this)}>{CurrLang.gameBoard.modals.ok}</button>
          </div>;
        break;
    }

    return (
      <ReactModal
          isOpen = { undoType != UndoStates.NONE }
          className = "modal"
          overlayClassName = "modalOverlay"
          ariaHideApp={false}>
          <div className="modalBannerDiv">
            <p className="modalBanner">{ banner }</p>
          </div>
          { content }
      </ReactModal>
      );
  }   

  renderMsgAreaItems(game, user) {
    var items = [];

    if (game.stage != GameStages.SET_UP) {
      items.push(<p id="playerRole" key="1">{CurrLang.gameBoard.msgArea.role}:&nbsp;{CurrLang.gameBoard.roles[game.playerRoles[user.username]]}</p>);
    }
    if (game.stage != GameStages.SET_UP) {
      items.push(<p className="msgAreaBuffer" key="2">||</p>);
      items.push(<p id="zhuImageLabel" key="3">{CurrLang.gameBoard.msgArea.zhu}:&nbsp;</p>);
      if (game.threeState != ThreeStates.NOT_SHOWN) {
        items.push(<img src={"/images/" + SuitsMap[game.zhu] + ".png"} id="zhuImage" key="5"></img>);
      } else {
        items.push(<p id="zhuImageTBD" key="4">{CurrLang.gameBoard.roles.TBD}</p>);
      }
    }

    return items;
  }

  renderHandAreaItems(game, user) {
    var items = [];
    var item1;
    var item2;

    if (game.stage == GameStages.DRAW) {
      item1 = <button className="roundCornerButton" id="roundCornerButtonDraw" key="2" onClick={this.handleDrawCard.bind(this)}></button>
      item2 = <button className="roundCornerButton" id="roundCornerButtonDraw" key="2" onClick={this.handleDrawCard.bind(this)} disabled></button>
      items.push(this.renderByRole(game, user.username, game.getCurrPlayer(), item1, item2));
    }
    if (game.stage == GameStages.PLAY) {
      if (user.username == game.getCurrPlayer() && game.userPlayedRightNumCards()) {
        items.push(item1 = <button className="roundCornerButton" id="roundCornerButtonEndTurn" key="2" onClick={this.handleEndTurn.bind(this)}></button>);
      } else {
        items.push(item2 = <button className="roundCornerButton" id="roundCornerButtonEndTurn" key="2" onClick={this.handleEndTurn.bind(this)} disabled></button>);
      }
    }

    return items;
  }

  renderTableAreaItems(game, user) {
    var items = [];

    if (game.tableState == TableStates.SEE_PREV_TABLE) {
      items.push(<button className="roundCornerButton" id="roundCornerButtonSeePrevTable" key="2" onClick={this.handleSeePrevTable.bind(this)}></button>);
    } else if (game.tableState == TableStates.CLEAR_PREV_TABLE) {
      items.push(<button className="roundCornerButton" id="roundCornerButtonClearPrevTable" key="2" onClick={this.handleClearPrevTable.bind(this)}></button>);
    } else if (game.stage == GameStages.PLAY) {
      items.push(<button className="roundCornerButton" id="roundCornerButtonSeePrevTable" key="2" onClick={this.handleSeePrevTable.bind(this)} disabled></button>);
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
      bannerText = CurrLang.gameBoard.banners.findThreeInDi;
      content = 
        <div className="area" id="diArea">
          {diCards.slice(0, game.threeFromDiCount).map((diCard, index) => (
            <img src={"/images/" + diCard + ".png"} draggable="false" key={diCard}></img>
          ))}
        </div>
    } else if (game.stage == GameStages.DI && game.diOpener == user.username) {
      //Open di view
      bannerText = CurrLang.gameBoard.banners.openDi;
      content = 
        <div className="area" id="diArea">
          {diCards.map((diCard, index) => (
            <img src={"/images/" + diCard + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, diCard)} draggable="false" key={diCard}></img>
          ))}
        </div>
    } else if ((game.stage == GameStages.WRAP_UP) || (game.stage == GameStages.FINISHED)) {
      //Di during WRAPUP and FINISHED view
      bannerText = CurrLang.gameBoard.banners.diWrap;
      content = 
        <div className="area" id="diArea">
            {diCards.map((diCard, index) => (
              <img src={"/images/" + diCard + ".png"} draggable="false" key={diCard}></img>
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
                  //Make card clickable if is user's turn during PLAY or is user's three
                  ((player == user.username) && (player == game.getCurrPlayer() || game.stage != GameStages.PLAY))? (
                    <img src={"/images/" + card + ".png"} className="handle" onDoubleClick={this.handleCardMigration.bind(this, card)} draggable="false" key={card}></img>
                  ): (
                    <img src={"/images/" + card + ".png"} onDoubleClick={this.handleCardMigration.bind(this, card)} draggable="false" key={card}></img>
                  )
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
      items.push(this.renderByRole(game, game.playerRoles[user.username], Roles.ATTACKER, item2, item1));
    } else if ((game.stage == GameStages.DONE_DRAWING && game.threeState != ThreeStates.NOT_SHOWN) || (game.stage == GameStages.FIND_THREE_IN_DI)) {
      //Open di button
      item1 = <button className="ui button orange" key="2" onClick={this.handleOpenDi.bind(this)}>{CurrLang.gameBoard.nextArea.openDi}</button>;
      item2 = <p className="nextAreaWaitText" key="2">{CurrLang.gameBoard.nextArea.openKittyWaiting}</p>;
      items.push(this.renderByRole(game, game.playerRoles[user.username], Roles.ATTACKER, item2, item1));
    } else if (game.stage == GameStages.DI) {
      //Start playing button
      if (game.di.length == DiLength) {
        item1 = <button className="ui button orange" key="3" onClick={this.handleStartGame.bind(this)}>{CurrLang.gameBoard.nextArea.startPlaying}</button>;
      } else {
        item1 = <button className="ui button orange" key="3" onClick={this.handleStartGame.bind(this)} disabled>{CurrLang.gameBoard.nextArea.startPlaying}</button>;
      }
      item2 = <p className="nextAreaWaitText" key="3">{CurrLang.gameBoard.nextArea.startGameWaiting}</p>;
      items.push(this.renderByRole(game, user.username, game.diOpener, item1, item2));
    } else if (game.tableState == TableStates.CLEAR_TABLE) {
      //Won round button
      items.push(<button className="ui button orange" key="4" onClick={this.handleClearTable.bind(this)}>{CurrLang.gameBoard.nextArea.wonRoundButton}</button>);
    } else {
      //Default
      items.push(<img id="nextAreaPlaceholder" key="5" src={"/images/nextAreaPlaceholder.png"}></img>);
    }

    return items;
  }

  renderTopRow(game, user) {
    var items = [];

    items.push(<button className="ui button black topButton" key='1' onClick={this.handleBackToGameList.bind(this)}>{CurrLang.gameBoard.buttons.back}</button>);
    
    if (game.stage != GameStages.FINISHED) {
      items.push(<button className="ui button red topButton" key='2' onClick={this.handleModalShow.bind(this, ModalStates.END_GAME)}>{CurrLang.gameBoard.buttons.endGame}</button>);
    } else {
      items.push(<button className="ui button red topButton" key='2' disabled>{CurrLang.gameBoard.buttons.endGame}</button>);
    }

    items.push(<button className="ui button red topButton" key='3' onClick={this.handleModalShow.bind(this, ModalStates.RESTART_GAME)}>{CurrLang.gameBoard.buttons.restartGame}</button>)

    if (game.undoByPlayer[user.username][UndoParams.BUTTON] != UndoStates.NONE) {
      var undoType = game.undoByPlayer[user.username][UndoParams.BUTTON];
      items.push(<button className="ui button orange topButton" key = '4' onClick={this.handleUndoShow.bind(this)}>{CurrLang.gameBoard.buttons.undo}:&nbsp;{CurrLang.gameBoard.undo[undoType]}</button>);
    } else {
      items.push(<button className="ui button orange topButton" key = '4' disabled>{CurrLang.gameBoard.buttons.undo}</button>);
    }

    items.push(
      <div className="messageArea" key = '5'>
        {this.renderMsgAreaItems(game, user)}
      </div>
    );    
        
    return (
      <div className="row" id="topRow">
        {items}
      </div>
      );
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

    return (
      <div className="ui container">
        {/* Header */}
        <GameHeader user={user}/>

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
                <div className="quarter-circle-top-right"></div>
                <div id="landingArea">
                  <br></br>
                  <p id="landingText">{CurrLang.gameBoard.handArea.card}</p>
                </div>
                {this.renderHandAreaLines(game, user)}
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
                  <img src={"/images/" + pointCard + ".png"} draggable="false" key={pointCard}></img>
                ))}
            </div>
          </div>
          {(game.stage == GameStages.FINISHED) ? (
            <div id="finishedShadow"></div>
          ): null}
        </div> 
      </div>
    )
  }
}
