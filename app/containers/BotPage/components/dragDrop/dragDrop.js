/* eslint indent: 0 */
/* eslint no-shadow: 0 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from '@material-ui/core';
import ArrowIcon from '../../../../images/arrow.png';

import './styles.css';
import getSkills from '../../../../api/skills';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

// Style of draggable
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: 'white',
  borderRadius: 8,

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  borderRadius: 8,
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  flex: 1,
  height: 500,
  overflow: 'scroll',
  marginLeft: 8,
  marginRight: 8,
});

class DragDrop extends Component {
  state = {
    availableItems: [],
    activeItems: []
  };

  async componentDidMount() {
    const skillsResponse = await getSkills();
    this.setState({
      availableItems: skillsResponse.filter(skill => !skill.activated),
      activeItems: skillsResponse.filter(skill => skill.activated)
    });
  }

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
      available: 'availableItems',
      active: 'activeItems'
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
        return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === 'active') {
        state = { activeItems: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        availableItems: result.available,
        activeItems: result.active
      });
    }
  };

  renderDroppable = (id) => (
    <Droppable droppableId={id}>
      {
        (provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}>
              {this.getList(id).map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                      )}>
                      {item.skill}
                      <div className="bot-skill-description">{item.description}</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )            
      }
    </Droppable>
  );

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    if (!this.state.availableItems.length) {
      return null;
    }
    return (
      <div style={{alignItems: 'flex-end'}}>
        <div style={{flexDirection: 'row', display: 'flex'}}>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div style={{flex: 1}}>
              {this.renderDroppable("available")}
            </div>
            <img src={ArrowIcon} alt="Arrow" id="arrow-icon" />
            <div style={{flex: 1}}>
              {this.renderDroppable("active")}
            </div>
          </DragDropContext>
        </div>
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
          <Button style={{marginTop: 16, alignSelf: 'center'}}>Hello</Button>
        </div>
      </div>
    );
  }
}

export default DragDrop;