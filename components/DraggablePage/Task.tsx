import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { ReactElement } from "react";
import { Draggable, resetServerContext } from "react-beautiful-dnd";

import { ITask } from "@@/interfaces/draggable";

interface Props {
  task: ITask;
  index: number;
}

const useStyles = makeStyles(() => ({
  paper: {
    marginBottom: "0.5rem",
    padding: "1rem",
  },
}));

resetServerContext();

export default function Task({ task, index }: Props): ReactElement {
  const classes = useStyles();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Paper
          className={classes.paper}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </Paper>
      )}
    </Draggable>
  );
}
