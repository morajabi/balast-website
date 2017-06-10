import Head from 'next/head';
import styled from 'styled-components';
import Container from '../components/Container';
import HighlightButton from '../components/HighlightButton';

const Par = styled.span`
  font-size: 120px;
  font-weight: 400;
`;

const Pars = styled.span`
  font-size: 120px;
  font-weight: 300;
`;

const Parss = styled.span`
  font-size: 120px;
  font-weight: bold;
`;

const Index = () => (
  <div>
    <Head>
      <title>Balast</title>
    </Head>

    <Container>
      <img src="/static/images/lighthouse.svg"/>
      <HighlightButton link href="http://sad.com">بیشتر بدانید</HighlightButton>
    </Container>
  </div>
);

export default Index;
