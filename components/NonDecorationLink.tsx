import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  href: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function NonDecorationLink({
  children,
  href,
  style,
  className,
}: Props): ReactElement {
  return (
    <Link href={href}>
      <Anchor style={style} className={className}>
        {children}
      </Anchor>
    </Link>
  );
}

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
