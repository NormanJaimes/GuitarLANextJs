import Head from 'next/head';
import Footer from './footer';
import Header from './header';

export default function layout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
