import React, { Component } from 'react';
import Draggable from 'react-draggable';

import {ZIndexBase} from '../api/models/game.js';
import {CardSize, CardSlotMargin, CardSlotSize} from '../api/models/game.js';
import {userCardMigrationGame, userSetCardLocGame, userSetZIndexGame} from '../api/methods/games.js';

export default class MyDrag extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: this.props.location.x * CardSlotSize.x,
        y: this.props.location.y * CardSlotSize.y
      }
    };
  };

  static getDerivedStateFromProps(nextProps, prevState){
    var nextControlledPosition = {
      x: nextProps.location.x * CardSlotSize.x,
      y: nextProps.location.y * CardSlotSize.y
    }

    // if (nextProps.card == "QH") {
    //   console.log("CHILD CHECKING: ", nextProps.card);
    //   console.log("nextControlledPosition: ", nextControlledPosition);
    //   console.log("currControlledPosition: ", prevState.controlledPosition);
    // }

    if(nextControlledPosition.x != prevState.controlledPosition.x || nextControlledPosition.y != prevState.controlledPosition.y){
      // if (nextProps.card == "QH") {
      //   console.log("PASS ON NEW POS: ", nextControlledPosition);
      // }
      return {
        controlledPosition: nextControlledPosition,
      };
    }
    else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.props.card == "QH") {
    //   console.log("DIDUPDATE prevProps: ", prevProps.location);
    //   console.log("DIDUPDATE currProps: ", this.props.location);
    // }
    if(prevProps.location.x !== this.props.location.x || prevProps.location.y !== this.props.location.y){
      this.setState({
        controlledPosition: {
          x: this.props.location.x * CardSlotSize.x,
          y: this.props.location.y * CardSlotSize.y
        },
      });
      // if (this.props.card == "QH") {
      //   console.log("CHILD DID UPDATE: ", this.state.controlledPosition);
      // }
    }
  }

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
    userSetCardLocGame.call({gameId: this.props.game._id, card: this.props.card, x: Math.round(x / CardSlotSize.x), y: Math.round(y / CardSlotSize.y), simple: true});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
    const {x, y} = position;
    userSetCardLocGame.call({gameId: this.props.game._id, card: this.props.card, x: Math.round(x / CardSlotSize.x), y: Math.round(y / CardSlotSize.y), simple: false});
    this.props.playSound('dragCard');
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

    // if (this.props.card == "QH") {
    //   console.log("RE-RENDERING: ", this.state.controlledPosition);
    // }

    return (
      <Draggable 
        key={this.props.card}
        onDrag={this.onControlledDrag} {...dragHandlers}
        position={this.state.controlledPosition}
        grid={[CardSlotSize.x, CardSlotSize.y]}
        bounds='parent'>
        <img src={"/images/" + this.props.card + ".png"} className="handle" draggable="false" onDoubleClick={this.handleCardMigration} style={{position: 'absolute', zIndex: this.props.zIndex}}></img>
      </Draggable>
    );
  }
}
