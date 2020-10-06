import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { ReactElement } from "react";

import Link from "@@/components/NonDecorationLink";
import { HOME } from "@@/renameRoutes";

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      paddingLeft: 0,
    },
  })
);

export default function Navbar(): ReactElement {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Link href={HOME}>
            <Typography variant="h6">Yoni's Study Log</Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
