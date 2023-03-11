import Curso from '@/components/curso';
import Guitarra from '@/components/guitarra';
import Layout from '@/components/layout';
import Post from '@/components/post';
import Link from 'next/link';
import styles from '../styles/grid.module.css';

export default function Home({ guitarras, posts, curso }) {
  return (
    <>
      <Layout
        title={'Inicio'}
        // description={'BLog de música, vent de guitarras y más'}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              ></Guitarra>
            ))}
          </div>
        </main>
        <Curso curso={curso.attributes}></Curso>
        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts?.map((post) => {
              return <Post key={post.id} post={post.attributes}></Post>;
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  console.log(urlCurso, 'curso');

  const [resGuitarras, resPost, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso),
  ]);
  const [{ data: guitarras }, { data: posts }, { data: curso }] =
    await Promise.all([resGuitarras.json(), resPost.json(), resCurso.json()]);

  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}
