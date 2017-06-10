/* @flow */
import styled, { keyframes } from 'styled-components';
import Container from '../components/Container';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const Wrapper = styled.footer`
  padding: 10rem 0;
`;

const CopyRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #999;
`;

const Love = styled.span`
  color: #ba0001;
  font-size: 1.3em;
  animation: ${pulse} 1.4s ease-out infinite;
`;

const TarinoLogo = styled.img`
  height: 2rem;
  display: inline;
  margin: .5rem 0;
  transition: transform .2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Footer = ({ ...props }) => (
  <Wrapper>
    <Container>
      <CopyRightWrapper>
        ساخته‌شده با&nbsp;
        <Love>❤️</Love>
        &nbsp;توسط&nbsp;
        <a href="http://tarino.ir" target="_blank">
          <TarinoLogo src="/static/images/tarino-logo.svg" />
        </a>
      </CopyRightWrapper>
    </Container>
  </Wrapper>
);

export default Footer;
