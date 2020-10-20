import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface Props {
  src: string;
  alt: string;
}

export default function CodeImg({src, alt, ...props}: Props): ReactElement {
  return (
    <Root src={src} alt={alt} {...props} />
  )
}

const Root = styled.img`
  width: 100%;
`;