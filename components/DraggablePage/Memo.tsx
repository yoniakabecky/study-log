import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme) => ({
  code: {
    margin: "0 0.25rem",
    padding: "0.125rem 0.25rem",
    borderRadius: "5px",
    background: theme.palette.primary.light,

    "& a": {
      textDecoration: "none",
    },
  },
  link: {
    color: theme.palette.secondary.main,
  },
}));

export default function Memo(): ReactElement {
  const classes = useStyles();

  return (
    <ul>
      <li>
        <Typography variant="body1">
          Used
          <code className={classes.code}>
            <a href="https://www.npmjs.com/package/react-beautiful-dnd">
              react-beautiful-dnd
            </a>
          </code>
        </Typography>
      </li>
      <li>
        <Typography variant="body1">
          Followed the tutorial at{" "}
          <a
            href="https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd"
            target="blank"
            className={classes.link}
          >
            egghead.io
          </a>
        </Typography>
      </li>
    </ul>
  );
}
