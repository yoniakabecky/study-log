import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import React, { ReactElement } from "react";

import Link from "@@/components/NonDecorationLink";
import { breadcrumbNameMap } from "@@/renameRoutes";

interface Props {
  pathname: String;
}

export default function LinkedBreadcrumbs({ pathname }: Props): ReactElement {
  const pathNames = pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/" style={{ display: "flex" }}>
        <HomeIcon style={{ width: 20, height: 20 }} />
        Home
      </Link>

      {pathNames.map((_, index) => {
        const last = index === pathNames.length - 1;
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography key={`breadcrumb-${index}`}>
            {breadcrumbNameMap[href]}
          </Typography>
        ) : (
          <Link href={href} key={`breadcrumb-${index}`}>
            {breadcrumbNameMap[href]}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
