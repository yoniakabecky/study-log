import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import React, { ReactElement } from "react";
import { Draggable, resetServerContext } from "react-beautiful-dnd";
import styled from "styled-components";

import { ITask } from "@@/interfaces/draggable";

interface Props {
  task: ITask;
  index: number;
}

resetServerContext();

export default function Task({ task, index }: Props): ReactElement {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Paper
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <IconWrapper {...provided.dragHandleProps}>
            <DragIndicatorIcon />
          </IconWrapper>

          {task.content}
        </Paper>
      )}
    </Draggable>
  );
}

const Paper = styled.div<{ isDragging: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  transition: border-color 0.2s ease;
  background-color: ${(props) => (props.isDragging ? "#4b4663" : "#616161")};
  padding: 0.5rem;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  height: 24px;
`;
