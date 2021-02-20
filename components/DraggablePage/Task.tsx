import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import React, { ReactElement } from "react";

import { ITask } from "@@/interfaces/draggable";

interface Props {
  task: ITask;
}

const useStyles = makeStyles(() => ({
  root: { marginBottom: "0.5rem" },
  content: { paddingBottom: "1rem" },
}));

export default function Task({ task }: Props): ReactElement {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>{task.content}</CardContent>
    </Card>
  );
}
