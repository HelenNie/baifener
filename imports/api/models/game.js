import { Users } from '../../ui/LoginForm.jsx';

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
  WRAPUP: 'WRAPUP',
  FINISHED: 'FINISHED'
}

export const Partners = {};
for (var i = 0; i < Users.length; i++) {
  var partnerIdx = (i+2) % Users.length;
  Partners[Users[i]] = Users[partnerIdx];
}

export const NumPlayers = 4;

export const SuitsMap = {'H':'hearts', 'S':'spade', 'D':'diamond', 'C':'clover'}
export const RanksMap = {'three':'3', 'five':'5', 'ten':'T', 'king':'K', 'joker':'O'}

export const DeckComplete = ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S", "TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS", "KC", "KD", "KH", "KS", "OA", "OB"]
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
    threeShower: '',
    retrievedThree: false,
    hands: {},
    taiXiaPoints: [],
    threeFromDiDone: false,
    threeFromDiCount: 0,
    turnCycleCount: 0,
    clearTableActive: false,
    collectPointsActive: false,
    underdogs: []
  },
  TEST_DRAWING: {
    status: GameStatuses.WAITING,
    statusito: GameStatusitos.DRAWING,
    currentPlayerIndex: 0,
    deck: ["ZC", "ZD", "ZH", "ZS", "3C", "6C", "6D", "6H", "6S", "7C", "2C", "2D", "2H", "2S", "3D", "7D", "7H", "7S", "8C", "8D", "4C", "4D", "4H", "4S", "3H", "8H", "8S", "9C", "9D", "9H", "5C", "5D", "5H", "5S", "3S", "9S", "TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS"],
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpen: false,
    diOpener: "",
    diOpened: false,
    zhu: "",
    nextCard: 40,
    shownThree: false,
    threeShower: '',
    retrievedThree: false,
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "6C", "6D", "6H", "6S", "7C", "3C"],
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
    underdogs: []
  },
  TEST_THREE: {
    status: GameStatuses.WAITING,
    statusito: GameStatusitos.DI,
    currentPlayerIndex: -1,
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "3H", "OA"],
    currTableCards: {},
    prevTableCards: {},
    diOpen: false,
    diOpener: "",
    diOpened: false,
    zhu: "",
    nextCard: 48,
    shownThree: false,
    threeShower: '',
    retrievedThree: false,
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "6S", "9S", "QS", "3S"],
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
    underdogs: []
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
    threeShower: '',
    retrievedThree: false,
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "OB", "9S", "QS", "3S"],
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
    underdogs: []
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
    threeShower: '',
    retrievedThree: false,
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "OA", "9S", "QS", "3S"],
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
    underdogs: []
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
    threeShower: '',
    retrievedThree: false,
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "6S", "9S", "QS", "3S"],
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
    underdogs: []
  },
  TEST_PLAYING: { //Login in one,two,three,four order for this.underdogs to work properly
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
    threeShower: 'one',
    retrievedThree: true,
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S"],
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
    underdogs: ['two', 'four']
  },
  TEST_WRAPUP: {
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
    threeShower: 'one',
    retrievedThree: true,
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
    underdogs: ['two', 'four']
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
      this.threeShower = CurrTestState.threeShower;
      this.retrievedThree = CurrTestState.retrievedThree;
      this.hands = CurrTestState.hands;
      this.taiXiaPoints = CurrTestState.taiXiaPoints;
      this.threeFromDiDone = CurrTestState.threeFromDiDone;
      this.threeFromDiCount = CurrTestState.threeFromDiCount;
      this.turnCycleCount = CurrTestState.turnCycleCount;
      this.clearTableActive = CurrTestState.clearTableActive;
      this.collectPointsActive = CurrTestState.collectPointsActive;
      this.underdogs = CurrTestState.underdogs;

      //Not in test states
      this.partners = Partners;
      this.players = [];
      this.cardLocations = {};
      for (var i = 0; i < DeckComplete.length; i++) {
        this.cardLocations[DeckComplete[i]] = {x: 0, y: 0};
      }
      this.currCycleNumCards = 0;
      this.currTurnNumCards = 0;
      this.highestZIndex = 0;
      this.cardZIndexes = {};
      for (var i = 0; i < DeckComplete.length; i++) {
        this.cardZIndexes[DeckComplete[i]] = 0;
      }
      this.seePrevTableActive = false;
    }
  }

