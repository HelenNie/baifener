import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import GameBoard from './GameBoard.jsx';


import GameHeader from './GameHeader.jsx';
import {Game} from '../api/models/game.js';
import {userDrawCardGame, userOpenCloseDiGame, userCardMigrationGame, userStartGameGame, userPlayCardGame, userTakeBackCardGame, userClearTableGame, userLiangThreeGame, userTakeBackThreeGame, userCollectPointsGame, userThreeFromDiGame, userThreeFromDiTakeDiGame, userEndTurnGame, userSetCardLocGame, userSetZIndexGame} from '../api/methods/games.js';

export default class MyDrag extends React.Component {

  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: 0, y: 0
    }
  };

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = (e) => {
    this.setState({activeDrags: ++this.state.activeDrags});
    this.handleBringToFront(e)
  };

  onStop = (e, ui) => {
    this.setState({activeDrags: --this.state.activeDrags});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
    userSetCardLocGame.call({gameId: this.props.game._id, card: this.props.card, x: x, y: y});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  handleCardMigration = () => {
    userCardMigrationGame.call({gameId: this.props.game._id, card: this.props.card});
  };

  handleBringToFront = (e) => {
    var myZ = Number(e.currentTarget.style.zIndex);
    var highestZ = this.props.game.userGetHighestZIndex();
    if (myZ < highestZ || highestZ == 0) {
      e.currentTarget.style.zIndex = highestZ + 1;
      userSetZIndexGame.call({gameId: this.props.game._id, card: this.props.card, z:Number(e.currentTarget.style.zIndex)});  
    }
  }

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onControlledDragStop};
    const {deltaPosition, controlledPosition} = this.state;

    this.state.controlledPosition = this.props.location;

    return (
      <Draggable 
        key={this.props.card}
        onDrag={this.onControlledDrag} {...dragHandlers}
        defaultPosition={this.state.controlledPosition}
        // grid={[10, 10]}
        bounds='parent'>
        <img src={"/images/" + this.props.card + ".png"} className="handle" draggable="false" onDoubleClick={this.handleCardMigration} style={{position: 'absolute', zIndex: this.props.zIndex}}></img>
      </Draggable>
    );
  }
}

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
