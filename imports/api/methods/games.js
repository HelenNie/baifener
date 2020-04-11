import {GamesController} from "../controllers/gamesController.js";

export const newGame = new ValidatedMethod({
  name: 'games.newGame',
  validate: new SimpleSchema({}).validator(),
  run({}) {
    GamesController.newGame(Meteor.user());
  }
});

export const userJoinGame = new ValidatedMethod({
  name: 'games.userJoinGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userJoinGame(gameId, Meteor.user());
  }
});

export const userLeaveGame = new ValidatedMethod({
  name: 'games.userLeaveGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userLeaveGame(gameId, Meteor.user());
  }
});

export const userMarkGame = new ValidatedMethod({
  name: 'games.userMarkGame',
  validate: new SimpleSchema({
    gameId: {type: String},
    row: {type: Number},
    col: {type: Number}
  }).validator(),
  run({gameId, row, col}) {
    GamesController.userMarkGame(gameId, Meteor.user(), row, col);
  }
});

export const userDrawCardGame = new ValidatedMethod({
  name: 'games.userDrawCardGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userDrawCardGame(gameId, Meteor.user());
  }
});

export const userOpenCloseDiGame = new ValidatedMethod({
  name: 'games.userOpenCloseDiGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userOpenCloseDiGame(gameId, Meteor.user());
  }
});

export const userCardMigrationGame = new ValidatedMethod({
  name: 'games.userCardMigrationGame',
  validate: new SimpleSchema({
    gameId: {type: String},
    card: {type: String}
  }).validator(),
  run({gameId, card}) {
    GamesController.userCardMigrationGame(gameId, Meteor.user(), card);
  }
});

export const userStartGameGame = new ValidatedMethod({
  name: 'games.userStartGameGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userStartGameGame(gameId, Meteor.user());
  }
});

export const userPlayCardGame = new ValidatedMethod({
  name: 'games.userPlayCardGame',
  validate: new SimpleSchema({
    gameId: {type: String},
    card: {type: String},
  }).validator(),
  run({gameId, card}) {
    GamesController.userPlayCardGame(gameId, Meteor.user(), card);
  }
});

export const userTakeBackCardGame = new ValidatedMethod({
  name: 'games.userTakeBackCardGame',
  validate: new SimpleSchema({
    gameId: {type: String},
    card: {type: String},
  }).validator(),
  run({gameId, card}) {
    GamesController.userTakeBackCardGame(gameId, Meteor.user(), card);
  }
});

export const userClearTableGame = new ValidatedMethod({
  name: 'games.userClearTableGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userClearTableGame(gameId, Meteor.user());
  }
});

export const userLiangThreeGame = new ValidatedMethod({
  name: 'games.userLiangThreeGame',
  validate: new SimpleSchema({
    gameId: {type: String},
    card: {type: String}
  }).validator(),
  run({gameId, card}) {
    GamesController.userLiangThreeGame(gameId, Meteor.user(), card);
  }
});

export const userTakeBackThreeGame = new ValidatedMethod({
  name: 'games.userTakeBackThreeGame',
  validate: new SimpleSchema({
    gameId: {type: String},
    card: {type: String}
  }).validator(),
  run({gameId, card}) {
    GamesController.userTakeBackThreeGame(gameId, Meteor.user(), card);
  }
});

export const userCollectPointsGame = new ValidatedMethod({
  name: 'games.userCollectPointsGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userCollectPointsGame(gameId, Meteor.user());
  }
});

export const userThreeFromDiGame = new ValidatedMethod({
  name: 'games.userThreeFromDiGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userThreeFromDiGame(gameId, Meteor.user());
  }
});

export const userRevealDiGame = new ValidatedMethod({
  name: 'games.userRevealDiGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userRevealDiGame(gameId, Meteor.user());
  }
});

export const userTaixiaPointsGame = new ValidatedMethod({
  name: 'games.userTaixiaPointsGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userTaixiaPointsGame(gameId, Meteor.user());
  }
});

export const userEndTurnGame = new ValidatedMethod({
  name: 'games.userEndTurnGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userEndTurnGame(gameId, Meteor.user());
  }
});

export const userSetCardLocGame = new ValidatedMethod({
  name: 'games.userSetCardLocGame',
  validate: new SimpleSchema({
    gameId: {type: String},
    card: {type: String},
    x:  {type: Number},
    y:  {type: Number}
  }).validator(),
  run({gameId, card, x, y}) {
    GamesController.userSetCardLocGame(gameId, card, x, y);
  }
});