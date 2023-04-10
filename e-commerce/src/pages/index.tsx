import CarouselSups from '@/components/CarouselSups';
import styles from '../styles/global.module.css';
import stylesContainer from '../styles/index.module.css';
import Head from 'next/head';


export default function Home() {

  const title = 'Health & Care';

  return (
    <>
    <Head>
        <title>{title}</title>
    </Head>
    <div className={styles.container}>
      <div className={stylesContainer.containerSup1}>
        <div className={stylesContainer.item}>
          <img src='/supplement1.jpg' className={stylesContainer.imgSup1}/>
          <div className={stylesContainer.about}>
            <h1>Supplement healthy</h1>
            <p> 
              super supplement for your health and well-being,
              natural and 100% functional, take advantage of this offer.
            </p>
          </div>
          <div className={stylesContainer.valueProduct}>
            <h2>$9.99</h2>
            <button className={stylesContainer.button}>Buy</button>
          </div>
        </div>
      </div>

      {/* --------------------- Carousel --------------------- */}

      <div className={stylesContainer.carousel}>
        {/* <CarouselSups /> */}
      </div>

      {/* ------------------ Apple and Vase ------------------ */}

      <div className={stylesContainer.appleAndVase}>

        <div className={stylesContainer.apple}>
          <img src='/apple.png' className={stylesContainer.imgApple}/>
          <div className={stylesContainer.infoApple}>
            <h2 className={stylesContainer.appleValue}>Only $0.22</h2>
            <p className={stylesContainer.appleDesc1}>
              Healthy power pills
              Most Healthy for u.
            </p>
            <p className={stylesContainer.appleDesc2}>
              cheap and powerful remedy
              for long term healing.
            </p>
          </div>
          <div className={stylesContainer.containerButton}>
            <button className={stylesContainer.appleButton}>Buy now</button>
          </div>
        </div>

        <div className={stylesContainer.vase}>
          <img src='/vase.png' className={stylesContainer.imgVase}/>
        <div className={stylesContainer.infoVase}>
          <h3 className={stylesContainer.vaseTitle}>Best drink</h3>
          <button className={stylesContainer.vaseButton}>For free</button>
          <p className={stylesContainer.vaseDesc}>long term health</p>
        </div>
        <div className={stylesContainer.buttonLink}>
          <button className={stylesContainer.vaseButton2}>
            click here and join us
            with these magical
            benefits
          </button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}