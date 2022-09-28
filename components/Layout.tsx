import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';
import Doll from '@/public/images/dall-doll.png';
import Header from './header/Header';
import Hero from './hero/Hero';
import Technical from './technical/Technical';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const Layout = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
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
      <div id="header" className="snap-start scroll-smooth">
        <Header />

        <section id="hero">
          <Hero />
        </section>
      </div>

      <section id="technical" className="snap-start scroll-smooth">
        <Technical />
      </section>

      <section id="projects" className="snap-start scroll-smooth md:snap-none">
        <Projects />
      </section>

      <section id="contact" className="snap-start scroll-smooth">
        <Contact />
      </section>

      <Link href="#header">
        <footer className="sticky bottom-5 w-full flex items-center justify-center">
          <Image
            src={Doll}
            alt="3D render of Chris Doll"
            className="h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer"
          />
        </footer>
      </Link>

      {/* Footer */}
    </div>
  );
};

export default Layout;
