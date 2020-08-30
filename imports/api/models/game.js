import Games from "../collections/games.js";

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
  SET_ROLE_WAITING: 'SET_ROLE_WAITING',
  SET_ROLE_AGAIN: 'SET_ROLE_AGAIN',
  SET_ROLE_AGAIN_WAITING: 'SET_ROLE_AGAIN_WAITING',
  SET_DRAW_FIRST_DEFENDER: 'SET_DRAW_FIRST_DEFENDER',
  SET_DRAW_FIRST_ATTACKER: 'SET_DRAW_FIRST_ATTACKER',
  RESTART_GAME: 'RESTART_GAME',
  END_GAME: 'END_GAME',
  END_GAME_NOTICE: 'END_GAME_NOTICE',
  RESTART_FULL: 'RESTART_FULL',
};

export const ErrorStates = {
  NONE: 'NONE',
  NOT_THREE: 'NOT_THREE',
  ALREADY_SHOWN_THREE: 'ALREADY_SHOWN_THREE',
  NOT_YOUR_TURN: 'NOT_YOUR_TURN',
  CLEAR_TABLE_FIRST: 'CLEAR_TABLE_FIRST',
};

export const UndoParams = {
  BUTTON: 'BUTTON',
  MODAL: 'MODAL',
  ROLE: 'ROLE'
};

export const UndoStates = {
  NONE: 'NONE',
  SHOW_THREE: 'SHOW_THREE',
  OPEN_DI: 'OPEN_DI',
  START_GAME: 'START_GAME',
  PLAY_CARDS: 'PLAY_CARDS',
  CLEAR_TABLE: 'CLEAR_TABLE'
};

export const UndoRoles = {
  NONE: 'NONE',
  UNDOER: 'UNDOER',
  NOTICEE: 'NOTICEE',
}

export const ThreeStates = {
  NOT_SHOWN: 'NOT_SHOWN',
  SHOWN: 'SHOWN',
  RETRIEVED: 'RETRIEVED'
};

