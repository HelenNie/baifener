import { Users, Partners } from '../../ui/LoginForm.jsx';

export const GameStatuses = {
  WAITING: 'WAITING', 
  STARTED: 'STARTED',
  FINISHED: 'FINISHED',
  ABANDONED: 'ABANDONED'
};

export const GameStages = {
  SET_UP: 'SET_UP',
  DRAW: 'DRAW',
  DONE_DRAWING: 'DONE_DRAWING',
  FIND_THREE_IN_DI: 'FIND_THREE_IN_DI',
  DI: 'DI',
  PLAY: 'PLAY',
  WRAP_UP: 'WRAP_UP',
  FINISHED: 'FINISHED'
};

export const ModalStates = {
  NONE: 'NONE',
  SET_ROLE: 'SET_ROLE',
  SET_ROLE_AGAIN: 'SET_ROLE_AGAIN',
  SET_DRAW_FIRST: 'SET_DRAW_FIRST',
  OPEN_DI: 'OPEN_DI',
}

export const ThreeStates = {
  NOT_SHOWN: 'NOT_SHOWN',
  SHOWN: 'SHOWN',
  RETRIEVED: 'RETRIEVED'
};

export const TableStates = {
  NONE: 'NONE',
  CLEAR_TABLE: 'CLEAR_TABLE',
  SEE_PREV_TABLE: 'SEE_PREV_TABLE',
  CLEAR_PREV_TABLE: 'CLEAR_PREV_TABLE'
};

export const Roles = {
  DEFENDER: 'DEFENDER', 
  ATTACKER: 'ATTACKER',
  TBD: 'TBD',
};

export const NumPlayers = 4;
export const DiLength = 6;

export const SuitsMap = {'H':'heart', 'S':'spade', 'D':'diamond', 'C':'club'};
export const RanksMap = {three:'3', joker:'O'};
export const PointsMap = {'5': 5, 'T': 10, 'K': 10};

//turn into card objects
export const DeckComplete = ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S", "TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS", "KC", "KD", "KH", "KS", "OA", "OB"];
export const DeckNoDi = DeckComplete.slice().sort(function(a, b){return 0.5 - Math.random()});
export const Di = DeckNoDi.splice(0, DiLength);

export const CardLocMax = {
  x: 10,
  y: 5
}
export const CardLandingLoc = {x: 12, y: 0}; // make calculated: width area / width card
export const ZIndexBase = 2;

