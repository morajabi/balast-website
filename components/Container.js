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
      ${props.padded ? `padding: ${sizes.sectionTop} 0;` : ''}  
    `
  )}

  padding-right: .7rem;
  padding-left: .7rem;
`;

const Container = ({ ...props }) => (
  <Wrapper {...props} />
);

export default Container;
