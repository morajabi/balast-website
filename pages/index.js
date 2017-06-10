import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header';
import SureIsUp from '../components/SureIsUp';
import SinceIsDown from '../components/SinceIsDown';
import StartBot from '../components/StartBot';
import Footer from '../components/Footer';

const Index = () => (
  <div>
    <Head>
      <title>Balast</title>
    </Head>

    <Header />
    <SureIsUp />
    <SinceIsDown />
    <StartBot />
    <Footer />
  </div>
);

export default Index;
