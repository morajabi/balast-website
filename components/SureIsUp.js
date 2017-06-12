/* @flow */
import styled from 'styled-components';
import { sizes } from '../styles/utils';
import Section from './Section';
import Container from './Container';
import ZigZagSeparator from './ZigZagSeparator';
import LightBox from './LightBox';

const SectionTitle = styled.h1`
  margin: 0;
  line-height: 1.5em;
  font-size: ${sizes.heading1};
  text-align: center;
`;

const Description = styled.p`
  margin: .6rem 0 0 0;
  line-height: 1.9em;
  font-size: 1.9rem;
  text-align: center;
`;

const ImageBox = styled(LightBox)`
  margin: 3rem auto 0 auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

const NormalImage = styled.img`
  display: inline-block;
  max-width: 100%;
  @media (max-width: 700px) {
    display: none;
  }
`;

const CompactImage = styled.img`
  display: inline-block;
  max-width: 100%;
  @media (min-width: 701px) {
    display: none;
  }
`;


const SureIsUp = ({ ...props }) => (
  <Section>
    <Container padded>
      <ZigZagSeparator align="center" />
      <SectionTitle>مطمئنی سایتت بالاست؟</SectionTitle>
      <Description>
        از آخرین باری که سایت یا 
        سرورت رو چک کردی ممکنه از دسترس خارج شده باشه.
      </Description>
      
      <ImageBox>
        <NormalImage 
          src="/static/images/down-process.png" 
        />
        <CompactImage 
          src="/static/images/down-process-mini.png" 
        />
      </ImageBox>

    </Container>
  </Section>
);

export default SureIsUp;
