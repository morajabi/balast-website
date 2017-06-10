/* @flow */
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { colors, sizes, convertColor } from '../styles/utils';

const wrapperStyles = css`
  padding: ${sizes.buttonPadding};
  font-size: ${sizes.buttonText};
  cursor: pointer;
  transition: background .2s, color .2s;
  border-radius: ${sizes.buttonRadius};
  background: ${colors.paleBlueGray};
  
  &:hover {
    color: ${convertColor(`color(${colors.blue}  shade(4))`)};
    background: ${convertColor(`color(${colors.paleBlueGray}  shade(3))`)};
  }
  
  &:active {
    color: ${convertColor(`color(${colors.blue}  shade(8))`)};
    background: ${convertColor(`color(${colors.paleBlueGray}  shade(6))`)};
  }
`;
const LinkWrapper = styled.a`${wrapperStyles}`;
const ButtonWrapper = styled.button`${wrapperStyles}`;

const HighlightButton = ({ link = false, ...props }) => {
  const Wrapper = link ? LinkWrapper : ButtonWrapper;

  return (
    <Wrapper {...props} />
  );
};

export default HighlightButton;
