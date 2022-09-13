import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import Hero from '@/components/mobile/hero/Hero';
import HeroSection from '@/components/web/hero/Hero';
import TechnicalSection from '@/components/mobile/technical-section/TechnicalSection';
import WebTechnicalSection from '@/components/web/technical-section/TechnicalSection';
import WebProjectSection from '@/components/mobile/project-section/ProjectSection';
import CarouselSection from '@/components/carousel-section/CarouselSection';
import Grid from '@/components/grid/Grid';
import MobilePage from '@/components/mobile/MobilePage';
import WebPage from '@/components/web/WebPage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Chris Doll | Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        title="Chris Doll | Full Stack Developer"
        description="Chris Doll is a Full Stack Developer with offices in Canada and Brazil."
        keywords=""
        background="bg-white"
        styles="min-h-screen"
        width=""
      >
        <MobilePage />
        <WebPage />
        <CarouselSection
          slides={[
            '/public/images/learning.png',
            '/public/images/vivacity.png',
            '/public/images/chair.png',
            '/public/images/seeds.png',
            '/public/images/memory.png',
            '/public/images/resume-builder',
          ]}
        />
      </Layout>
    </>
  );
};

export default Home;
