/* @flow */
import styled from 'styled-components';
import { colors, sizes } from '../styles/utils';
import Section from './Section';
import Container from './Container';
import ZigZagSeparator from './ZigZagSeparator';

const FlexWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;

  @media (max-width: 700px) {
  }
`;

const Right = styled.div`
  flex: 0 0 5.5rem;
`;

const Left = styled.div`
  flex: 1 1 auto;
  padding-right: 1.5rem;
`;

const SubText = styled.p`
  margin: 0;
  line-height: 1em;
  font-size: 2rem;
  @media (max-width: 700px) {
    font-size: 1.7rem;
  }
`;

const KeyText = styled.p`
  margin: .5rem 0 0 0;
  line-height: 1.5em;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Highlight = styled.span`
  background: ${colors.paleBlue};
`;

const FullImage = styled.img`
  max-width: 100%;
  display: inline-block;
`;

const SinceIsDown = ({ ...props }) => (
  <Section>
    <Container padded>
      <ZigZagSeparator align="right" />

      <FlexWrapper>
        <Right>
          <FullImage src="/static/images/clock.svg" />
        </Right>
        <Left>
          <SubText>
            دردناک‌تر از پایین اومدن سایت اینه که
          </SubText>
          <KeyText>
            معلوم نیست چقدره دردسترس نیست و&nbsp;
            <Highlight>تو خبر نداشتی!</Highlight>
          </KeyText>
        </Left>
      </FlexWrapper>
    </Container>
  </Section>
);

export default SinceIsDown;
