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

export const userDrawCardGame = new ValidatedMethod({
  name: 'games.userDrawCardGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userDrawCardGame(gameId, Meteor.user());
  }
});

export const userOpenDiGame = new ValidatedMethod({
  name: 'games.userOpenDiGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userOpenDiGame(gameId, Meteor.user());
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

export const userSetZIndexGame = new ValidatedMethod({
  name: 'games.userSetZIndexGame',
  validate: new SimpleSchema({
    gameId: {type: String},
    card: {type: String},
    z: {type: Number}
  }).validator(),
  run({gameId, card, z}) {
    GamesController.userSetZIndexGame(gameId, Meteor.user(), card, z);
  }
});

export const userSeePrevTableGame = new ValidatedMethod({
  name: 'games.userSeePrevTableGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userSeePrevTableGame(gameId, Meteor.user());
  }
});

export const userEndGameGame = new ValidatedMethod({
  name: 'games.userEndGameGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userEndGameGame(gameId, Meteor.user());
  }
});

export const userPointsOnTableGame = new ValidatedMethod({
  name: 'games.userPointsOnTableGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userPointsOnTableGame(gameId, Meteor.user());
  }
});

export const userSetFirstDrawerGame = new ValidatedMethod({
  name: 'games.userSetFirstDrawerGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userSetFirstDrawerGame(gameId, Meteor.user());
  }
});

export const userConfirmOpenDiGame = new ValidatedMethod({
  name: 'games.userConfirmOpenDiGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userConfirmOpenDiGame(gameId, Meteor.user());
  }
});

export const userCancelOpenDiGame = new ValidatedMethod({
  name: 'games.userCancelOpenDiGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userCancelOpenDiGame(gameId, Meteor.user());
  }
});

export const userSetRoleGame = new ValidatedMethod({
  name: 'games.userSetRoleGame',
  validate: new SimpleSchema({
    gameId: {type: String},
    role: {type: String}
  }).validator(),
  run({gameId, role}) {
    GamesController.userSetRoleGame(gameId, Meteor.user(), role);
  }
});