import React, { ReactElement } from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MoonIcon from "@material-ui/icons/Brightness2";
import SunIcon from "@material-ui/icons/Brightness7";

import Link from "@@/components/NonDecorationLink";
import { useTheme } from "@@/pages/_app";
import { HOME } from "@@/routes";

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      padding: 0,
    },
    spacer: {
      flexGrow: 1,
    },
  })
);

export default function Navbar(): ReactElement {
  const classes = useStyles();
  const { prefersDarkMode, toggleTheme } = useTheme();

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Link href={HOME}>
            <Typography variant="h6">Yoni's Study Log</Typography>
          </Link>

          <span className={classes.spacer} />

          <IconButton onClick={toggleTheme}>
            {prefersDarkMode ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
