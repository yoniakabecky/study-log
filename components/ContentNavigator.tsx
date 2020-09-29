import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {}

export default function ContentNavigator({}: Props): ReactElement {
  return (
    <TreeView
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
    >
      <TreeItem nodeId="1" label="Algorithms">
        <TreeItem nodeId="2" label="Sort">
          <Link href="/algorithms/sort/bubble">
            <Anchor>
              <TreeItem nodeId="3" label="Bubble Sort" />
            </Anchor>
          </Link>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
