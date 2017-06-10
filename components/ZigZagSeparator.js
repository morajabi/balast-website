/* @flow */
import styled, { css } from 'styled-components';
import { sizes } from '../styles/utils';

const Spacer = styled.div`
  padding: ${sizes.separatorSpace} 0;
  ${props => css`text-align: ${props.align};`}
  opacity: .6;
`;

const ZigZagSeparator = ({ align, ...props }) => (
  <Spacer align={align || 'right'} {...props}>
    <img src="/static/images/separator.svg" />
  </Spacer>
);

export default ZigZagSeparator;
