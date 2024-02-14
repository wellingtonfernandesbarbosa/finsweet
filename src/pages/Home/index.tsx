import Header from '../../components/Header';
import styles from './Home.module.scss';
import headerImage from '../../assets/praying.jpeg';
import { TextColor } from '../../enum/TextColor';

export default function Home() { 
  return (
    <main className={styles.container}>
      <Header
        title="Become a part of our community"
        subtitle="Welcome to our CHURCH"
        buttonText='LEARN MORE'
        text='We are here to help you in your church. We are here to help you in your church. We are here to help you in your church.'
        image={headerImage}
        textColor={TextColor.white}
      />
    </main>
  );
}