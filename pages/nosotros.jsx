import Layout from '@/components/layout';
import Image from 'next/image';
import styles from '../styles/nosotros.module.css';

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="Imagen sobre nosotros"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, a, rerum nemo vero corporis exercitationem dolore
                consequuntur possimus, modi incidunt error. Corporis amet enim
                odit provident fugiat quos, deleniti dicta. Lorem ipsum dolor
                sit amet consecteturquos, deleniti dicta.
              </p>
              <p>
                Sit amet consectetur adipisicing elit. Architecto, a, rerum nemo
                vero corporis exercitationem dolore consequuntur possimus, modi
                incidunt error. Corporis amet enim odit provident fugiat quos,
                deleniti dicta. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Architecto, a, rerum nemo vero corporis
                exercitationem dolore consequuntur possimus, modi incidunt
                error. Corporis amet enim odit provident fugiat quos, deleniti
                dicta.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
