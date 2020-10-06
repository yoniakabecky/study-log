import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

import ContentNavigator from "@@/components/ContentNavigator";
import Layout from "@@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Study Log
        </Typography>

        <ContentNavigator />
      </Box>
    </Layout>
  );
}
