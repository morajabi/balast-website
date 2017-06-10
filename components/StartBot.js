/* @flow */
import styled from 'styled-components';
import { sizes } from '../styles/utils';
import Section from './Section';
import Container from './Container';
import ZigZagSeparator from './ZigZagSeparator';
import LightBox from './LightBox';
import HighlightButton from './HighlightButton';

const CenterContainer = styled(Container)`
  text-align: center;
  padding-top: 12rem;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.5em;
  font-size: ${sizes.heading1};
  text-align: center;
`;

const SubTitle = styled.p`
  margin: .6rem 0 0 0;
  line-height: 1.9em;
  font-size: 1.9rem;
  text-align: center;
`;

const RobotImage = styled.img`
  max-width: 30%;
  text-align: center;
  margin-bottom: 2rem;
`;

const ImageBox = styled(LightBox)`
  display: inline-block;
  max-width: auto;
  
  @media (max-width: 700px) {
    padding: 0;
  }
`;

const FullImage = styled.img`
  display: inline-block;
  max-width: 100%;
`;

const ImageCenterer = styled.div`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const StartBot = ({ ...props }) => (
  <Section>
    <CenterContainer padded>
      <RobotImage src="/static/images/robot.png" /> 

      <Title>بسپاریدش به ربات!</Title>
      <SubTitle>
        تلگرام رو باز کنید و آدرس یا آی‌پی رو بهش بدید.
      </SubTitle>

      <ImageCenterer>
        <ImageBox>
          <FullImage src="/static/images/chat.png" />
        </ImageBox>
      </ImageCenterer>

      <HighlightButton link href="http://t.me/balast">ربات رو شروع کنید</HighlightButton>

    </CenterContainer>
  </Section>
);

export default StartBot;
