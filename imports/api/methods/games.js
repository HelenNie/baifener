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

export const userClearTableGame = new ValidatedMethod({
  name: 'games.userClearTableGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userClearTableGame(gameId, Meteor.user());
  }
});

export const userClearPrevTableGame = new ValidatedMethod({
  name: 'games.userClearPrevTableGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userClearPrevTableGame(gameId, Meteor.user());
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
    y:  {type: Number},
    simple: {type: Boolean}
  }).validator(),
  run({gameId, card, x, y, simple}) {
    GamesController.userSetCardLocGame(gameId, Meteor.user(), card, x, y, simple);
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

export const userRestartGameGame = new ValidatedMethod({
  name: 'games.userRestartGameGame',
  validate: new SimpleSchema({
    gameId: {type: String},
  }).validator(),
  run({gameId}) {
    GamesController.userRestartGameGame(gameId, Meteor.user());
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

export const userErrorAwayGame = new ValidatedMethod({
  name: 'games.userErrorAwayGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userErrorAwayGame(gameId, Meteor.user());
  }
});

export const userModalShowGame = new ValidatedMethod({
  name: 'games.userModalShowGame',
  validate: new SimpleSchema({
    gameId: {type: String},
    modal: {type: String}
  }).validator(),
  run({gameId, modal}) {
    GamesController.userModalShowGame(gameId, Meteor.user(), modal);
  }
});

export const userModalAwayGame = new ValidatedMethod({
  name: 'games.userModalAwayGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userModalAwayGame(gameId, Meteor.user());
  }
});

export const userModalAwayAllGame = new ValidatedMethod({
  name: 'games.userModalAwayAllGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userModalAwayAllGame(gameId);
  }
});

export const userUndoShowGame = new ValidatedMethod({
  name: 'games.userUndoShowGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userUndoShowGame(gameId, Meteor.user());
  }
});

export const userUndoAwayGame = new ValidatedMethod({
  name: 'games.userUndoAwayGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userUndoAwayGame(gameId, Meteor.user());
  }
});

export const userUndoGame = new ValidatedMethod({
  name: 'games.userUndoGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userUndoGame(gameId, Meteor.user());
  }
});

export const userWrapUpGame = new ValidatedMethod({
  name: 'games.userWrapUpGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userWrapUpGame(gameId, Meteor.user());
  }
});

export const userDelayedModalAlreadyGame = new ValidatedMethod({
  name: 'games.userDelayedModalAlreadyGame',
  validate: new SimpleSchema({
    gameId: {type: String}
  }).validator(),
  run({gameId}) {
    GamesController.userDelayedModalAlreadyGame(gameId, Meteor.user());
  }
});