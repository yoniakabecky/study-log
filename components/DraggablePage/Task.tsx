import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { Theme, useTheme } from "@material-ui/core/styles";
import React, { ReactElement } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import { ITask } from "@@/interfaces/draggable";

interface Props {
  task: ITask;
  index: number;
}

export default function Task({ task, index }: Props): ReactElement {
  const theme = useTheme();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Paper
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          theme={theme}
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

const Paper = styled.div<{ theme: Theme; isDragging: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  transition: border-color 0.2s ease;
  background-color: ${({ theme, isDragging }) =>
    isDragging ? theme.palette.secondary.dark : theme.palette.primary.dark};
  padding: 0.5rem;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  height: 24px;
`;
