/* @flow */
import styled from 'styled-components';
import { colors, sizes } from '../styles/utils';
import Section from './Section';
import Container from '../components/Container';
import HighlightButton from '../components/HighlightButton';

const FlexibleContainer = styled(Container)`
  @media (max-width: 700px) {
    flex-flow: column;
    justify-content: center;
    text-align: center;
  }
`;

const Right = styled.div`
  width: 21.9rem;
  display: flex;
  flex: 0 1 auto;
  align-items: flex-end;

  @media (max-width: 700px) {
    justify-content: center;
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 1 1 auto;
`;

const HugeImage = styled.img`
  width: 55%;
  display: inline-block;

  @media (max-width: 700px) {
    width: 35%;
  }
`;

const Title = styled.h1`
  font-size: 3.3rem;
  line-height: 1em;
  color: ${colors.primary};
`;

const LightTitle = styled.span`
  font-weight: 300;
`;

const Description = styled.p`
  font-size: 2rem;
  line-height: 1.65em;
  color: ${colors.black};
`;

const Header = ({ ...props }) => (
  <Section>
    <FlexibleContainer flex padded>
      <Right>
        <HugeImage src="/static/images/lighthouse.svg" />
      </Right>
      <Left>
        <Title><LightTitle>سایتم</LightTitle> بالاست؟</Title>
        <Description>
          قبل از اینکه مشتری به مشکل بخوره،
          <br /> از پایین اومدن سایت‌تون خبردار بشید.
        </Description>
        <HighlightButton link href="#section2">بیشتر بدانید</HighlightButton>
      </Left>
    </FlexibleContainer>
  </Section>
);

export default Header;
