import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';
import { useState, useContext } from 'react';
import ThemeContext from '@/context/darkModeContext';
import Doll from '@/public/images/dall-doll.png';
import Header from './header/Header';
import Hero from './hero/Hero';
import Technical from './technical/Technical';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

const Layout = () => {
  const { darkMode, handleToggleThemeClick } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Christopher Doll | Full Stack Developer</title>
        <meta
          name="description"
          content="Chris Doll is a Full Stack Developer with offices in Canada and Brazil."
        />
        <meta
          name="keywords"
          content="full stack, front end engineer, front end developer, full stack developer, node, react, javascript, typescript, git, github, html, css, tailwindcss"
        />
      </Head>

      <div className="dark:bg-[#16181D]">
        <header>
          <Header
            handleToggleThemeClick={handleToggleThemeClick}
            darkMode={darkMode}
          />
        </header>

        <section id="hero" className="min-h-screen">
          <Hero darkMode={darkMode} />
        </section>

        <section id="technical" className="min-h-screen">
          <Technical darkMode={darkMode} />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact darkMode={darkMode} />
        </section>

        <Link href="#header">
          <div className="sticky bottom-0 w-full flex items-center justify-center pt-5 ">
            <Image
              src={Doll}
              alt="3D render of Chris Doll"
              className="h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        </Link>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Layout;
