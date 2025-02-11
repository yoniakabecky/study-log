import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import CodeImg from "@@/components/CodeImg";
import Layout from "@@/components/Layout";
import LinkedBreadcrumbs from "@@/components/LinkedBreadcrumbs";
import { getAlgorithmsPost } from "@@/lib/contentful";
import marked from "@@/lib/marked";
import { IAlgorithmPostFields } from "@@/interfaces/post";

export default function SelectionSortPage({
  title,
  body,
  image,
}: IAlgorithmPostFields): ReactElement {
  const pathname = useRouter()?.pathname;

  return (
    <Layout>
      <LinkedBreadcrumbs pathname={pathname} />

      <Typography variant="h2" component="h1" gutterBottom>
        {title}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div dangerouslySetInnerHTML={{ __html: marked(body) }} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper>
            <CodeImg src={image.fields?.file.url} alt="code" />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export const getStaticProps = async (): Promise<any> => {
  const post = await getAlgorithmsPost(true, "/sorting/selection");

  return {
    props: post,
  };
};
