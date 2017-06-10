/* @flow */
import styled from 'styled-components';
import { colors, sizes } from '../styles/utils';
import Container from '../components/Container';
import HighlightButton from '../components/HighlightButton';

const PaddedContainer = styled(Container)`
  padding: 120px 0 0 0;
`;

const Right = styled.div`
  width: 350px;
  display: flex;
  flex: 0 1 auto;
  align-items: flex-end;
`;

const Left = styled.div`
  flex: 1 0 auto;
`;

const HugeImage = styled.img`
  width: 55%;
`;

const Title = styled.h1`
  font-size: 3.5rem;
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
  <PaddedContainer flex>
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
  </PaddedContainer>
);

export default Header;
