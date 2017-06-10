import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header';
import SureIsUp from '../components/SureIsUp';
import SinceIsDown from '../components/SinceIsDown';

const Index = () => (
  <div>
    <Head>
      <title>Balast</title>
    </Head>

    <Header />
    <SureIsUp />
    <SinceIsDown />
  </div>
);

export default Index;