/**
   * Return a list of fields that are required for permanent storage
   *
   * @return {[]String] List of fields required persistent storage
   */
  persistentFields() {
    return ['status', 'statusito', 'players', 'deck', 'di', 'currTableCards', 'prevTableCards', 'diOpen', 'nextCard', 'shownThree', 'hands', 'currentPlayerIndex', 'diOpener', 'startGameCount', 'zhu', 'taiXiaPoints', 'threeFromDiDone', 'threeFromDiCount', 'turnCycleCount', 'numPlayers', 'partners', 'diOpened', 'clearTableActive', 'cardLocations', 'collectPointsActive', 'currTurnNumCards', 'currCycleNumCards', 'highestZIndex', 'underdogs', 'seePrevTableActive', 'cardZIndexes', 'threeShower', 'retrievedThree'];
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
        console.log("Players: ", this.players);
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
    console.log(user.username, " drew: ", card);

    this.nextCard = this.nextCard + 1;
    if (this.nextCard == this.deck.length) {
      this.statusito = GameStatusitos.DI;
      this.currentPlayerIndex = -1;
      return;
    }
  }

  userShowOrRetrieveThree(user, card) {
    if (!this.shownThree) {
      if (card.slice(0,1) != RanksMap['three']) {
        console.log("That's not a 3...");
        return;
      }
      var index = this.hands[user.username].indexOf(card);
      this.hands[user.username].splice(index, 1);
      this.zhu = card.slice(-1);
      this.threeShower = user.username;
      this.currTableCards[card] = this.threeShower;
      this.shownThree = true;

      this.userSetCardLoc(card, 0, 0);

      console.log(user.username + " liang " + card);

    } else if (!this.retrievedThree) {
      if (user.username != this.threeShower) {
        console.log("That's not your 3...");
        return;
      }
      this.hands[user.username].push(card);
      delete this.currTableCards[card];
      this.retrievedThree = true;

      this.cardZIndexes[card] = ++this.highestZIndex;

      console.log(user.username, " took three back");

    } else {
      console.log("Already showed 3...");
    }
  }

  userThreeFromDi(user) {
    var card = this.di[this.threeFromDiCount];
    this.threeFromDiCount = this.threeFromDiCount + 1;

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
      console.log("Zhu: ", SuitsMap[this.zhu]);
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

      //Set who underdogs are based on diOpener
      var topDogs = [this.diOpener, Partners[this.diOpener]];
      for (var player in Partners) {
        if (player != topDogs[0] && player != topDogs[1]) {
          this.underdogs = [player, Partners[player]];
        }
      }

      //retrieve 3 if still on table
      if (this.shownThree && !this.retrievedThree) {
        var three = RanksMap['three']+this.zhu;
        console.log(three);
        delete this.currTableCards[three];
        this.hands[this.threeShower].push(three);
        this.retrievedThree = true;
        this.cardZIndexes[three] = ++this.highestZIndex;
        console.log("Three retrieved");
      }

      this.currentPlayerIndex = this.usernameToIndex(this.diOpener);
    } 
    this.diOpen = !this.diOpen;
  }

  userSwapHandAndDi(user,card) {
    if (user.username == this.diOpener) {
      if(this.di.indexOf(card) > -1) {
        var index = this.di.indexOf(card);
        this.di.splice(index, 1);
        this.hands[user.username].push(card);
        this.cardZIndexes[card] = ++this.highestZIndex;
      } else {
        if (this.di.length == DiLength) {
          console.log("Di already has 6 cards");
          return;
        }
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
  }

  userStartGame(user) {
    if(this.di.length == DiLength) {
      this.statusito = GameStatusitos.PLAYING;
      this.diOpen = false;
      console.log("Game started");
    } else {
      console.log("Di need 6 cards to start game");
    }
  }

  userPlayOrTakeBackCard(user, card) {
    if(card in this.currTableCards) {
      if (this.currentPlayerIndex == this.userIdToIndex(user._id)) {
        delete this.currTableCards[card];
        this.hands[user.username].push(card);
        this.currTurnNumCards--;
        this.cardZIndexes[card] = ++this.highestZIndex;
        console.log(user.username, " took card back");
      } else {
        console.log("Not your turn");
      }
    } else {
      if (this.currentPlayerIndex == -1) {
        if (this.clearTableActive) {
          console.log("Clear table first before playing!");
          return;
        }
        this.currentPlayerIndex = this.userIdToIndex(user._id);
        this.seePrevTableActive = false;
        console.log("Turns reset");
      }
      if (this.currentPlayerIndex == this.userIdToIndex(user._id)) {
        var index = this.hands[user.username].indexOf(card);
        this.hands[user.username].splice(index, 1);
        this.currTableCards[card] = user.username;
        this.userSetCardLoc(card, 0, 0);
        this.currTurnNumCards++;
        console.log(user.username, " played card");
      } else {
        console.log("Not your turn");
      }
    }
  }

  userEndTurn(user) {
    if (this.currTurnNumCards == 0) {
      console.log("You did not play any cards!");
      return;
    }
    if (this.turnCycleCount % NumPlayers == 0) {
      this.currCycleNumCards = this.currTurnNumCards;
    } else {
      if (this.currTurnNumCards != this.currCycleNumCards) {
        console.log("You did not play the right number of cards!");
        return;
      }
    }

    this.currentPlayerIndex = (this.currentPlayerIndex+1) % NumPlayers;
    this.turnCycleCount = this.turnCycleCount + 1;
    this.currTurnNumCards = 0;

    if (this.turnCycleCount % NumPlayers == 0) {
      this.currentPlayerIndex = -1;
      if (this.userPointsOnTable()) {
        this.collectPointsActive = true;
      }
      this.clearTableActive = true;
      this.prevTableCards = this.currTableCards;
    }
    console.log("End turn");
  }

  userClearTable(user) {
    this.currTableCards = {};
    this.clearTableActive = false;
    this.collectPointsActive = false;
    this.seePrevTableActive = true;
    if (this.hands[user.username].length == 0 && this.currentPlayerIndex == -1) {
      this.statusito = GameStatusitos.WRAPUP;
      this.seePrevTableActive = false;
      if (this.userPointsInDi()) {
        this.collectPointsActive = true;
      } else {
        this.userEndGame();
      }
    }
    console.log("Table cleared");
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
      this.userEndGame();
    } else {
      var card = '';
      for (var card in this.currTableCards) {
        if (pointCards.indexOf(card.charAt(0)) >= 0) {
          this.taiXiaPoints.push(card);
          delete this.currTableCards[card];
          console.log("Collected: ", card);
        }
      }
    }
    this.collectPointsActive = false;
  }

  userSeePrevTable() {
    this.currTableCards = this.prevTableCards;
    this.seePrevTableActive = false;
    this.clearTableActive = true;

    console.log("See previous table");
  }

  userPointsOnTable() {
    var pointCards = [RanksMap['five'], RanksMap['ten'], RanksMap['king']];
    var tableCards = Object.keys(this.currTableCards);
    for (var i = 0; i < tableCards.length; i++) {
      if (pointCards.indexOf(tableCards[i].charAt(0)) >= 0) {
        return true;
      }
    }
    return false;
  }

  userPointsInDi() {
    var pointCards = [RanksMap['five'], RanksMap['ten'], RanksMap['king']];
    for (var i = 0; i < this.di.length; i++) {
      if (pointCards.indexOf(this.di[i].charAt(0)) >= 0) {
        return true;
      }
    }
    return false;
  }

  userSetCardLoc(card, x, y) {
    this.cardLocations[card].x = x;
    this.cardLocations[card].y = y;
  }

  userGetHighestZIndex() {
    return this.highestZIndex;
  }

  userSetZIndex(card, z) {
    this.cardZIndexes[card] = z;
    this.highestZIndex = z;
  }

  userEndGame() {
    this.status = GameStatuses.FINISHED;
    this.statusito = GameStatusitos.FINISHED;

    this.currTableCards = {};
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
