import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import Layout from "@@/components/Layout";
import LinkedBreadcrumbs from "@@/components/LinkedBreadcrumbs";
import Link from "@@/components/NonDecorationLink";
import { BUBBLE, SELECTION } from "@@/routes";

interface Props {}

export default function SortingPage({}: Props): ReactElement {
  const pathname = useRouter()?.pathname;

  return (
    <Layout>
      <LinkedBreadcrumbs pathname={pathname} />

      <Typography variant="h2" component="h1" gutterBottom>
        Sorting
      </Typography>

      <ul>
        <li>
          <Link href={BUBBLE}>Bubble Sort</Link>
        </li>
        <li>
          <Link href={SELECTION}>Selection Sort</Link>
        </li>
      </ul>
    </Layout>
  );
}
