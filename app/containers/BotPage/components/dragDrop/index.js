import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
  }));

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

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

const BotSkillsDragDrop = () => {
  const [items, setItems] = useState(getItems(10));
  const [selected, setSelected] = useState(getItems(5, 10));

  const getList = (id) => (id === 'droppable') ? items : selected;

  const onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const reorderedItems = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      let newState = { 
        reorderedItems
      };

      if (source.droppableId === 'droppable2') {
        newState = { selected: reorderedItems };
      }

      setSelected(newState.selected);
    } else {
      const moveResult = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      setItems(moveResult.droppable);
      setSelected(moveResult.droppable2);
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}>
            {items.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}>
                {(provided2, snapshot2) => (
                  <div
                    ref={provided2.innerRef}
                    {...provided2.draggableProps}
                    {...provided2.dragHandleProps}
                    style={getItemStyle(
                      snapshot2.isDragging,
                      provided2.draggableProps.style
                    )}>
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="droppable2">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}>
            {selected.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}>
                {(provided2, snapshot2) => (
                  <div
                    ref={provided2.innerRef}
                    {...provided2.draggableProps}
                    {...provided2.dragHandleProps}
                    style={getItemStyle(
                      snapshot2.isDragging,
                      provided2.draggableProps.style
                    )}>
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default BotSkillsDragDrop;
