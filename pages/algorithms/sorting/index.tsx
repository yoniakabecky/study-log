import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import Layout from "@@/components/Layout";
import LinkedBreadcrumbs from "@@/components/LinkedBreadcrumbs";
import { BUBBLE, SELECTION } from "@@/routes";
import ArticleIndexCard from "@@/components/ArticleIndexCard";

interface Props { }

export default function SortingPage({ }: Props): ReactElement {
  const pathname = useRouter()?.pathname;

  return (
    <Layout>
      <LinkedBreadcrumbs pathname={pathname} />

      <Typography variant="h2" component="h1" gutterBottom>
        Sorting
      </Typography>

      <Grid container spacing={4}>
        <Grid item >
          <ArticleIndexCard title="Bubble Sort" image="/assets/bubbleCode.png" href={BUBBLE} />
        </Grid>

        <Grid item>
          <ArticleIndexCard title="Selection Sort" image="/assets/selectionCode.png" href={SELECTION} />
        </Grid>
      </Grid>
    </Layout>
  );
}