export const TestStates = {
  REAL: {
    status: GameStatuses.WAITING,
    stage: GameStages.SET_UP,
    modalState: ModalStates.SET_ROLE,
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    currentPlayerIndex: -1,
    firstDrawer: '',
    deck: DeckNoDi,
    di: Di,
    currTableCards: {},
    prevTableCards: {},
    diOpener: "",
    zhu: "",
    nextCardIndex: 0,
    threeShower: '',
    hands: {},
    taiXiaPoints: [],
    threeFromDiCount: 0,
    turnCycleCount: 0,
    playerRoles: {}
  }
  ,
  TEST_DRAWING: {
    status: GameStatuses.WAITING,
    stage: GameStages.DRAW,
    modalState: ModalStates.NONE,
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    currentPlayerIndex: 0,
    firstDrawer: 'two',
    deck: ["ZC", "ZD", "ZH", "ZS", "3C", "6C", "6D", "6H", "6S", "7C", "2C", "2D", "2H", "2S", "3D", "7D", "7H", "7S", "8C", "8D", "4C", "4D", "4H", "4S", "3H", "8H", "8S", "9C", "9D", "9H", "5C", "5D", "5H", "5S", "3S", "9S", "TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS"],
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpener: "",
    zhu: "",
    nextCardIndex: 40,
    threeShower: '',
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "6C", "6D", "6H", "6S", "7C", "3C"],
      'two': ["2C", "2D", "2H", "2S", "7D", "7H", "7S", "8C", "8D", "3D"],
      'three': ["4C", "4D", "4H", "4S", "8H", "8S", "9C", "9D", "9H", "3H"],
      'four': ["5C", "5D", "5H", "5S", "9S", "TC", "TD", "TH", "TS", "3S"]
    },
    taiXiaPoints: [],
    threeFromDiCount: 0,
    turnCycleCount: 0,
    playerRoles: {'one': 'TBD', 'two': 'TBD', 'three': 'TBD', 'four': 'TBD'}
  },
  TEST_THREE: {
    status: GameStatuses.WAITING,
    stage: GameStages.DONE_DRAWING,
    modalState: ModalStates.NONE,
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    currentPlayerIndex: -1,
    firstDrawer: 'two',
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "3H", "OA"],
    currTableCards: {},
    prevTableCards: {},
    diOpener: "",
    zhu: "",
    nextCardIndex: 48,
    threeShower: '',
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "6S", "9S", "QS", "3S"],
      'two': ["4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "3C"],
      'three': ["7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "3D"],
      'four': ["TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "OB"]
    },
    taiXiaPoints: [],
    threeFromDiCount: 0,
    turnCycleCount: 0,
    playerRoles: {'one': 'DEFENDER', 'two': 'ATTACKER', 'three': 'DEFENDER', 'four': 'ATTACKER'}
  },
  TEST_SUIT_FROM_DI: {
    status: GameStatuses.WAITING,
    stage: GameStages.DONE_DRAWING,
    modalState: ModalStates.NONE,
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    currentPlayerIndex: -1,
    firstDrawer: 'two',
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "OA", "6S"],
    currTableCards: {},
    prevTableCards: {},
    diOpener: "",
    zhu: "",
    nextCardIndex: 48,
    threeShower: '',
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "OB", "9S", "QS", "3S"],
      'two': ["4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "3C"],
      'three': ["7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "3D"],
      'four': ["TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "3H"]
    },
    taiXiaPoints: [],
    threeFromDiCount: 0,
    turnCycleCount: 0,
    playerRoles: {'one': 'defender', 'two': 'attacker', 'three': 'defender', 'four': 'attacker'}
  },
  TEST_SUIT_FROM_DI_JOKER_1: {
    status: GameStatuses.WAITING,
    stage: GameStages.DONE_DRAWING,
    modalState: ModalStates.NONE,
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    currentPlayerIndex: -1,
    firstDrawer: 'two',
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "6S", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpener: "",
    zhu: "",
    nextCardIndex: 48,
    threeShower: '',
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "OA", "9S", "QS", "3S"],
      'two': ["4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "3C"],
      'three': ["7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "3D"],
      'four': ["TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "3H"]
    },
    taiXiaPoints: [],
    threeFromDiCount: 0,
    turnCycleCount: 0,
    playerRoles: {'one': 'defender', 'two': 'attacker', 'three': 'defender', 'four': 'attacker'}
  },
  TEST_SUIT_FROM_DI_JOKER_2: {
    status: GameStatuses.WAITING,
    stage: GameStages.DONE_DRAWING,
    modalState: ModalStates.NONE,
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    currentPlayerIndex: -1,
    firstDrawer: 'two',
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpener: "",
    zhu: "",
    nextCardIndex: 48,
    threeShower: '',
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "6S", "9S", "QS", "3S"],
      'two': ["4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "3C"],
      'three': ["7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "3D"],
      'four': ["TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "3H"]
    },
    taiXiaPoints: [],
    threeFromDiCount: 0,
    turnCycleCount: 0,
    playerRoles: {'one': 'defender', 'two': 'attacker', 'three': 'defender', 'four': 'attacker'}
  },
  TEST_PLAYING: { //Login in one,two,three,four order for roles to work properly
    status: GameStatuses.WAITING,
    stage: GameStages.PLAY,
    modalState: ModalStates.NONE,
    threeState: ThreeStates.RETRIEVED,
    tableState: TableStates.NONE,
    currentPlayerIndex: 0,
    firstDrawer: 'two',
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpener: "one",
    zhu: "H",
    nextCardIndex: 48,
    threeShower: 'one',
    hands: {
      'one': ["ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S"],
      'two': ["4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S"],
      'three': ["7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S"],
      'four': ["TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS"]
    },
    taiXiaPoints: [],
    threeFromDiCount: 0,
    turnCycleCount: 0,
    playerRoles: {'one': 'defender', 'two': 'attacker', 'three': 'defender', 'four': 'attacker'}
  },
  TEST_WRAPUP: { //Login in one,two,three,four order for roles to work properly
    status: GameStatuses.WAITING,
    stage: GameStages.PLAY,
    modalState: ModalStates.NONE,
    threeState: ThreeStates.RETRIEVED,
    tableState: TableStates.NONE,
    currentPlayerIndex: 0,
    firstDrawer: 'two',
    deck: DeckNoDi,
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    currTableCards: {},
    prevTableCards: {},
    diOpener: "one",
    zhu: "H",
    nextCardIndex: 48,
    threeShower: 'one',
    hands: {
      'one': ["3S"],
      'two': ["6S"],
      'three': ["9S"],
      'four': ["TC"]
    },
    taiXiaPoints: ["5C", "5D", "5H", "5S"],
    threeFromDiCount: 0,
    turnCycleCount: 0,
    playerRoles: {'one': 'defender', 'two': 'attacker', 'three': 'defender', 'four': 'attacker'}
  }
};

export const CurrTestState = TestStates.TEST_THREE;

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
      this.players = [];
      this.status = CurrTestState.status;
      this.stage = CurrTestState.stage;
      this.modalState = CurrTestState.modalState;
      this.threeState = CurrTestState.threeState;
      this.tableState = CurrTestState.tableState;
      this.zhu = CurrTestState.zhu;

      //Streamline to index or username
      this.currentPlayerIndex = CurrTestState.currentPlayerIndex;
      this.nextCardIndex = CurrTestState.nextCardIndex; //just pop cards from di?
      this.diOpener = CurrTestState.diOpener;
      this.firstDrawer = CurrTestState.firstDrawer;
      this.threeShower = CurrTestState.threeShower;
      this.threeFromDiCount = CurrTestState.threeFromDiCount;
      this.turnCycleCount = CurrTestState.turnCycleCount;

      this.playerRoles = CurrTestState.playerRoles; //merge into player objects
      this.hands = CurrTestState.hands; //merge into player objects

      this.currTableCards = CurrTestState.currTableCards;
      this.prevTableCards = CurrTestState.prevTableCards;
      this.deck = CurrTestState.deck;
      this.di = CurrTestState.di;
      this.taiXiaPoints = CurrTestState.taiXiaPoints;
      

      //Not in test states
      this.cardLocations = {}; //merge into card objects
      this.cardLocMngrLocs = {}; //merge into card objects
      this.cardLocMngr = {};
      this.cardZIndexes = {}; //merge into card objects
      this.highestZIndex = ZIndexBase;
      this.currCycleNumCards = 0; //label as counter
      this.currTurnNumCards = 0; //label as counter
      this.diOriginal = this.di;
    }
  }

