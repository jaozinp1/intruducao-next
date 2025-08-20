import styles from './page.module.css';
import Image from 'next/image'; // Adicione esta linha

export default function Home() {
  return(
    <div className='container'>
      <h1 className={styles.tituloHome}>Titulo</h1>
      <h2>Titulo 2</h2>
      <h3>Titulo 3</h3>
      <p className='txtDestaque'>Primeiro exemplo no Next</p>
      <p>Primeiro exemplo Next</p>
      <small>Texto menor</small>
      <br/>
      <div className="quadrado"></div>

      <Image 
      src='/temp/arvore.jpg'
      alt="Arvore"
      width={130}
      height={90}
      />

      
      <Image 
      src='/temp/arvore.jpg'
      alt="Arvore"
      width={1300}
      height={900}
      />

    </div>
  );
}