//TABLEDRAG

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Draggable from 'react-draggable';
// import GameBoard from './GameBoard.jsx';


// import GameHeader from './GameHeader.jsx';
// import {Game, GameStatuses, GameStatusitos} from '../api/models/game.js';
// import {userDrawCardGame, userOpenCloseDiGame, userSwapHandAndDiGame, userStartGameGame, userPlayCardGame, userTakeBackCardGame, userClearTableGame, userLiangThreeGame, userTakeBackThreeGame, userCollectPointsGame, userThreeFromDiGame, userThreeFromDiTakeDiGame, userEndTurnGame, userSetCardLocGame} from '../api/methods/games.js';

// export const boundary = 600;

// export const xOffset = 564;
// export const yOffset = 30;
// export const playerOffset = 100;

// export default class TableDrag extends React.Component {

//   state = {
//     activeDrags: 0,
//     deltaPosition: {
//       x: 0, y: 0
//     },
//     controlledPosition: {
//       x: 0, y: 0
//     }
//   };

//   handleDrag = (e, ui) => {
//     const {x, y} = this.state.deltaPosition;
//     this.setState({
//       deltaPosition: {
//         x: x + ui.deltaX,
//         y: y + ui.deltaY,
//       }
//     });
//     userSetCardLocGame.call({gameId: this.props.game._id, card: this.props.card, x: x, y: y});
//     console.log(this.props.card, ": ", this.state.deltaPosition);
//   };

//   onStart = () => {
//     this.setState({activeDrags: ++this.state.activeDrags});
//   };

//   onStop = (e, ui) => {
//     this.setState({activeDrags: --this.state.activeDrags});

//     //replace with draggable coordinates
//     let cardX = e.screenX;
//     let cardY = e.screenY;

//     if (cardX < boundary) {
//       userSetCardLocGame.call({gameId: this.props.game._id, card: this.props.card, x: this.state.deltaPosition.x+xOffset, y: this.state.deltaPosition.y+yOffset+playerOffset*this.props.game.usernameToIndex(this.props.user.username)});
//       if (this.props.status == GameStatusitos.PLAYING) {
//         userTakeBackCardGame.call({gameId: this.props.game._id, card: this.props.card});
//       } else if (this.props.status == GameStatusitos.DRAWING || (this.props.status == GameStatusitos.DI && this.props.game.threeFromDiCount == 0)) {
//         userTakeBackThreeGame.call({gameId: this.props.game._id, card: this.props.card});   
//       }
//     }
//   };

//   onControlledDrag = (e, position) => {
//     const {x, y} = position;
//     this.setState({controlledPosition: {x, y}});
//   };

//   onControlledDragStop = (e, position) => {
//     this.onControlledDrag(e, position);
//     this.onStop();
//   };

//   render() {
//     const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
//     const {deltaPosition, controlledPosition} = this.state;

//     return (
//       <Draggable 
//         key={this.props.card}
//         onDrag={this.handleDrag} {...dragHandlers}
//         position={controlledPosition}
//         grid={[25, 25]}>
//         <img src={"/images/" + this.props.card + ".png"} className="handle" draggable="false"></img>
//       </Draggable>
//     );
//   }
// }

//MYDRAG

    //Setting defaultPosition for where card first shows up
    // if (this.props.location.x == 0 && this.props.location.y == 0) {
    //   let x = (this.props.index % numCardsInRow) * cardWidth;
    //   let y = Math.floor(this.props.index / numCardsInRow) * cardHeight;
    //   userSetCardLocGame.call({gameId: this.state.game._id, card: this.state.card, x: x, y: y});
    //   this.state.controlledPosition = {x:x, y:y};
    // } else {
    //   this.state.controlledPosition = this.props.location;
    //   console.log(this.state.card, ": ", this.props.location); 
    // }

    // onControlledDragStop = (e, position) => {
    //   this.onControlledDrag(e, position);
    //   this.onStop();

    //   //replace with draggable coordinates
    //   let cardX = e.screenX;
    //   let cardY = e.screenY;

    //   if(cardX > boundary) {
    //     if (this.props.status == GameStatusitos.PLAYING) {
    //       userPlayCardGame.call({gameId: this.props.game._id, card: this.props.card});
    //     } else if (this.props.status == GameStatusitos.DRAWING || (this.props.status == GameStatusitos.DI && !this.props.game.diOpened && this.props.game.threeFromDiCount == 0)) {
    //       userLiangThreeGame.call({gameId: this.props.game._id, card: this.props.card});
    //       userSetCardLocGame.call({gameId: this.props.game._id, card: this.props.card, x: 0, y: 0});
    //     }
    //   }
    // };
    


// GAMEBOARD

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // Originally used to dynamically resize handArea and round dimensions to multiple of draggable 'grid' to fit an even number of cards into width and height of handArea, but not using draggable 'grid' right now
  //     // columnRef: React.createRef(), // add ref={this.state.columnRef} to handArea column
  //     // handAreaWidth: '', // add style={{width: this.state.handAreaWidth+'px', height: this.state.handAreaHeight+'px'}} to handArea
  //     // handAreaHeight: ''
  //   }
  // }
  
  // Originally used to dynamically resize handArea and round dimensions to multiple of draggable 'grid' to fit an even number of cards into width and height of handArea, but not using draggable 'grid' right now
  // handleResize(elem, e) {
  //   var parentPadding = 10; //px //parent = .column
  //   var widthShare = 1; //100%
  //   var heightShare = 0.7; //70%
  //   var gridSize = 10; //px //not used currently

  //   var parent = elem.state.columnRef.current;
  //   if (parent) {
  //     var parentWidth = parent.offsetWidth;
  //     var parentHeight = parent.offsetHeight;
  //     elem.setState({
  //       handAreaWidth: Math.floor( ( ( parentWidth - 2 * parentPadding ) * widthShare ) / gridSize ) * gridSize,
  //       handAreaHeight: Math.floor(( ( parentHeight - 2 * parentPadding ) * heightShare ) / gridSize ) * gridSize
  //     });
  //   }    
  // }

  // componentDidMount() {
  //   this.handleResize(this, '');

  //   var elem = this;
  //   window.addEventListener('resize', this.handleResize.bind(this, elem));
  // }


  //   renderStatus() {
  //   let game = this.props.game;

  //   let currentPlayerIndex = game.getCurrentPlayerIndex();
  //   let currPlayerStatus = "";
  //   if (currentPlayerIndex == -1 || currentPlayerIndex == null) {
  //     currPlayerStatus = "-";
  //   } else {
  //     currPlayerStatus = game.players[currentPlayerIndex].username;
  //   }

  //   let zhuStatus = "";
  //   if (game.zhu == "") {
  //     zhuStatus = "-";
  //   } else {
  //     zhuStatus = CurrLang.suits[game.zhu];
  //   }    

  //   if (game.status === GameStatuses.STARTED) {
  //     return (
  //       <div className="ui attached center aligned segment">
  //         <p><b>{CurrLang.stage}:</b> {CurrLang.statusito[game.statusito]}</p>
  //         <p><b>{CurrLang.zhu}:</b> {zhuStatus}</p>
  //         <p><b>{CurrLang.currPlayer}:</b> {currPlayerStatus}</p>
  //       </div>
  //       )
  //   } else if (game.status === GameStatuses.FINISHED) {
  //     return (
  //       <div className="ui attached center aligned segment">
  //         <p>{CurrLang.gameFinished}!</p>
  //       </div>
  //       )
  //   } else {
  //     return (
  //       <div className="ui attached center aligned segment">
  //       </div>
  //       )
  //   }
  // }
