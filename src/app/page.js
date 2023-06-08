import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Button from '@/components/button/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>turning your idea into reality. We bring together the teams from the global tech industry.</p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
      <Image className={styles.img} width={600} height={500} src={Hero} alt="home-image" />
      </div>
    </div>
  )
}
