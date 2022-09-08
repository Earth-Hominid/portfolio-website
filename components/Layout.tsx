import Head from 'next/head';
import Header from './Header';
import WebHeader from './web/navigation/WebHeader';
import Footer from './footer/Footer';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  keywords: string;
  description: string;
  background: string;
  children?: React.ReactNode;
  styles: string;
  width: string;
}

export const Layout: React.FC<Props> = ({
  title,
  description,
  children,
  keywords,
  background,
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
      <WebHeader />
      <Header />
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
