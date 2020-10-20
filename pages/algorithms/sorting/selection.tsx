import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import CodeImg from "@@/components/CodeImg";
import Layout from "@@/components/Layout";
import LinkedBreadcrumbs from "@@/components/LinkedBreadcrumbs";

interface Props {}

export default function SelectionSortPage({}: Props): ReactElement {
  const pathname = useRouter()?.pathname;

  return (
    <Layout>
      <LinkedBreadcrumbs pathname={pathname} />

      <Typography variant="h2" component="h1" gutterBottom>
        Selection Sort
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" gutterBottom>
            Given an array of N items and L = 0, Selection Sort will:
          </Typography>

          <ol>
            <li>
              Find the position X of the smallest item in the range of
              [L...N−1],
            </li>
            <li>Swap X-th item with the L-th item,</li>
            <li>
              Increase the lower-bound L by 1 and repeat Step 1 until L = N-2.
            </li>
          </ol>

          <Typography variant="body1" gutterBottom>
            Total: <code>O(N2)</code> — To be precise, it is similar to Bubble
            Sort analysis.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper>
            <CodeImg src="/assets/selectionCode.png" alt="code" />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
