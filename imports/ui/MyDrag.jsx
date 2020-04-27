import React, { Component } from 'react';
import Draggable from 'react-draggable';

import {ZIndexBase} from '../api/models/game.js';
import {userCardMigrationGame, userSetCardLocGame, userSetZIndexGame} from '../api/methods/games.js';


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
    var highestZ = this.props.game.getHighestZIndex();
    if (myZ < highestZ || highestZ == ZIndexBase) {
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
