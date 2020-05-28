
export const LanguageOptions = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'Chinese', text: '中文', value: 'Chinese' },
]

export const Langs = {
  Chinese: {
    gameHeader: {
      baifener: '百分',
      logOut: '退出',
      selectLanguage: '选择语言'
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
        back: '回到游戏单',
        endGame: '结束游戏',
        restartGame: '新游戏',
        undo: '撤回 '
      },
      banners: {
        handArea: '我的牌',
        openDi: '底',
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
        restartGameFull: "胜!",
        restartGameFullText1: "赢了",
        restartGameFullText2: "分。是否想与队友再玩一次?",
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
        startGameWaiting: "正在等对手扣底...",
        gameOver: "游戏结束"
      },
      msgArea: {
        role: "你的队: ",
        zhu: "主牌: "
      },
      roles: {
        DEFENDER: "台上",
        ATTACKER: "台下",
        TBD: "未知"
      },
      suits: {
        heart: "红桃",
        diamond: "方片",
        spade: "黑桃",
        club: "梅花"
      }
    }    
  },
  English: {
    gameHeader: {
      baifener: 'Baifener',
      logOut: 'Log Out',
      selectLanguage: 'Select Language'
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
        back: 'Back to Games',
        endGame: 'End Game',
        restartGame: 'Restart Game',
        undo: 'Undo '
      },
      banners: {
        handArea: 'My Hand',
        openDi: 'Kitty',
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
        restartGameFull: " team won!",
        restartGameFullText1: " team got ",
        restartGameFullText2: " points. Would you like to play again with the same teams?",
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
        startGameWaiting: "Waiting for opponents to stash kitty...",
        gameOver: "The game has ended"
      },
      msgArea: {
        role: "Your Role: ",
        zhu: "Trump Suit: "
      },
      roles: {
        DEFENDER: "Defender",
        ATTACKER: "Attacker",
        TBD: "TBD"
      },
      suits: {
        heart: "Heart",
        diamond: "Diamond",
        spade: "Spade",
        club: "Club"
      }
    }
  }
}