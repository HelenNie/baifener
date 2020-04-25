import {Game} from "../models/game.js";
import Games from "../collections/games.js";

export let GamesController = {
  newGame(user) {
    let game = new Game();
    game.userJoin(user);
    Games.saveGame(game);
  },

  userJoinGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userJoin(user);
    Games.saveGame(game);
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

  userPlayCardGame(gameId, user, card) {
    let game = Games.findOne(gameId);
    game.userPlayCard(user, card);
    Games.saveGame(game);
  },

  userTakeBackCardGame(gameId, user, card) {
    let game = Games.findOne(gameId);
    game.userTakeBackCard(user, card);
    Games.saveGame(game);
  },

  userClearTableGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userClearTable();
    Games.saveGame(game);
  },

  userLiangThreeGame(gameId, user, card) {
    let game = Games.findOne(gameId);
    game.userLiangThree(user, card);
    Games.saveGame(game);
  },
  
  userTakeBackThreeGame(gameId, user, card) {
    let game = Games.findOne(gameId);
    game.userTakeBackThree(user, card);
    Games.saveGame(game);
  },

  userCollectPointsGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userCollectPoints();
    Games.saveGame(game);
  },

  userThreeFromDiGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userThreeFromDi(user);
    Games.saveGame(game);
  },

  userRevealDiGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userRevealDi(user);
    Games.saveGame(game);
  },

  userTaixiaPointsGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userTaixiaPoints(user);
    Games.saveGame(game);
  },

  userEndTurnGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userEndTurn(user);
    Games.saveGame(game);
  },

  userSetCardLocGame(gameId, card, x, y) {
    let game = Games.findOne(gameId);
    game.userSetCardLoc(card, x, y);
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

  userEndGameGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userEndGame();
    Games.saveGame(game);
  },

  userPointsOnTableGame(gameId, user) {
    let game = Games.findOne(gameId);
    game.userPointsOnTable();
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
}
