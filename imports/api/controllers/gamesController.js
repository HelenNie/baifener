import {Game} from "../models/game.js";
import Games from "../collections/games.js";

export let GamesController = {
  newGame(user) {
    let game = new Game();
    game.userJoin(user);
    Games.saveGame(game);
  },

  userJoinGame(gameId, user, callback) {
    let game = Games.findOne(gameId);
    if (game) {
      game.userJoin(user);
      Games.saveGame(game);
    }
  },

  userLeaveGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userLeave(user);
    Games.saveGame(game);
  },

  userDrawCardGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userDrawCard(user);
    Games.saveGame(game);
  },

  userOpenDiGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userOpenDi(user);
    Games.saveGame(game);
  },

  userCardMigrationGame(gameId, user, card) {
    let game = Games.findOne(gameId);
    game.userCardMigration(user, card);
    Games.saveGame(game);
  },

  userStartGameGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userStartGame(user);
    Games.saveGame(game);
  },

  userClearTableGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userClearTable(user);
    Games.saveGame(game);
  },

  userClearPrevTableGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userClearPrevTable(user);
    Games.saveGame(game);
  },

  userThreeFromDiGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userThreeFromDi(user);
    Games.saveGame(game);
  },

  userEndTurnGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userEndTurn(user);
    Games.saveGame(game);
  },

  userSetCardLocGame(gameId, user, card, x, y, simple) {
    let game = Games.findOne(gameId);
    game.userSetCardLoc(user, card, x, y, simple);
    Games.saveGame(game);
  },

  userSetZIndexGame(gameId, user, card, z) {
    let game = Games.findOne(gameId);
    game.userSetZIndex(card, z);
    Games.saveGame(game);
  },

  userSeePrevTableGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userSeePrevTable();
    Games.saveGame(game);
  },

  userRestartGameGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userRestartGame();
    Games.saveGame(game);
  },

  userEndGameGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userEndGame();
    Games.saveGame(game);
  },

  userSetFirstDrawerGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userSetFirstDrawer(user);
    Games.saveGame(game);
  },

  userConfirmOpenDiGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userConfirmOpenDi(user);
    Games.saveGame(game);
  },

  userCancelOpenDiGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userCancelOpenDi();
    Games.saveGame(game);
  },

  userSetRoleGame(gameId, user, role) {
    let game = Games.findOne(gameId);
    game.userSetRole(user, role);
    Games.saveGame(game);
  },

  userErrorAwayGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userErrorAway(user);
    Games.saveGame(game);
  },

  userModalShowGame(gameId, user, modal) {
    let game = Games.findOne(gameId);
    game.userModalShow(user, modal);
    Games.saveGame(game);
  },

  userModalAwayGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userModalAway(user);
    Games.saveGame(game);
  },

  userModalAwayAllGame(gameId) {
    let game = Games.findOne(gameId);
    game.userModalAwayAll();
    Games.saveGame(game);
  },

  userUndoShowGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userUndoShow(user);
    Games.saveGame(game);
  },

  userUndoAwayGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userUndoAway(user);
    Games.saveGame(game);
  },

  userUndoGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userUndo(user);
    Games.saveGame(game);
  },

  userWrapUpGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userWrapUp(user);
    Games.saveGame(game);
  },

  userDelayedModalAlreadyGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userDelayedModalAlready(user);
    Games.saveGame(game);
  },

  userSetSoundEffectGame(gameId, user, soundEffect) {
    let game = Games.findOne(gameId);
    game.userSetSoundEffect(soundEffect);
    Games.saveGame(game);
  },
}
