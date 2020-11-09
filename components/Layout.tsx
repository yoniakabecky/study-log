import Container from "@material-ui/core/Container";
import React, { ReactElement, ReactNodeArray } from "react";

import Meta from "./Meta";
import Navbar from "./Navbar";

interface Props {
  children: ReactNodeArray | ReactElement;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Meta />

      <Navbar />

      <main>
        <Container maxWidth="lg" style={{ padding: "1rem" }}>
          {children}
        </Container>
      </main>
    </>
  );
}