export const TableStates = {
  NONE: 'NONE',
  CLEAR_TABLE: 'CLEAR_TABLE',
  SEE_PREV_TABLE_FIRST: 'SEE_PREV_TABLE_FIRST',
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
export const WinningPoints = 40;

export const DeckComplete = ["4C", "4D", "4H", "4S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S", "TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS", "KC", "KD", "KH", "KS", "OA", "OB", "ZC", "ZD", "ZH", "ZS", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "5C", "5D", "5H", "5S"];

//Adjust with CSS for #handArea, #landingArea, and .body
export const CardSize = {x: 55, y: 76.984};
export const CardSlotMargin = {x: 0, y: 25};
export const CardSlotSize = {x: CardSize.x + CardSlotMargin.x, y: CardSize.y + CardSlotMargin.y};
export const CardLocMax = {x: 8, y: 5}; //Based on making sufficient space for arranging cards
export const CardLandingLoc = {x: 0, y: 0}; //Offset right from arranged cards with space in betweeen
export const CardFirstRowMinIdx = 2;

export const ZIndexBase = 2;

export const TestStates = {
  REAL: {
    status: GameStatuses.WAITING,
    stage: GameStages.SET_UP,
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    modalByPlayer: {},
    errorByPlayer: {},
    undoByPlayer: {},
    currentPlayerIndex: -1,
    firstDrawer: '',
    deck: [],
    di: [],
    diPreWrap: [],
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
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    modalByPlayer: {
      'one': ModalStates.NONE,
      'two': ModalStates.NONE,
      'three': ModalStates.NONE,
      'four': ModalStates.NONE
    },
    errorByPlayer: {
      'one': ErrorStates.NONE,
      'two': ErrorStates.NONE,
      'three': ErrorStates.NONE,
      'four': ErrorStates.NONE
    },
    undoByPlayer: {
      'one': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'two': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'three': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'four': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
    },
    currentPlayerIndex: 0,
    firstDrawer: 'two',
    deck: ["ZC", "ZD", "ZH", "ZS", "3C", "6C", "6D", "6H", "6S", "7C", "2C", "2D", "2H", "2S", "3D", "7D", "7H", "7S", "8C", "8D", "4C", "4D", "4H", "4S", "3H", "8H", "8S", "9C", "9D", "9H", "5C", "5D", "5H", "5S", "3S", "9S", "TC", "TD", "TH", "TS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS"],
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    diPreWrap: [],
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
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    modalByPlayer: {
      'one': ModalStates.NONE,
      'two': ModalStates.NONE,
      'three': ModalStates.NONE,
      'four': ModalStates.NONE
    },
    errorByPlayer: {
      'one': ErrorStates.NONE,
      'two': ErrorStates.NONE,
      'three': ErrorStates.NONE,
      'four': ErrorStates.NONE
    },
    undoByPlayer: {
      'one': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'two': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'three': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'four': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
    },
    currentPlayerIndex: -1,
    firstDrawer: 'two',
    deck: [],
    di: ["KC", "KD", "KH", "KS", "3H", "OA"],
    diPreWrap: [],
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
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    modalByPlayer: {
      'one': ModalStates.NONE,
      'two': ModalStates.NONE,
      'three': ModalStates.NONE,
      'four': ModalStates.NONE
    },
    errorByPlayer: {
      'one': ErrorStates.NONE,
      'two': ErrorStates.NONE,
      'three': ErrorStates.NONE,
      'four': ErrorStates.NONE
    },
    undoByPlayer: {
      'one': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'two': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'three': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'four': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
    },
    currentPlayerIndex: -1,
    firstDrawer: 'two',
    deck: [],
    di: ["KC", "KD", "KH", "KS", "OA", "6S"],
    diPreWrap: [],
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
    playerRoles: {'one': 'DEFENDER', 'two': 'ATTACKER', 'three': 'DEFENDER', 'four': 'ATTACKER'}
  },
  TEST_SUIT_FROM_DI_JOKER_1: {
    status: GameStatuses.WAITING,
    stage: GameStages.DONE_DRAWING,
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    modalByPlayer: {
      'one': ModalStates.NONE,
      'two': ModalStates.NONE,
      'three': ModalStates.NONE,
      'four': ModalStates.NONE
    },
    errorByPlayer: {
      'one': ErrorStates.NONE,
      'two': ErrorStates.NONE,
      'three': ErrorStates.NONE,
      'four': ErrorStates.NONE
    },
    undoByPlayer: {
      'one': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'two': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'three': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'four': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
    },
    currentPlayerIndex: -1,
    firstDrawer: 'two',
    deck: [],
    di: ["KC", "KD", "KH", "KS", "6S", "OB"],
    diPreWrap: [],
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
    playerRoles: {'one': 'DEFENDER', 'two': 'ATTACKER', 'three': 'DEFENDER', 'four': 'ATTACKER'}
  },
  TEST_SUIT_FROM_DI_JOKER_2: {
    status: GameStatuses.WAITING,
    stage: GameStages.DONE_DRAWING,
    threeState: ThreeStates.NOT_SHOWN,
    tableState: TableStates.NONE,
    modalByPlayer: {
      'one': ModalStates.NONE,
      'two': ModalStates.NONE,
      'three': ModalStates.NONE,
      'four': ModalStates.NONE
    },
    errorByPlayer: {
      'one': ErrorStates.NONE,
      'two': ErrorStates.NONE,
      'three': ErrorStates.NONE,
      'four': ErrorStates.NONE
    },
    undoByPlayer: {
      'one': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'two': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'three': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'four': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
    },
    currentPlayerIndex: -1,
    firstDrawer: 'two',
    deck: [],
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    diPreWrap: [],
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
    playerRoles: {'one': 'DEFENDER', 'two': 'ATTACKER', 'three': 'DEFENDER', 'four': 'ATTACKER'}
  },
  TEST_PLAYING: { //Login in one,two,three,four order for roles to work properly
    status: GameStatuses.WAITING,
    stage: GameStages.PLAY,
    threeState: ThreeStates.RETRIEVED,
    tableState: TableStates.NONE,
    modalByPlayer: {
      'one': ModalStates.NONE,
      'two': ModalStates.NONE,
      'three': ModalStates.NONE,
      'four': ModalStates.NONE
    },
    errorByPlayer: {
      'one': ErrorStates.NONE,
      'two': ErrorStates.NONE,
      'three': ErrorStates.NONE,
      'four': ErrorStates.NONE
    },
    undoByPlayer: {
      'one': {
        'BUTTON': UndoStates.START_GAME,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'two': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'three': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'four': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
    },
    currentPlayerIndex: 0,
    firstDrawer: 'two',
    deck: [],
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    diPreWrap: ["KC", "KD", "KH", "KS", "OA", "OB"],
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
    playerRoles: {'one': 'DEFENDER', 'two': 'ATTACKER', 'three': 'DEFENDER', 'four': 'ATTACKER'}
  },
  TEST_WRAPUP: { //Login in one,two,three,four order for roles to work properly
    status: GameStatuses.WAITING,
    stage: GameStages.PLAY,
    threeState: ThreeStates.RETRIEVED,
    tableState: TableStates.CLEAR_TABLE,
    modalByPlayer: {
      'one': ModalStates.NONE,
      'two': ModalStates.NONE,
      'three': ModalStates.NONE,
      'four': ModalStates.NONE
    },
    errorByPlayer: {
      'one': ErrorStates.NONE,
      'two': ErrorStates.NONE,
      'three': ErrorStates.NONE,
      'four': ErrorStates.NONE
    },
    undoByPlayer: {
      'one': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'two': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'three': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
      'four': {
        'BUTTON': UndoStates.NONE,
        'MODAL': UndoStates.NONE,
        'role:': UndoRoles.NONE
      },
    },
    currentPlayerIndex: -1,
    firstDrawer: 'two',
    deck: [],
    di: ["KC", "KD", "KH", "KS", "OA", "OB"],
    diPreWrap: ["KC", "KD", "KH", "KS", "OA", "OB"],
    currTableCards: {'TC': 'one', '4D': 'two', '7H': 'three', 'JS': 'four'},
    prevTableCards: {'TC': 'one', '4D': 'two', '7H': 'three', 'JS': 'four'},
    diOpener: "one",
    zhu: "H",
    nextCardIndex: 52,
    threeShower: 'one',
    hands: {
      'one': [],
      'two': [],
      'three': [],
      'four': []
    },
    taiXiaPoints: ["5C", "5D", "5H", "5S"],
    threeFromDiCount: 0,
    turnCycleCount: 0,
    playerRoles: {'one': 'DEFENDER', 'two': 'ATTACKER', 'three': 'DEFENDER', 'four': 'ATTACKER'}
  }
};

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
      this.players = [];
      this.partners = {};
      this.modalByPlayer = CurrTestState.modalByPlayer; //merge into player objects
      this.errorByPlayer = CurrTestState.errorByPlayer; //merge into player objects
      this.undoByPlayer = CurrTestState.undoByPlayer; //merge into player objects
      this.status = CurrTestState.status;
      this.stage = CurrTestState.stage;
      this.threeState = CurrTestState.threeState;
      this.tableState = CurrTestState.tableState;
      this.zhu = CurrTestState.zhu;

      this.currentPlayerIndex = CurrTestState.currentPlayerIndex; //streamline to index or username
      this.nextCardIndex = CurrTestState.nextCardIndex; //just pop cards from di and kill this field
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
      this.diPreWrap = CurrTestState.diPreWrap; //combine di fields
      this.taiXiaPoints = CurrTestState.taiXiaPoints;
      
      //Not in test states
      this.cardLocations = {}; //merge into card objects
      this.cardLocMngrLocs = {}; //merge into card objects
      this.cardLocMngr = {};
      this.cardZIndexes = {}; //merge into card objects
      this.highestZIndex = ZIndexBase;
      this.currCycleNumCards = 0; //label as counter
      this.currTurnNumCards = 0; //label as counter
      this.diOriginal = []; //combine di fields
      this.undoer = '';
      this.setRolesBasedOnThree = false;
      this.prevPlayerIndex = -1;
      this.copy = {};
      this.undidStartGame = false;
      this.undidOpenDi = false;
      this.wrapUpWinner = '';
      this.winningTeam = '';
      this.taiXiaPointsTotal = 0;
      this.delayedModalAlready = false;
      this.soundEffect = '';
    }
  }