/**
   * Return a list of fields that are required for permanent storage
   *
   * @return {[]String] List of fields required persistent storage
   */
  persistentFields() {
    return ['status', 'stage', 'modalState', 'threeState', 'tableState', 'players', 'deck', 'di', 'currTableCards', 'prevTableCards', 'nextCardIndex', 'hands', 'currentPlayerIndex', 'diOpener', 'zhu', 'taiXiaPoints', 'threeFromDiCount', 'turnCycleCount', 'cardLocations', 'cardLocMngr', 'currTurnNumCards', 'currCycleNumCards', 'highestZIndex', 'cardZIndexes', 'threeShower', 'diOriginal', 'playerRoles', 'firstDrawer', 'cardLocMngrLocs'];
  }


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

    //If all four players are present
    if (this.players.length == NumPlayers) {
      this.setUpGame();
    }
  }

  setUpGame() {
    this.arrangeSeating();

    if (CurrTestState == TestStates.REAL) {
      for (var i = 0; i < this.players.length; i++) {
        this.hands[this.players[i].username] = [];
      }
    }

    for (var i = 0; i < DeckComplete.length; i++) {
      this.cardLocations[DeckComplete[i]] = {x: CardLandingLoc.x, y: CardLandingLoc.y};
    }

    for (var i = 0; i < DeckComplete.length; i++) {
      this.cardLocMngrLocs[DeckComplete[i]] = {x: -1, y: -1};
    }

    for (var i = 0; i <this.players.length; i++) {
      this.cardLocMngr[this.players[i].username] = [];
      for (var j = 0; j < CardLocMax.y; j++) {
        //Including 1 buffer slot at the end of each row array for middle step when moving cards within full row
        this.cardLocMngr[this.players[i].username].push(Array(CardLocMax.x + 1));
      }
    }

    for (var i = 0; i < DeckComplete.length; i++) {
      this.cardZIndexes[DeckComplete[i]] = ZIndexBase;
    }

    this.status = GameStatuses.STARTED;
  }

  arrangeSeating() {
    //place partners across from each other
    var player1Name = this.players[0].username;
    var partnerName = Partners[player1Name];

    var player3 = this.players[2];
    var player3Name = player3.username;
    
    if (player3Name != partnerName) {
      var partnerIdx = 1;
      if (this.players[1].username != partnerName) {
        partnerIdx = 3;
      }
      this.players[2] = this.players[partnerIdx];
      this.players[partnerIdx] = player3;
    }
  }

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

  userSetRole(user, role) {
    this.playerRoles[user.username] = role;

    //If all players have clicked role, check if roles make sense
    if (Object.keys(this.playerRoles).length == NumPlayers) { 
      var attackers = [];
      var defenders = [];
      var tbd = [];

      for (var player in this.playerRoles) {
        switch (this.playerRoles[player]) {
          case Roles.ATTACKER:
            attackers.push(player);
            break;
          case Roles.DEFENDER:
            defenders.push(player);
            break;
          default:
            tbd.push(player);
            break;
        }
      }

      var partnersAgree = (this.playerRoles[user.username] == this.playerRoles[Partners[user.username]]);

      if ((attackers.length == 2 && defenders.length == 2 && partnersAgree) || tbd.length == 4) {
        this.modalState = ModalStates.SET_DRAW_FIRST;
      } else {
        this.playerRoles = {};
        this.modalState = ModalStates.SET_ROLE_AGAIN;
      }
    }
  }

  userSetFirstDrawer(user) {
    this.currentPlayerIndex = this.userIdToIndex(user._id);
    this.firstDrawer = user.username;
    this.modalState = ModalStates.NONE;
    this.stage = GameStages.DRAW;
  }

  userDrawCard(user) {
    let card = this.deck[this.nextCardIndex];
    this.prepCardForHand(user, card);
    this.hands[user.username].push(card);

    this.currentPlayerIndex = (this.currentPlayerIndex+1) % NumPlayers;
    this.nextCardIndex = this.nextCardIndex + 1;
    if (this.nextCardIndex == this.deck.length) {
      this.currentPlayerIndex = -1;
      this.stage = GameStages.DONE_DRAWING;
    }

    console.log(user.username, " drew: ", card);
  }

  prepCardForHand(user, card) {
    this.cardZIndexes[card] = ++this.highestZIndex;
  }

  userCardMigration(user, card) {
    if (this.threeState == ThreeStates.NOT_SHOWN) {
      this.userShowThree(user, card);
    } else if (this.threeState == ThreeStates.SHOWN) {
      this.userRetrieveThree(user, card);
    } else if (this.stage == GameStages.DI && this.di.indexOf(card) > -1) {
      this.userTakeCardfromDi(user, card);
    } else if (this.stage == GameStages.DI) {
      this.userPutCardInDi(user, card);
    } else if (this.stage == GameStages.PLAY && (this.hands[user.username].indexOf(card) > -1)) {
      this.userPlayCard(user,card);
    } else if (this.stage == GameStages.PLAY) {
      this.userTakeBackCard(user,card);
    }
  }

  userShowThree(user, card) {
    if (card.slice(0,1) != RanksMap.three) {
      console.log("That's not a 3...");
      return;
    }

    this.prepCardForLeavingHand(user, card);
    this.currTableCards[card] = user.username;
    this.zhu = card.slice(-1);
    this.threeShower = user.username;
    this.threeState = ThreeStates.SHOWN;

    //Set attacker and defender roles if still TBD
    if (this.playerRoles[user.username] == Roles.TBD) {
      this.setPlayerRoles();
    }
    console.log(user.username + " liang " + card);
  }

  prepCardForLeavingHand(user, card) {
    var x = this.cardLocations[card].x;
    var y = this.cardLocations[card].y;

    this.cardLocMngr[user.username][y][x] = null;
    this.cardLocMngrLocs[card] = {x: -1, y: - 1};
    this.userSetCardLoc(user, card, CardLandingLoc.x, CardLandingLoc.y, true);

    this.userSetCardLocFillSpace(user, x, y, CardLocMax.x-1);

    var index = this.hands[user.username].indexOf(card);
    this.hands[user.username].splice(index, 1);
  }

  setPlayerRoles() {
    var player;
    for (var i = 0; i < this.players.length; i++) {
      player = this.players[i];
      if (player.username == this.threeShower || player.username == Partners[this.threeShower]) {
        this.playerRoles[player.username] = Roles.DEFENDER;
      } else {
        this.playerRoles[player.username] = Roles.ATTACKER;
      }
    }
  }

  userRetrieveThree(user, three) {
    if (user.username != this.threeShower) {
      console.log("That's not your 3...");
      return;
    }
    this.retrieveThreeHelper(user, three);    
  }

  retrieveThreeHelper(user, three) {
    this.prepCardForHand(user, three);
    this.hands[this.threeShower].push(three);
    delete this.currTableCards[three];
    this.threeState = ThreeStates.RETRIEVED;

    console.log(this.threeShower, " took three back");
  }

  userThreeFromDi(user) {
    let card = '';
    let suit = '';
    for (var i = 0; i < this.di.length; i++) {
      card = this.di[i];
      suit = card.slice(-1);
      if (card.slice(0,1) == RanksMap.three) {
        this.threeFromDiCount = i+1;
        break;
      } else if (i == this.di.length - 1) {
        //If last 1 or 2 cards of di are joker(s) 
        if (card.slice(0,1) == RanksMap.joker) {
          if (this.di[i-1].slice(0,1) != RanksMap.joker) {
            suit = this.di[i-1].slice(-1);
          } else {
            suit = this.di[i-2].slice(-1);
          }
        }
        this.threeFromDiCount = i+1;
        break; 
      }
    }
    this.zhu = suit;
    this.threeState = ThreeStates.RETRIEVED;
    this.stage = GameStages.FIND_THREE_IN_DI;
    console.log("Zhu: ", SuitsMap[this.zhu]);
  }

  userOpenDi(user) {
    this.modalState = ModalStates.OPEN_DI;
    this.diOpener = user.username;
  }

  userCancelOpenDi() {
    this.modalState = ModalStates.NONE;
    this.diOpener = '';
  }

  userConfirmOpenDi(user) {
    this.diOpener = user.username;
    this.currentPlayerIndex = this.usernameToIndex(this.diOpener);
    this.modalState = ModalStates.NONE;
    this.stage = GameStages.DI;

    //retrieve 3 if still on table
    if (this.threeState == ThreeStates.SHOWN) {
      var three = RanksMap.three + this.zhu;
      this.retrieveThreeHelper(user, three);
    }
  }

  userTakeCardfromDi(user, card) {
    var index = this.di.indexOf(card);
    this.prepCardForHand(user, card);
    this.hands[user.username].push(card);
    this.di.splice(index, 1);
  }

  userPutCardInDi(user, card) {
    if (user.username != this.diOpener) {
      console.log("You are not diOpener");
      return;
    }
    if (this.di.length == DiLength) {
      console.log("Di already has 6 cards");
      return;
    } 
    this.prepCardForLeavingHand(user, card);
    this.di.push(card);
  }

  userStartGame(user) {
    if(this.di.length != DiLength) {
      console.log("Di need 6 cards to start game");
      return;
    }
    this.stage = GameStages.PLAY;
    console.log("Game started");
  }

  userPlayCard(user, card) {
    if (this.currentPlayerIndex != this.usernameToIndex(user.username)) {
      console.log("Not your turn");
      return;
    }
    if (this.tableState == TableStates.CLEAR_PREV_TABLE) {
      console.log("Clear the table first!");
      return;
    }
    this.tableState = TableStates.NONE;
    this.prepCardForLeavingHand(user, card);
    this.currTableCards[card] = user.username;
    this.currTurnNumCards++;
    console.log(user.username, " played card");
  }

  userTakeBackCard(user, card) {
    if (this.currTableCards[card] != user.username) {
      console.log("That is not your card!");
      return;
    }
    if (this.currentPlayerIndex != this.usernameToIndex(user.username)) {
      console.log("It is not your turn!");
      return;
    }
    if (this.tableState == TableStates.CLEAR_PREV_TABLE) {
      console.log("That card is from the last round!");
      return;
    }
    this.prepCardForHand(user, card);
    this.hands[user.username].push(card);
    delete this.currTableCards[card];
    this.currTurnNumCards--;
    console.log(user.username, " took card back");
  }

  userEndTurn(user) {
    if (this.currTurnNumCards == 0) {
      console.log("You did not play any cards!");
      return;
    }
    if (this.playedWrongNumCards()) {
      console.log("You did not play the right number of cards!");
      return;
    }
    
    this.currTurnNumCards = 0;
    this.currentPlayerIndex = (this.currentPlayerIndex+1) % NumPlayers;
    this.turnCycleCount = this.turnCycleCount + 1;

    //if all four players have gone, activate clear table
    if (this.turnCycleCount % NumPlayers == 0) {
      this.currentPlayerIndex = -1;
      this.prevTableCards = this.currTableCards;
      this.tableState = TableStates.CLEAR_TABLE;
    }
    console.log("End turn");
  }

  playedWrongNumCards() {
    if (this.turnCycleCount % NumPlayers != 0) {
      if (this.currTurnNumCards != this.currCycleNumCards) {
        return true;
      }
    } else {
      this.currCycleNumCards = this.currTurnNumCards;
    }
    return false;
  }

  //combine these two helper methods once currTable and di are both arrays of card objects
  userCollectPointsTable(user) {
    if (this.playerRoles[user.username] == Roles.DEFENDER) {
      return;
    }
    for (var card in this.currTableCards) {
      if (Object.keys(PointsMap).indexOf(card.slice(0, 1)) >= 0) {
        this.taiXiaPoints.push(card);
        delete this.currTableCards[card];
        console.log("Collected: ", card);
      }
    }
  }

  userCollectPointsDi(user) {
    if (this.playerRoles[user.username] == Roles.DEFENDER) {
      return;
    }
    for (let i = this.di.length - 1; i > -1; i--) {
      if (Object.keys(PointsMap).indexOf(this.di[i].slice(0, 1)) >= 0) {
        this.taiXiaPoints.push(this.di[i]);
        this.di.splice(i, 1);
        console.log("Collected: ", this.di[i]);
      }
    }
  }

  userClearTable(user) {
    this.userCollectPointsTable(user);
    //Pause
    this.currTableCards = {};
    this.currentPlayerIndex = this.usernameToIndex(user.username);
    this.tableState = TableStates.SEE_PREV_TABLE;
    console.log("Table cleared");

    if (this.hands[user.username].length == 0) {
      //Pause
      this.currentPlayerIndex = -1;
      this.tableState = TableStates.NONE;
      this.stage = GameStages.WRAP_UP;
      this.userWrapUp(user);
    }
  }

  userClearPrevTable(user) {
    this.currTableCards = {};
    this.tableState = TableStates.SEE_PREV_TABLE;
  }

  userSeePrevTable() {
    this.currTableCards = this.prevTableCards;
    this.tableState = TableStates.CLEAR_PREV_TABLE;
  }

  userWrapUp(user) {
    //Pause
    this.userCollectPointsDi(user);
    //pause
    console.log("Wrapped up");
    this.userEndGame();
  }

  userEndGame() {
    this.currTableCards = {};

    //Restore original di if diOpener is in the middle of switching out
    if ((this.stage ==  GameStages.DI) && (this.di.length != DiLength)) {
      this.di = this.diOriginal;
      var card;
      var index;
      for (var i = this.hands[this.diOpener].length - 1; i >= 0; i--) {
        card = this.hands[this.diOpener][i];
        index = this.di.indexOf(card);
        if (index > -1) {
          this.hands[this.diOpener].splice(index, 1);
        }
      }
    }

    this.stage = GameStages.FINISHED;
    this.status = GameStatuses.FINISHED;
  }

  userSetCardLoc(user, card, x, y, simple) {
    if (simple) {
      //adding card to hand or during dragging
      this.cardLocations[card] = {x: x, y: y};
      return;
    }

    var xOld = this.cardLocMngrLocs[card].x;
    var yOld = this.cardLocMngrLocs[card].y;
    var yGroup = this.cardLocMngr[user.username][y];
    var displacedCard;

    //console.log("yGroup: ", yGroup);

    if (card == yGroup[x]) {
      //no location change
      return;
    } else if (!(x < CardLocMax.x || yGroup[CardLocMax.x-1] == null || (yGroup[CardLocMax.x-1] != null && x == CardLocMax.x && y == yOld))) {
      //return card to previous location if dropoff slot is out-of-bounds or row is full, but exception for moving card already in a full row to the end of the row
      xOld = (xOld != -1) ? xOld : CardLandingLoc.x;
      yOld = (yOld != -1) ? yOld : CardLandingLoc.y;
      this.cardLocations[card] = {x: xOld, y: yOld};
    } else if (yGroup[x] == null) {
      //add card to empty dropoff slot
      this.userSetCardLocOldHelper(user, xOld, yOld);
      var lastX = this.userSetCardLocAddToEndHelper(user, x, y);
      this.userSetCardLocNewHelper(user, card, lastX, y);
      //console.log("Set loc for: ", card);
    } else if (y == yOld && x > xOld) {
      //if moving card back in same row, fill space then add card
      displacedCard = "" + yGroup[x].slice(0);
      this.userSetCardLocNewHelper(user, card, x, y);
      this.userSetCardLocHelper(user, displacedCard, x + 1, y);
      this.userSetCardLocOldHelper(user, xOld, yOld);
    } else {
      //if card is displacing another card, recurse
      displacedCard = "" + yGroup[x].slice(0);
      this.userSetCardLocOldHelper(user, xOld, yOld);
      this.userSetCardLocNewHelper(user, card, x, y);
      //console.log("Set loc for: ", card);
      this.userSetCardLocHelper(user, displacedCard, x + 1, y);
    }
  }

  userSetCardLocHelper(user, card, x, y) {
    var yGroup = this.cardLocMngr[user.username][y];
    var displacedCard;

    if (yGroup[x] == null) {
      this.userSetCardLocNewHelper(user, card, x, y);
      //console.log("Set loc for (R): ", card);
    } else {
      displacedCard = "" + yGroup[x].slice(0);
      this.userSetCardLocNewHelper(user, card, x, y);
      //console.log("Set loc for (R): ", card);
      this.userSetCardLocHelper(user, displacedCard, x + 1, y);
    }
  }

  userSetCardLocOldHelper(user, xOld, yOld) {
    if (xOld == -1) {
      return;
    }
    this.cardLocMngr[user.username][yOld][xOld] = null;
    this.userSetCardLocFillSpaceHelper(user, xOld, yOld);
  }

  userSetCardLocNewHelper(user, card, x, y) {
    this.cardLocMngr[user.username][y][x] = card;
    this.cardLocMngrLocs[card] = {x: x, y: y};
    this.cardLocations[card] = {x: x, y: y}
  }

  userSetCardLocFillSpaceHelper(user, x, y, xEnd){
    var yGroup = this.cardLocMngr[user.username][y];

    //change to while loop
    for (var i = x; i < CardLocMax.x; i++) {
      if (yGroup[i + 1] != null) {
        yGroup[i] = "" + yGroup[i + 1].slice(0);
        yGroup[i + 1] = null;
        this.cardLocMngrLocs[yGroup[i]] = {x: i, y: y};
        this.cardLocations[yGroup[i]] = {x: i, y: y}
      } else {
        break;
      }
    }
  }

  userSetCardLocAddToEndHelper(user, x, y){
    var yGroup = this.cardLocMngr[user.username][y];

    if (yGroup[0] == null) return 0;
    while (yGroup[x-1] == null) x--;
    return x;
  }

  userSetZIndex(card, z) {
    this.cardZIndexes[card] = z;
    this.highestZIndex = z;
  }


  //Below are external helper methods with return values

  getHighestZIndex() {
    return this.highestZIndex;
  }

  getCurrentPlayerIndex() {
    if (this.status !== GameStatuses.STARTED) {
      return null;
    }
    return this.currentPlayerIndex;
  }

  getFirstPlayerShown() {
    if (this.stage == GameStages.PLAY) {
      return this.usernameToIndex(this.diOpener);
    } else if (this.firstDrawer != '') {
      return this.usernameToIndex(this.firstDrawer);
    } else {
      return 0;
    }
  }

  getCurrPlayer() {
    if (this.getCurrentPlayerIndex() !== null && this.getCurrentPlayerIndex() > -1) {
      return this.players[this.getCurrentPlayerIndex()].username;
    }
    return '';
  }

  arePartners(user1, user2) {
    return Partners[user1] == user2;
  }

  showCurrPlayerBorder(user) {
    var bool = true;
    bool = bool && (this.getCurrentPlayerIndex() !== null && this.getCurrentPlayerIndex() > -1);
    bool = bool && (this.tableState != TableStates.CLEAR_PREV_TABLE);
    bool = bool && (this.stage != GameStages.DI);
    return bool;
  }

  disableTableArea(user) {
    var bool = false;
    bool = bool || (this.tableState == TableStates.CLEAR_PREV_TABLE);
    bool = bool || (this.stage == GameStages.DI);
    return bool;
  }

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
