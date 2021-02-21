import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React, { ReactElement } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { IColumn, ITask } from "@@/interfaces/draggable";
import Task from "./Task";

interface Props {
  column: IColumn;
  tasks: ITask[];
}

const useStyles = makeStyles(() => ({
  title: { marginBottom: "1rem" },
}));

export default function Column({ column, tasks }: Props): ReactElement {
  const classes = useStyles();

  return (
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <ColumnWrapper isDraggingOver={snapshot.isDraggingOver}>
          <Typography variant="h4" className={classes.title}>
            {column.title}
          </Typography>

          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </ColumnWrapper>
      )}
    </Droppable>
  );
}

const ColumnWrapper = styled.div<{ isDraggingOver: boolean }>`
  margin: 0.5rem;
  border: 2px solid lightgray;
  transition: border-color 0.2s ease;
  border-color: ${(props) => props.isDraggingOver && "#8e24aa"};
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;
