import styled, { css } from 'styled-components';
import { sizes } from '../styles/utils';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 .7rem;

  ${props => (
    css`
      ${props.flex ? 'display: flex;' : ''}  
      ${props.padded ? `padding-top: ${sizes.sectionTop};` : ''}  
    `
  )}

  padding-right: 1.3rem;
  padding-left: 1.3rem;
`;

const Container = ({ ...props }) => (
  <Wrapper {...props} />
);

export default Container;
