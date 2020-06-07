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
      controlledPosition: this.convertToBoardLocHelper(this.props.location),
      stopped: ''
    };
  };

  static getDerivedStateFromProps(nextProps, prevState){
    var nextControlledPosition = this.convertToBoardLocHelper(nextProps.location);

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
        controlledPosition: this.convertToBoardLocHelper(this.props.location),
      });
      if (this.state.stopped == this.props.card) {
        this.props.playSound('dragCard');
        this.setState({stopped: ''});
      }
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
    this.setState({stopped: ''});
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
    this.setState({stopped: ''});
    var cardLoc = this.convertToServerLocHelper({x: x, y: y});
    userSetCardLocGame.call({gameId: this.props.game._id, card: this.props.card, x: cardLoc.x, y: cardLoc.y, simple: true});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
    const {x, y} = position;
    this.setState({stopped: this.props.card});
    var cardLoc = this.convertToServerLocHelper({x: x, y: y});
    userSetCardLocGame.call({gameId: this.props.game._id, card: this.props.card, x: cardLoc.x, y: cardLoc.y, simple: false});
  };

  handleCardMigration = () => {
    userCardMigrationGame.call({gameId: this.props.game._id, card: this.props.card});
  };

  handleBringToFront = (e) => {
    var myZ = Number(e.currentTarget.style.zIndex);
    var highestZ = this.props.game.getHighestZIndex();
    if (myZ < highestZ || highestZ == ZIndexBase) {
      e.currentTarget.style.zIndex = highestZ + 1;
      userSetZIndexGame.call({gameId: this.props.game._id, card: this.props.card, z: Number(e.currentTarget.style.zIndex)});  
    }
  };

  convertToServerLocHelper = (controlledLoc) => {
    //Offset 2 slots to the right if first row, to leave space for landing area
    var firstRow = 1 - serverLoc.y;

    return {
      x: Math.round((controlledLoc.x - firstRow * (2 * CardSlotSize.x)) / CardSlotSize.x),
      y: Math.round(controlledLoc.y / CardSlotSize.y)
    }
  };

  convertToBoardLocHelper = (serverLoc) => {
    //Offset 2 slots to the right if first row, to leave space for landing area
    var firstRow = 1 - serverLoc.y;

    return {
      x: serverLoc.x * CardSlotSize.x + firstRow * (2 * CardSlotSize.x),
      y: serverLoc.y * CardSlotSize.y
    }
  };

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
