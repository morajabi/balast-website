import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1180px;
  margin: 0 auto;
`;

const Container = ({ ...props }) => (
  <Wrapper {...props} />
);

export default Container;