/**
   * Return a list of fields that are required for permanent storage
   *
   * @return {[]String] List of fields required persistent storage
   */
  persistentFields() {
    return ['status', 'stage', 'modalByPlayer', 'errorByPlayer', 'undoByPlayer', 'undoer', 'threeState', 'tableState', 'players', 'deck', 'di', 'currTableCards', 'prevTableCards', 'nextCardIndex', 'hands', 'currentPlayerIndex', 'diOpener', 'zhu', 'taiXiaPoints', 'threeFromDiCount', 'turnCycleCount', 'cardLocations', 'cardLocMngr', 'currTurnNumCards', 'currCycleNumCards', 'highestZIndex', 'cardZIndexes', 'threeShower', 'diOriginal', 'playerRoles', 'firstDrawer', 'cardLocMngrLocs', 'setRolesBasedOnThree', 'diPreWrap', 'prevPlayerIndex', 'copy', 'undidStartGame', 'undidOpenDi', 'wrapUpWinner', 'winningTeam', 'taiXiaPointsTotal', 'delayedModalAlready', 'soundEffect', 'partners'];
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

    //If all four players are present, set up game
    if (this.players.length == NumPlayers) {
      if (CurrTestState == TestStates.REAL) {
        this.setUpCardLocObjs();
        this.setUpByPlayer();
        this.randomizeDeck();
        this.status = GameStatuses.STARTED;
      } else {
        //TESTING ONLY: Don't set up any fields by player and deck/di
        this.setUpCardLocObjs();
        this.diOriginal = this.di;
        this.diPreWrap = this.di;
        this.status = GameStatuses.STARTED;
        this.copy = this.copyGame();
      }
    }
  }

  arrangeSeating() {
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
    }
  }

  //Set up card location objects to track card locations in handArea
  setUpCardLocObjs() {
    for (var i = 0; i < DeckComplete.length; i++) {
      this.cardLocations[DeckComplete[i]] = {x: CardLandingLoc.x, y: CardLandingLoc.y};
      this.cardLocMngrLocs[DeckComplete[i]] = {x: -1, y: -1};
      this.cardZIndexes[DeckComplete[i]] = ZIndexBase;
    }

    for (var i = 0; i <this.players.length; i++) {
      this.cardLocMngr[this.players[i].username] = [];
      for (var j = 0; j < CardLocMax.y; j++) {
        //Including 1 buffer slot at the end of each row array for middle step when moving cards within full row
        this.cardLocMngr[this.players[i].username].push(Array(CardLocMax.x + 1));
      }
    }
  }

  //Set up fields that are objects with player names as keys
  setUpByPlayer() {
    var player;
    for (var i = 0; i < this.players.length; i++) {
      player = this.players[i].username;
      this.hands[this.players[i].username] = [];
      this.modalByPlayer[player] = ModalStates.SET_ROLE;
      this.errorByPlayer[player] = ErrorStates.NONE;
      this.undoByPlayer[player] = {};
      this.undoByPlayer[player][UndoParams.BUTTON] = UndoStates.NONE;
      this.undoByPlayer[player][UndoParams.MODAL] = UndoStates.NONE;
      this.undoByPlayer[player][UndoParams.ROLE] = UndoRoles.NONE;
    }
  }

  //Set up randomizd deck and di
  randomizeDeck() {
    var randDeck = DeckComplete.slice().sort(function(a, b){return 0.5 - Math.random()});
    this.di = randDeck.splice(0, DiLength);
    this.deck = randDeck;
    this.diOriginal = this.di;
    this.diPreWrap = this.di;
  }

  userSetRole(user, role) {
    this.playerRoles[user.username] = role;
    if (this.modalByPlayer[user.username] = ModalStates.SET_ROLE) {
      this.modalByPlayer[user.username] = ModalStates.SET_ROLE_WAITING;
    } else {
      this.modalByPlayer[user.username] = ModalStates.SET_ROLE_AGAIN_WAITING;
    }

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

      if ((attackers.length == 2 && defenders.length == 2) || tbd.length == 4) {
        this.userSetDrawFirstModalHelper();
        //temporary - replace with TBD1 and TBD2
        this.partners = {'helen':'pierre', 'dolores':'maeve', 'pierre':'helen', 'maeve':'dolores'};
        this.arrangeSeating();
        this.copy = this.copyGame();
      } else {
        this.playerRoles = {};
        this.userSetModalForAllHelper(ModalStates.SET_ROLE_AGAIN);
      }
    }
  }

  //Set up copy of game to use if restart, copy made after roles are set and before first drawer is decided
  copyGame() {
    var tempCopy = {};
    return Object.assign(tempCopy, this);
  }

  userSetFirstDrawer(user) {
    this.currentPlayerIndex = this.userIdToIndex(user._id);
    this.firstDrawer = user.username;
    this.userSetModalForAllHelper(ModalStates.NONE);
    this.stage = GameStages.DRAW;
  }

  userSetDrawFirstModalHelper() {
    for (var player in this.playerRoles) {
      switch (this.playerRoles[player]) {
        case Roles.DEFENDER:
          this.modalByPlayer[player] = ModalStates.SET_DRAW_FIRST_DEFENDER;
          break;
        default:
          this.modalByPlayer[player] = ModalStates.SET_DRAW_FIRST_ATTACKER;
          break;
      }
    }
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

    if(user.username == this.threeShower && this.undoByPlayer[this.threeShower][UndoParams.BUTTON] == UndoStates.SHOW_THREE) {
      this.undoByPlayer[this.threeShower][UndoParams.BUTTON] = UndoStates.NONE;
    }

    console.log(user.username, " drew: ", card);
  }

  prepCardForHand(user, card) {
    this.cardZIndexes[card] = ++this.highestZIndex;
  }

  userCardMigration(user, card) {
    if (this.threeState == ThreeStates.NOT_SHOWN) {
      this.userShowThree(user, card);
    } else if (this.threeState != ThreeStates.NOT_SHOWN && (this.stage == GameStages.DRAW || this.stage == GameStages.DONE_DRAWING)) {
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
      this.errorByPlayer[user.username] = ErrorStates.NOT_THREE;
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

    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.SHOW_THREE;

    console.log(user.username + " liang " + card);
  }

  undoShowThree(user, undoType) {
    //Reset player roles if were set based on showing three
    if (this.setRolesBasedOnThree) {
      for (var player in this.playerRoles) {
        this.playerRoles[player] = Roles.TBD;
      }
    }

    //Retrieve three if on table
    if (this.threeState == ThreeStates.SHOWN) {
      var three = RanksMap.three + this.zhu;
      this.prepCardForHand(user, three);
      this.hands[user.username].push(three);
      delete this.currTableCards[three];
    }

    this.zhu = '';
    this.threeShower = ''
    this.threeState = ThreeStates.NOT_SHOWN;

    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.NONE;
    this.undoPostFollowUps(user, undoType);

    console.log("undid show three");
  }

  prepCardForLeavingHand(user, card) {
    var x = this.cardLocations[card].x;
    var y = this.cardLocations[card].y;

    this.cardLocMngr[user.username][y][x] = null;
    this.cardLocMngrLocs[card] = {x: -1, y: - 1};
    this.userSetCardLoc(user, card, CardLandingLoc.x, CardLandingLoc.y, true);

    this.userSetCardLocFillSpaceHelper(user, x, y, CardLocMax.x-1);

    var index = this.hands[user.username].indexOf(card);
    this.hands[user.username].splice(index, 1);
  }

  setPlayerRoles() {
    var player;
    for (var i = 0; i < this.players.length; i++) {
      player = this.players[i];
      if (player.username == this.threeShower || player.username == this.partners[this.threeShower]) {
        this.playerRoles[player.username] = Roles.DEFENDER;
      } else {
        this.playerRoles[player.username] = Roles.ATTACKER;
      }
    }
    this.setRolesBasedOnThree = true;
  }

  userRetrieveThree(user, three) {
    if (Object.keys(this.currTableCards).indexOf(three) == -1) {
      if (three.slice(0,1) == RanksMap.three) {
        console.log("Three already shown!");
        this.errorByPlayer[user.username] = ErrorStates.ALREADY_SHOWN_THREE;
      } else {
        console.log("That does nothing");
      }
      return;
    }
    if (user.username != this.threeShower) {
      console.log("That's not your 3...");
      return;
    }
    this.retrieveThreeHelper(user, three);    

    if(this.undoByPlayer[this.threeShower][UndoParams.BUTTON] == UndoStates.SHOW_THREE) {
      this.undoByPlayer[this.threeShower][UndoParams.BUTTON] = UndoStates.NONE;
    }
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
    this.diOpener = user.username;
    this.currentPlayerIndex = this.usernameToIndex(this.diOpener);
    this.stage = GameStages.DI;

    //retrieve 3 if still on table
    if (this.threeState == ThreeStates.SHOWN) {
      var three = RanksMap.three + this.zhu;
      this.retrieveThreeHelper(user, three);
    }

    if(this.threeShower != '' && this.undoByPlayer[this.threeShower][UndoParams.BUTTON] == UndoStates.SHOW_THREE) {
      this.undoByPlayer[this.threeShower][UndoParams.BUTTON] = UndoStates.NONE;
    }

    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.OPEN_DI;
  }

  undoOpenDi(user, undoType) {
    this.diOpener = '';
    this.currentPlayerIndex = -1;
    if(this.threeShower == '') {
      this.stage = GameStages.FIND_THREE_IN_DI;
    } else {
      this.stage = GameStages.DONE_DRAWING;
    }

    this.undidOpenDi = true;
    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.NONE;
    this.undoPostFollowUps(user, undoType);

    console.log("undid open di");
  }

  userTakeCardfromDi(user, card) {
    var index = this.di.indexOf(card);
    this.prepCardForHand(user, card);
    this.hands[user.username].push(card);
    this.di.splice(index, 1);

    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.NONE;
  }

  userPutCardInDi(user, card) {
    if (user.username != this.diOpener) {
      console.log("You are not diOpener");
      return;
    }
    this.prepCardForLeavingHand(user, card);
    this.di.push(card);

    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.NONE;
  }

  userStartGame(user) {
    this.diPreWrap = this.di.slice(0, 6);
    this.stage = GameStages.PLAY;
    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.START_GAME;
    console.log("Game started");
  }

  undoStartGame(user, undoType) {
    this.stage = GameStages.DI;
    this.undidStartGame = true;
    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.NONE;
    this.undoPostFollowUps(user, undoType);

    console.log("undid start game");
  }

  userPlayCard(user, card) {
    if (this.currentPlayerIndex != this.usernameToIndex(user.username)) {
      console.log("Not your turn");
      this.errorByPlayer[user.username] = ErrorStates.NOT_YOUR_TURN;
      return;
    }
    if (this.tableState == TableStates.CLEAR_PREV_TABLE) {
      console.log("Clear the table first!");
      this.errorByPlayer[user.username] = ErrorStates.CLEAR_TABLE_FIRST;
      return;
    }
    this.tableState = TableStates.NONE;
    this.prepCardForLeavingHand(user, card);
    this.currTableCards[card] = user.username;
    this.currTurnNumCards++;
    this.prevPlayerIndex = this.currentPlayerIndex;

    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.NONE;
    var lastPlayer = this.players[(this.currentPlayerIndex - 1 + NumPlayers) % NumPlayers].username;
    this.undoByPlayer[lastPlayer][UndoParams.BUTTON] = UndoStates.NONE;
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
    this.currCycleNumCards = this.currTurnNumCards;
    this.currTurnNumCards = 0;
    this.currentPlayerIndex = (this.currentPlayerIndex+1) % NumPlayers;
    this.turnCycleCount = this.turnCycleCount + 1;

    //if all four players have gone, activate clear table
    if (this.turnCycleCount % NumPlayers == 0) {
      this.currentPlayerIndex = -1;
      this.prevTableCards = this.currTableCards;
      this.tableState = TableStates.CLEAR_TABLE;
    }

    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.PLAY_CARDS;
    console.log("End turn");
  }

  undoEndTurn(user, undoType) {
    this.currTurnNumCards = this.currCycleNumCards;
    this.currentPlayerIndex = this.prevPlayerIndex;
    this.turnCycleCount = this.turnCycleCount - 1;
    this.tableState = TableStates.NONE;

    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.NONE;
    this.undoPostFollowUps(user, undoType);

    console.log("undid end turn");
  }

  //combine this with userCollecPointsDi once currTable and di are both arrays of card objects
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

  undoCollectPointsTable(user) {
    if (this.playerRoles[user.username] == Roles.DEFENDER) {
      return;
    }

    var numPointCards = 0;
    for (var card in this.prevTableCards) {
      if (Object.keys(PointsMap).indexOf(card.slice(0, 1)) >= 0) {
        numPointCards++;
      }
    }
    for (var i = 0; i < numPointCards; i++) {
      this.taiXiaPoints.pop();
    }
    console.log("undid collect points from table");
  }

  userCollectPointsDi(user) {
    if (this.playerRoles[this.wrapUpWinner] == Roles.DEFENDER) {
      return;
    }
    for (let i = this.di.length - 1; i > -1; i--) {
      if (Object.keys(PointsMap).indexOf(this.di[i].slice(0, 1)) >= 0) {
        this.taiXiaPoints.push(this.di[i]);
        var elems = this.di.splice(i, 1);
        console.log("Collected: ", elems[0]);
      }
    }
  }

  undoCollectPointsDi() {
    if (this.playerRoles[this.wrapUpWinner] == Roles.DEFENDER) {
      return;
    }
    var numPointCards = 0;
    for (let i = this.diPreWrap.length - 1; i > -1; i--) {
      if (Object.keys(PointsMap).indexOf(this.diPreWrap[i].slice(0, 1)) >= 0) {
        numPointCards++;
      }
    }
    for (var i = 0; i < numPointCards; i++) {
      this.taiXiaPoints.pop();
    }
    console.log("undid collect points from di");
  }

  userClearTable(user) {
    this.userCollectPointsTable(user);
    this.currTableCards = {};
    this.currentPlayerIndex = this.usernameToIndex(user.username);
    this.tableState = TableStates.SEE_PREV_TABLE_FIRST;
    console.log("Table cleared");

    if (this.hands[user.username].length == 0) {
      this.currentPlayerIndex = -1;
      this.tableState = TableStates.NONE;
      this.wrapUpWinner = user.username;
      this.stage = GameStages.WRAP_UP;
    }

    for (var player in this.undoByPlayer) {
      this.undoByPlayer[player][UndoParams.BUTTON] = UndoStates.NONE;
    }
    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.CLEAR_TABLE;
  }

  undoClearTable(user, undoType) {
    this.undoCollectPointsTable(user);
    this.currTableCards = this.prevTableCards;
    this.currentPlayerIndex = -1;
    this.tableState = TableStates.CLEAR_TABLE;

    if (this.stage == GameStages.WRAP_UP) {
      this.stage = GameStages.PLAY;
      this.undoCollectPointsDi(user);
      this.di = this.diPreWrap.slice(0, 6);
      this.wrapUpWinner = '';
      this.taiXiaPointsTotal = 0;
      this.winningTeam = '';
      //Unshow RESTART_FULL modals and put delay back in
      this.userModalAwayAll();
      this.delayedModalAlready = false;
    }

    this.undoByPlayer[user.username][UndoParams.BUTTON] = UndoStates.NONE;
    this.undoPostFollowUps(user, undoType);

    console.log("undid clear table");
  }

  userClearPrevTable(user) {
    this.currTableCards = {};
    this.tableState = TableStates.SEE_PREV_TABLE;
  }

  userSeePrevTable() {
    this.currTableCards = this.prevTableCards;
    this.tableState = TableStates.CLEAR_PREV_TABLE;
  }

  userWrapUp() {
    this.userCollectPointsDi();
    this.userCalcResults();
    this.userSetModalForAllHelper(ModalStates.RESTART_FULL);
    console.log("Wrapped up");
  }

  userCalcResults() {
    for (var i = 0; i < this.taiXiaPoints.length; i++) {
      this.taiXiaPointsTotal = this.taiXiaPointsTotal + PointsMap[this.taiXiaPoints[i].slice(0,1)]
    }

    if (this.taiXiaPointsTotal >= WinningPoints) {
      this.winningTeam = Roles.ATTACKER;
    } else {
      this.winningTeam = Roles.DEFENDER;
    }
  }

  userRestartGame() {
    var winningTeamCopy = (' ' + this.winningTeam).slice(1);
    var playerRolesCopy = {};
    playerRolesCopy = Object.assign(playerRolesCopy, this.playerRoles);

    //Replace game with copy from start of game
    var fields = this.persistentFields();
    for (var i = 0; i < fields.length; i++) {
      if (fields[i] != 'copy') {
        this[fields[i]] = this.copy[fields[i]];
      }
    }

    //Re-randomize deck for restarted game
    this.randomizeDeck();
    
    //Switch up defender/attacker if game finished and attackers won
    if (winningTeamCopy == Roles.ATTACKER) {
      for (var player in this.playerRoles) {
        this.playerRoles[player] = (playerRolesCopy[player] == Roles.DEFENDER) ? Roles.ATTACKER : Roles.DEFENDER;
      }
    } else {
      this.playerRoles = playerRolesCopy;
    }

    //Reset first draw modal behavior based on new roles
    this.userSetDrawFirstModalHelper();
    
    //Make a copy of current game
    this.copy = this.copyGame();

    console.log("restarted game");
  }

  userEndGame() {
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

    //Turn everything off
    this.currTableCards = {};

    for (var player in this.hands) {
      this.hands[player] = [];
    }

    for (var player in this.undoByPlayer) {
      this.undoByPlayer[player][UndoParams.BUTTON] = UndoStates.NONE;
      this.undoByPlayer[player][UndoParams.MODAL] = UndoStates.NONE;
    }
    this.tableState = TableStates.NONE;
    this.stage = GameStages.FINISHED;
    this.status = GameStatuses.FINISHED;

    this.userSetModalForAllHelper(ModalStates.END_GAME_NOTICE);
  }

  userSetSoundEffect(soundEffect) {
    this.soundEffect = soundEffect;
  }

  //Modal methods (including regular modals, error modals, and undo modals)
  userSetModalForAllHelper(modal) {
    for (var i = 0; i < this.players.length; i++) {
      this.modalByPlayer[this.players[i].username] = modal;
    }
  }

  userModalShow(user, modal) {
    this.modalByPlayer[user.username] = ModalStates[modal];
  }

  userModalAway(user) {
    this.modalByPlayer[user.username] = ModalStates.NONE;
  }

  userModalAwayAll() {
    for (var i = 0; i < this.players.length; i++) {
      this.modalByPlayer[this.players[i].username] = ModalStates.NONE;
    }
  }

  userErrorAway(user) {
    this.errorByPlayer[user.username] = ErrorStates.NONE;
  }

  userDelayedModalAlready() {
    this.delayedModalAlready = true;
  }

  userUndo(user) {
    var undoType = this.undoByPlayer[user.username][UndoParams.MODAL];

    switch(undoType) {
      case UndoStates.SHOW_THREE:
        this.undoShowThree(user, undoType);
        break;
      case UndoStates.OPEN_DI:
        this.undoOpenDi(user, undoType);
        break;
      case UndoStates.START_GAME:
        this.undoStartGame(user, undoType);
        break;
      case UndoStates.PLAY_CARDS:
        this.undoEndTurn(user, undoType);
        break;
      case UndoStates.CLEAR_TABLE:
        this.undoClearTable(user, undoType);
        break;
    }
  }

  undoPostFollowUps(user, undoType) {
    this.undoer = user.username;
    this.userUndoAway(user);
    this.undoNoticeOtherPlayersHelper(user, undoType);
  }

  undoNoticeOtherPlayersHelper(user, undoType) {
    for (var player in this.undoByPlayer) {
      if (player != user.username) {
        this.undoByPlayer[player][UndoParams.MODAL] = undoType;
        this.undoByPlayer[player][UndoParams.ROLE] = UndoRoles.NOTICEE;
      }
    }
  }

  userUndoShow(user) {
    var undoState = this.undoByPlayer[user.username][UndoParams.BUTTON];
    this.undoByPlayer[user.username][UndoParams.MODAL] = undoState;
    this.undoByPlayer[user.username][UndoParams.ROLE] = UndoRoles.UNDOER;
  }

  userUndoAway(user) {
    this.undoByPlayer[user.username][UndoParams.MODAL] = UndoStates.NONE;
    this.undoByPlayer[user.username][UndoParams.ROLE] = UndoRoles.NONE;
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

    if (card == yGroup[x] || (x == CardLandingLoc.x && y == CardLandingLoc.y && xOld == -1)) {
      //no location change
      return;
    } else if (yGroup[CardLocMax.x-1] != null && y != yOld) {
      //return card to previous location if dropoff row is full, but exception for moving card already in a full row to the end of the row
      xOld = (xOld != -1) ? xOld : CardLandingLoc.x;
      yOld = (yOld != -1) ? yOld : CardLandingLoc.y;
      this.cardLocations[card] = {x: xOld, y: yOld};
    } else if (y == 0 && x < CardFirstRowMinIdx) {
      console.log(x);
      //return card to previus location if dropoff is in landing area zone
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

    var xMin = y == 0 ? CardFirstRowMinIdx : 0;

    while (x != xMin && yGroup[x-1] == null) x--;
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
    if (this.stage == GameStages.PLAY || this.stage == GameStages.WRAP_UP || this.stage == GameStages.FINISHED) {
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
    return this.partners[user1] == user2;
  }

  userPlayedRightNumCards() {
    if ((this.turnCycleCount % NumPlayers != 0) && (this.currTurnNumCards != this.currCycleNumCards)) {
      return false;
    } else if (this.currTurnNumCards == 0) {
      return false;
    }
    return true;
  }

  showCurrPlayerBorder(user) {
    var bool = true;
    bool = bool && (this.getCurrentPlayerIndex() !== null && this.getCurrentPlayerIndex() > -1);
    bool = bool && (this.tableState != TableStates.CLEAR_PREV_TABLE);
    bool = bool && (this.stage != GameStages.DI);
    return bool;
  }

  disableTableArea(user) {
    return this.tableState == TableStates.CLEAR_PREV_TABLE;
  }

  showPlayingView(user) {
    return (this.stage == GameStages.DRAW || this.stage == GameStages.DONE_DRAWING || (this.stage == GameStages.DI && this.diOpener != user.username) || this.stage == GameStages.PLAY);
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
