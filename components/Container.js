import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;

  ${props => (props.flex ? css`
      display: flex;
    ` :
    ''
  )}
`;

const Container = ({ ...props }) => (
  <Wrapper {...props} />
);

export default Container;
