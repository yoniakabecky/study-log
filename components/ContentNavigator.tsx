import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import React, { ReactElement } from "react";

import Link from "@@/components/NonDecorationLink";
import { BUBBLE } from "@@/Routes";

interface Props {}

export default function ContentNavigator({}: Props): ReactElement {
  return (
    <TreeView
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
    >
      <TreeItem nodeId="1" label="Algorithms">
        <TreeItem nodeId="2" label="Sorting">
          <Link href={BUBBLE}>
            <TreeItem nodeId="3" label="Bubble Sort" />
          </Link>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
