import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React, { ReactElement } from "react";

import { IColumn, ITask } from "@@/interfaces/draggable";
import Task from "./Task";

interface Props {
  column: IColumn;
  tasks: ITask[];
}

const useStyles = makeStyles(() => ({
  root: {
    margin: "0.5rem",
    border: "1px solid lightgray",
    borderRadius: 5,
  },
  title: { padding: "0.5rem" },
  taskList: { padding: "0.5rem" },
}));

export default function Column({ column, tasks }: Props): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        {column.title}
      </Typography>

      <div className={classes.taskList}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
