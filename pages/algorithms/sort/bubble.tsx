import Container from "@material-ui/core/Container";
import React, { ReactElement } from "react";

import Layout from "@@/components/Layout";

interface Props {}

export default function BubbleSortPage({}: Props): ReactElement {
  return (
    <Layout>
      <Container maxWidth="lg">
        <h1>Bubble Sort</h1>
      </Container>
    </Layout>
  );
}
