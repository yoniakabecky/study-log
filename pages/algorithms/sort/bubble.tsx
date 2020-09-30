import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import Layout from "@@/components/Layout";
import LinkedBreadcrumbs from "@@/components/LinkedBreadcrumbs";

interface Props {}

export default function BubbleSortPage({}: Props): ReactElement {
  const pathname = useRouter()?.pathname;

  return (
    <Layout>
      <Container maxWidth="lg" style={{ padding: "1rem" }}>
        <LinkedBreadcrumbs pathname={pathname} />

        <Typography variant="h2" component="h1" gutterBottom>
          Bubble Sort
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              There are two nested loops in (the standard) Bubble Sort.
            </Typography>

            <Typography variant="body1">
              The outer loop runs for exactly N iterations. But the inner loop
              runs get shorter and shorter:
            </Typography>

            <ol>
              <li>
                When i=0, (N−1) iterations (of comparisons and possibly swaps),
              </li>
              <li>When i=1, (N−2) iterations,</li>
              <span>...,</span>
              <li>When i=(N−2), 1 iteration,</li>
              <li>When i=(N−1), 0 iteration.</li>
            </ol>

            <Typography variant="body1">
              Thus, the total number of iterations = (N−1)+(N−2)+...+1+0 =
              N*(N−1)/2 (derivation).
              <br />
              Total time = c*N*(N−1)/2 = O(N^2).
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper>
              <code>sorting algorithm</code>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
