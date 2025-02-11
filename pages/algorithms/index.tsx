import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import Layout from "@@/components/Layout";
import LinkedBreadcrumbs from "@@/components/LinkedBreadcrumbs";

interface Props {}

export default function index({}: Props): ReactElement {
  const pathname = useRouter()?.pathname;

  return (
    <Layout>
      <LinkedBreadcrumbs pathname={pathname} />

      <Typography variant="h2" component="h1" gutterBottom>
        Algorithms
      </Typography>
    </Layout>
  );
}
