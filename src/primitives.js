// @flow
// @jsx glam

import React from 'react';
import glam from 'glam';

import type { InnerRef } from './types';

type Props = {
  css?: {},
  innerRef?: InnerRef,
};

const createPrimitive = (Tag: string) => ({
  css,
  innerRef,
  ...props
}: Props) => <Tag ref={innerRef} css={css} {...props} />;

export const Button = createPrimitive('button');
export const Div = createPrimitive('div');
export const Span = createPrimitive('span');
export const Strong = createPrimitive('strong');
export const Em = createPrimitive('em');

export const Ul = ({ css, innerRef, ...props }: Props) => (
  <ul ref={innerRef} css={{ margin: 0, padding: 0, ...css }} {...props} />
);
export const Li = ({ css, innerRef, ...props }: Props) => (
  <li ref={innerRef} css={{ listStyle: 'none', ...css }} {...props} />
);

export const SROnly = (props: any) => (
  <span
    css={{
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1,
    }}
    {...props}
  />
);