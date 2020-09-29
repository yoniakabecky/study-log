import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";

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
          <Link href="/">
            <Anchor>
              <Typography variant="h6">Yoni's Study Log</Typography>
            </Anchor>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
