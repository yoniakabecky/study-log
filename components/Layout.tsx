import Container from "@material-ui/core/Container";
import React, { ReactElement, ReactNodeArray } from "react";

import Navbar from "./Navbar";

interface Props {
  children: ReactNodeArray | ReactElement;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Navbar />

      <main>
        <Container maxWidth="lg" style={{ padding: "1rem" }}>
          {children}
        </Container>
      </main>
    </>
  );
}
