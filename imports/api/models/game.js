export const GameStatuses = {
  WAITING: 'WAITING',  // waiting player to join
  STARTED: 'STARTED',  // all spots are filled; can start playing
  FINISHED: 'FINISHED', // game is finished
  ABANDONED: 'ABANDONED' // all players left; game is abandoned
}

export const GameStatusitos = {
  DRAWING: 'DRAWING', 
  DI: 'DI',
  PLAYING: 'PLAYING',
  WRAPUP: 'WRAPUP'
}

export const Partners = {'one':'three', 'three':'one', 'two':'four', 'four':'two'};
export const NumPlayers = 4;

export const SuitsMap = {'H':'hearts', 'S':'spade', 'D':'diamond', 'C':'clover'}
export const RanksMap = {'three':'3', 'five':'5', 'ten':'T', 'king':'K', 'joker':'O'}

export const DeckComplete = ["AC", "AD", "AH", "AS", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S", "TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS", "KC", "KD", "KH", "KS", "OA", "OB"]
export const DeckNoDi = DeckComplete.slice().sort(function(a, b){return 0.5 - Math.random()})
export const DiLength = 6;
export const Di = DeckNoDi.splice(0, DiLength)

export const TestStates = {
  REAL: {
    status: GameStatuses.WAITING,
    statusito: GameStatusitos.DRAWING,
    currentPlayerIndex: -1,
    deck: DeckNoDi,
    di: Di,
    currTableCards: {},
    prevTableCards: {},
    diOpen: false,
    diOpener: "",
    diOpened: false,
    zhu: "",
    nextCard: 0,
    shownThree: false,
    hands: {},
    taiXiaPoints: [],
    threeFromDiDone: false,
    threeFromDiCount: 0,
    turnCycleCount: 0,
    clearTableActive: false,
    collectPointsActive: false,
  },
  TEST_DRAWING: {
    status: GameStatuses.WAITING,
    statusito: GameStatusitos.DRAWING,
    currentPlayerIndex: 0,
    deck: ["AC", "AD", "AH", "AS", "3C", "6C", "6D", "6H", "6S", "7C", "2C", "2D", "2H", "2S", "3D", "7D", "7H", "7S", "8C", "8D", "4C", "4D", "4H", "4S", "3H", "8H", "8S", "9C", "9D", "9H", "5C", "5D", "5H", "5S", "3S", "9S", "TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS"],
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpen: false,
    diOpener: "",
    diOpened: false,
    zhu: "",
    nextCard: 40,
    shownThree: false,
    hands: {
      'one': ["AC", "AD", "AH", "AS", "6C", "6D", "6H", "6S", "7C", "3C"],
      'two': ["2C", "2D", "2H", "2S", "7D", "7H", "7S", "8C", "8D", "3D"],
      'three': ["4C", "4D", "4H", "4S", "8H", "8S", "9C", "9D", "9H", "3H"],
      'four': ["5C", "5D", "5H", "5S", "9S", "TC", "TD", "TH", "TS", "3S"]
    },
    taiXiaPoints: [],
    threeFromDiDone: false,
    threeFromDiCount: 0,
    turnCycleCount: 0,
    clearTableActive: false,
    collectPointsActive: false,
  },
  TEST_THREE: {
    status: GameStatuses.WAITING,
    statusito: GameStatusitos.DI,
    currentPlayerIndex: -1,
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "OA", "3H"],
    currTableCards: {},
    prevTableCards: {},
    diOpen: false,
    diOpener: "",
    diOpened: false,
    zhu: "",
    nextCard: 48,
    shownThree: false,
    hands: {
      'one': ["AC", "AD", "AH", "AS", "2C", "2D", "2H", "2S", "6S", "9S", "QS", "3S"],
      'two': ["4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "3C"],
      'three': ["7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "3D"],
      'four': ["TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "OB"]
    },
    taiXiaPoints: [],
    threeFromDiDone: false,
    threeFromDiCount: 0,
    turnCycleCount: 0,
    clearTableActive: false,
    collectPointsActive: false,
  },
  TEST_SUIT_FROM_DI: {
    status: GameStatuses.WAITING,
    statusito: GameStatusitos.DI,
    currentPlayerIndex: -1,
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "OA", "6S"],
    currTableCards: {},
    prevTableCards: {},
    diOpen: false,
    diOpener: "",
    diOpened: false,
    zhu: "",
    nextCard: 48,
    shownThree: false,
    hands: {
      'one': ["AC", "AD", "AH", "AS", "2C", "2D", "2H", "2S", "OB", "9S", "QS", "3S"],
      'two': ["4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "3C"],
      'three': ["7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "3D"],
      'four': ["TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "3H"]
    },
    taiXiaPoints: [],
    threeFromDiDone: false,
    threeFromDiCount: 0,
    turnCycleCount: 0,
    clearTableActive: false,
    collectPointsActive: false,
  },
  TEST_SUIT_FROM_DI_JOKER_1: {
    status: GameStatuses.WAITING,
    statusito: GameStatusitos.DI,
    currentPlayerIndex: -1,
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "6S", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpen: false,
    diOpener: "",
    diOpened: false,
    zhu: "",
    nextCard: 48,
    shownThree: false,
    hands: {
      'one': ["AC", "AD", "AH", "AS", "2C", "2D", "2H", "2S", "OA", "9S", "QS", "3S"],
      'two': ["4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "3C"],
      'three': ["7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "3D"],
      'four': ["TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "3H"]
    },
    taiXiaPoints: [],
    threeFromDiDone: false,
    threeFromDiCount: 0,
    turnCycleCount: 0,
    clearTableActive: false,
    collectPointsActive: false,
  },
  TEST_SUIT_FROM_DI_JOKER_2: {
    status: GameStatuses.WAITING,
    statusito: GameStatusitos.DI,
    currentPlayerIndex: -1,
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpen: false,
    diOpener: "",
    diOpened: false,
    zhu: "",
    nextCard: 48,
    shownThree: false,
    hands: {
      'one': ["AC", "AD", "AH", "AS", "2C", "2D", "2H", "2S", "6S", "9S", "QS", "3S"],
      'two': ["4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "3C"],
      'three': ["7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "3D"],
      'four': ["TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "3H"]
    },
    taiXiaPoints: [],
    threeFromDiDone: false,
    threeFromDiCount: 0,
    turnCycleCount: 0,
    clearTableActive: false,
    collectPointsActive: false,
  },
  TEST_PLAYING: {
    status: GameStatuses.WAITING,
    statusito: GameStatusitos.PLAYING,
    currentPlayerIndex: 0,
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpen: false,
    diOpener: "one",
    diOpened: true,
    zhu: "H",
    nextCard: 48,
    shownThree: true,
    hands: {
      'one': ["AC", "AD", "AH", "AS", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S"],
      'two': ["4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S"],
      'three': ["7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S"],
      'four': ["TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS"]
    },
    taiXiaPoints: [],
    threeFromDiDone: false,
    threeFromDiCount: 0,
    turnCycleCount: 0,
    clearTableActive: false,
    collectPointsActive: false,
  },
  TEST_WRAPUP: {
    status: GameStatuses.WAITING,
    statusito: GameStatusitos.PLAYING,
    currentPlayerIndex: -1,
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpen: false,
    diOpener: "one",
    diOpened: true,
    zhu: "H",
    nextCard: 48,
    shownThree: true,
    hands: {
      'one': ["3S"],
      'two': ["6S"],
      'three': ["9S"],
      'four': ["TC"]
    },
    taiXiaPoints: ["5C", "5D", "5H", "5S"],
    threeFromDiDone: false,
    threeFromDiCount: 0,
    turnCycleCount: 0,
    clearTableActive: false,
    collectPointsActive: false,
  }
}

export const CurrTestState = TestStates.REAL;

/**
 * Game model, encapsulating game-related logics 
 * It is data store independent
 */
export class Game {
  /**
   * Constructor accepting a single param gameDoc.
   * gameDoc should contain the permanent fields of the game instance.
   * Normally, the fields are saved into data store, and later get retrieved
   *
   * If gameDoc is not given, then we will instantiate a new object with default fields
   *
   * @param {Object} [gameDoc] Optional doc retrieved from Games collection
   */
  constructor(gameDoc) {
    if (gameDoc) {
      _.extend(this, gameDoc);
    } else {
      this.status = CurrTestState.status;
      this.statusito = CurrTestState.statusito;
      this.currentPlayerIndex = CurrTestState.currentPlayerIndex;
      this.deck = CurrTestState.deck;
      this.di = CurrTestState.di;
      this.currTableCards = CurrTestState.currTableCards;
      this.prevTableCards = CurrTestState.prevTableCards;
      this.diOpen = CurrTestState.diOpen;
      this.diOpener = CurrTestState.diOpener;
      this.diOpened = CurrTestState.diOpened;
      this.zhu = CurrTestState.zhu;
      this.nextCard = CurrTestState.nextCard;
      this.shownThree = CurrTestState.shownThree;
      this.hands = CurrTestState.hands;
      this.taiXiaPoints = CurrTestState.taiXiaPoints;
      this.threeFromDiDone = CurrTestState.threeFromDiDone;
      this.threeFromDiCount = CurrTestState.threeFromDiCount;
      this.turnCycleCount = CurrTestState.turnCycleCount;
      this.clearTableActive = CurrTestState.clearTableActive;
      this.collectPointsActive = CurrTestState.collectPointsActive;

      //Not in test states
      this.partners = Partners;
      this.players = [];
      this.cardLocations = {};
      for (var i = 0; i < DeckComplete.length; i++) {
        this.cardLocations[DeckComplete[i]] = {x: 0, y: 0};
      }
    }
  }

/**
   * Return a list of fields that are required for permanent storage
   *
   * @return {[]String] List of fields required persistent storage
   */
  persistentFields() {
    return ['status', 'statusito', 'players', 'deck', 'di', 'currTableCards', 'prevTableCards', 'diOpen', 'nextCard', 'shownThree', 'hands', 'currentPlayerIndex', 'diOpener', 'startGameCount', 'zhu', 'taiXiaPoints', 'threeFromDiDone', 'threeFromDiCount', 'turnCycleCount', 'numPlayers', 'partners', 'diOpened', 'clearTableActive', 'cardLocations', 'collectPointsActive'];
  }

/**
   * Handle join game action
   *
   * @param {User} user Meteor.user object
   */
  userJoin(user) {
    if (this.status !== GameStatuses.WAITING) {
      throw "cannot join at current state";
    }

    if (this.userIdToIndex(user._id) !== null) {
      throw "user already in game";
    }

    this.players.push({
      userId: user._id,
      username: user.username
    });

    if (this.players.length == NumPlayers) {
      //place partners across from each other
      var player1Name = this.players[0].username;
      var partnerName = this.partners[player1Name];

      var player3 = this.players[2];
      var player3Name = player3.username;
      
      if (player3Name != partnerName) {
        var partnerIdx = 1;
        if (this.players[1].username != partnerName) {
          partnerIdx = 3;
        }
        this.players[2] = this.players[partnerIdx];
        this.players[partnerIdx] = player3;
        console.log(this.players)
      }
      
      if (CurrTestState == TestStates.REAL){
        for (var i = 0; i < this.players.length; i++){
          this.hands[this.players[i].username] = [];
        }
      }

      this.status = GameStatuses.STARTED;
    }
  }

/**
   * Handle leave game action
   *
   * @param {User} user Meteor.user object
   */
  userLeave(user) {
    if (this.status !== GameStatuses.WAITING) {
      throw "cannot leave at current state";
    }
    if (this.userIdToIndex(user._id) === null) {
      throw "user not in game";
    }
    this.players = _.reject(this.players, (player) => {
      return player.userId === user._id;
    });

    // game is considered abandoned when all players left
    if (this.players.length === 0) {
      this.status = GameStatuses.ABANDONED;
    }
  }

  userDrawCard(user) {
    if (this.currentPlayerIndex == -1) {
      this.currentPlayerIndex = this.userIdToIndex(user._id);
    }
    this.currentPlayerIndex = (this.currentPlayerIndex+1) % NumPlayers;

    let card = this.deck[this.nextCard];
    this.hands[user.username].push(card);
    console.log("drew: "+card);
    console.log(this.hands);

    this.nextCard = this.nextCard + 1;
    if (this.nextCard == this.deck.length) {
      this.statusito = GameStatusitos.DI;
      this.currentPlayerIndex = -1;
      return;
    }
  }

  userShowOrRetrieveThree(user, card) {
    if (card.slice(0,1) == RanksMap['three']) {
      if(card in this.currTableCards) {
        delete this.currTableCards[card];
        this.hands[user.username].push(card);
        console.log(user.username, " took three back");
        console.log(this.hands);
      } else {
        var index = this.hands[user.username].indexOf(card);
        this.hands[user.username].splice(index, 1);
        this.currTableCards[card] = user.username;
        this.userSetCardLoc(card, 0, 0);

        this.shownThree = true;
        this.zhu = card.slice(-1);

        console.log(user.username + " liang " + card);
        console.log(this.hands);
      }
    } else {
      console.log("That's not a 3...");
    }
  }

  userThreeFromDi(user) {
    var card = this.di[this.threeFromDiCount];
    this.threeFromDiCount = this.threeFromDiCount + 1;

    this.currTableCards[card] = user.username;

    let suit = card.slice(-1);
    if (card.slice(0,1) == RanksMap['three'] || this.threeFromDiCount == this.di.length) {
      //If last 1 or 2 cards of di are joker(s) 
      if (card.slice(0,1) == RanksMap['joker']) {
        if (this.di[this.threeFromDiCount-2].slice(0,1) != RanksMap['joker']) {
          suit = this.di[this.threeFromDiCount-2].slice(-1);
        } else {
          suit = this.di[this.threeFromDiCount-3].slice(-1);
        }
      }
      this.zhu = suit;
      this.threeFromDiDone = true;
      console.log("zhu: ", SuitsMap[this.zhu]);
      console.log(this.hands);
    }
  }

  userOpenCloseDi(user) {
    if (this.di.length != DiLength && this.diOpen) {
      console.log("Di is not 6 cards");
      return;
    }
    if (!this.diOpened) {
      this.diOpened = true;
      this.diOpener = user.username;
      this.currentPlayerIndex = this.usernameToIndex(this.diOpener);

      //take three back if left on table
      if (this.shownThree && Object.keys(this.currTableCards).length !== 0) {
        var card = '3'+this.zhu;
        var username = this.currTableCards[card];
        this.hands[username].push(card);
      }
      //clear table of 3 or di cards
      this.currTableCards = {};
    } 
    if (user.username == this.diOpener) {
      this.diOpen = !this.diOpen;
    }
  }

  userSwapHandAndDi(user,card) {
    if (user.username == this.diOpener) {
      if(this.di.indexOf(card) > -1) {
        var index = this.di.indexOf(card);
        this.di.splice(index, 1);
        this.hands[user.username].push(card);
      } else {
        var index = this.hands[user.username].indexOf(card);
        this.hands[user.username].splice(index, 1);
        this.di.push(card);
        this.userSetCardLoc(card, 0, 0);
      }
    } else {
      console.log("You're not di opener");
    }
  }

  userCardMigration(user, card) {
    if (this.statusito == GameStatusitos.DRAWING || (this.statusito == GameStatusitos.DI && !this.diOpened && this.threeFromDiCount == 0)) {
      this.userShowOrRetrieveThree(user, card);
    } else if (this.statusito == GameStatusitos.DI && this.diOpen) {
      this.userSwapHandAndDi(user, card);
    } else if (this.statusito == GameStatusitos.PLAYING) {
      this.userPlayOrTakeBackCard(user,card);
    }
    console.log("here");
    console.log(this.hands);
  }

  userStartGame(user) {
    if(this.di.length == DiLength) {
      this.statusito = GameStatusitos.PLAYING;
      this.diOpen = false;
      console.log("game started");
      console.log(this.hands);
    } else {
      console.log("di need 6 cards to start game");
    }
  }

  userPlayOrTakeBackCard(user, card) {
    if(card in this.currTableCards) {
      if (this.currentPlayerIndex == this.userIdToIndex(user._id)) {
        delete this.currTableCards[card];
        this.hands[user.username].push(card);
        console.log(user.username, " took card back");
      } else {
        console.log("Not your turn");
      }
    } else {
      if (this.currentPlayerIndex == -1) {
        this.currentPlayerIndex = this.userIdToIndex(user._id);
        console.log("turns reset");
      } else if (this.currentPlayerIndex == this.userIdToIndex(user._id)) {
        var index = this.hands[user.username].indexOf(card);
        this.hands[user.username].splice(index, 1);
        this.currTableCards[card] = user.username;
        this.userSetCardLoc(card, 0, 0);
        console.log(user.username, " played card");
      } else {
        console.log("Not your turn");
      }
    }
  }

  userEndTurn(user) {
    console.log("end turn");
    this.currentPlayerIndex = (this.currentPlayerIndex+1) % NumPlayers;
    this.turnCycleCount = this.turnCycleCount + 1;
    if (this.turnCycleCount % NumPlayers == 0) {
      this.currentPlayerIndex = -1;
      this.collectPointsActive = true;
    }
  }

  userClearTable(user) {
    this.prevTableCards = this.currTableCards;
    this.currTableCards = {};
    this.clearTableActive = false;
    if (this.hands[user.username].length == 0 && this.currentPlayerIndex == -1) {
      this.statusito = GameStatusitos.WRAPUP;
      this.collectPointsActive = true;
    }
    console.log("table cleared");
  }

  userCollectPoints() {
    var pointCards = [RanksMap['five'], RanksMap['ten'], RanksMap['king']];
    if (this.statusito == GameStatusitos.WRAPUP) {
      for (let i = this.di.length - 1; i > -1; i--) {
        if (pointCards.indexOf(this.di[i].charAt(0)) >= 0) {
          this.taiXiaPoints.push(this.di[i]);
          this.di.splice(i, 1);
        }
      }
    } else {
      var card = '';
      for (var card in this.currTableCards) {
        if (pointCards.indexOf(card.charAt(0)) >= 0) {
          this.taiXiaPoints.push(card);
          delete this.currTableCards[card];
          console.log("collected: ", card);
        }
      }
    }
    this.collectPointsActive = false;
    if(this.statusito != GameStatusitos.WRAPUP) {
      this.clearTableActive = true;
    }
  }

  userSetCardLoc(card, x, y) {
    this.cardLocations[card].x = x;
    this.cardLocations[card].y = y;
  }

 /**
   * @return {Number} currentPlayerIndex 0 or 1
   */
  getCurrentPlayerIndex() {
    if (this.status !== GameStatuses.STARTED) {
      return null;
    }
    return this.currentPlayerIndex;
  }

/**
   * Helper method to retrieve the player index of a user
   *
   * @param {User} user Meteor.user object
   * @return {Number} index 0-based index, or null if not found
   */
  userIdToIndex(userId) {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].userId === userId) {
        return i;
      }
    }
    return null;
  }

  usernameToIndex(username) {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].username === username) {
        return i;
      }
    }
    return null;
  }
}
