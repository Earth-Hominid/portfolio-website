import Head from 'next/head';
import Header from './Header';
import Footer from './footer/Footer';
import Showcase from './homepage/showcase/Showcase';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  keywords: string;
  description: string;
  background: string;
  children?: React.ReactNode;
  mainPage: string;
  currentPage: string;
  mainPageTitle: string;
  currentPageTitle: string;
  styles: string;
  width: string;
}

export const Layout: React.FC<Props> = ({
  description,
  children,
  title,
  keywords,
  background,
  mainPage,
  currentPage,
  mainPageTitle,
  currentPageTitle,
  styles,
  width,
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header
        mainPage={mainPage}
        currentPage={currentPage}
        mainPageTitle={mainPageTitle}
        currentPageTitle={currentPageTitle}
      />
      {router.pathname === '/' && <Showcase />}
      <div className={`${background} ${styles}`}>
        <div className={`${width}`}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: 'Christopher Doll | Full Stack Developer',
  description: 'Chris Doll, full stack developer ',
  keywords: `full stack, front end engineer, front end developer, full stack developer, node, react, javascript, typescript, git, github, html, css, tailwindcss
  `,
};
