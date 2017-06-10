import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header';
import SureIsUp from '../components/SureIsUp';

const Index = () => (
  <div>
    <Head>
      <title>Balast</title>
    </Head>

    <Header />
    <SureIsUp />
  </div>
);

export default Index;
