import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '@/components/Layout';
import Hero from '@/components/hero/Hero';
import TechnicalSection from '@/components/technical-section/TechnicalSection';
import ProjectSection from '@/components/project-section/ProjectSection';

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
        <Hero />
        <TechnicalSection />
        <ProjectSection />
      </Layout>
    </>
  );
};

export default Home;
