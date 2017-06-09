import Head from 'next/head';
import styled from 'styled-components';

const Par = styled.p`
  font-size: 120px;
`;

const Index = () => (
  <div>
    <Head>
      <title>Salam</title>
    </Head>

    <Par>salam</Par>
  </div>
);

export default Index;
