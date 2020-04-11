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

