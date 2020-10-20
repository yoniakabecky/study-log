import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import CodeImg from "@@/components/CodeImg";
import Layout from "@@/components/Layout";
import LinkedBreadcrumbs from "@@/components/LinkedBreadcrumbs";

interface Props {}

export default function BubbleSortPage({}: Props): ReactElement {
  const pathname = useRouter()?.pathname;

  return (
    <Layout>
      <LinkedBreadcrumbs pathname={pathname} />

      <Typography variant="h2" component="h1" gutterBottom>
        Bubble Sort
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" gutterBottom>
            There are two nested loops in (the standard) Bubble Sort.
          </Typography>

          <Typography variant="body1" gutterBottom>
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

          <Typography variant="body1" gutterBottom>
            Thus,
            <br />
            <code>
              the total number of iterations = (N−1)+(N−2)+...+1+0 = N*(N−1)/2{" "}
            </code>
            <br />
            <code>Total time = c*N*(N−1)/2 = O(N^2)</code>
          </Typography>

          <Typography variant="body2" gutterBottom>
            The improvement idea is simple: If we go through the inner loop with
            no swapping at all, it means that the array is already sorted and we
            can stop Bubble Sort at that point.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper>
            <CodeImg src="/assets/bubbleCode.png" alt="code" />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
