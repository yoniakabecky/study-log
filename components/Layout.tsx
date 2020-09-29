import React, { ReactElement } from "react";

import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
}
