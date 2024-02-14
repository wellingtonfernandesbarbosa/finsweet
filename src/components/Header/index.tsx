import { ButtonSize } from '../../enum/ButtonSize';
import { TextColor } from '../../enum/TextColor';
import Button from '../Button';
import Heading1 from '../Heading1';
import Heading6 from '../Heading6';
import Paragraph from '../Paragraph';
import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
  subtitle: string;
  text: string;
  buttonText: string;
  image: string;
  textColor: TextColor;
}

export default function Header({ buttonText='', title='', subtitle, text='', image, textColor }: HeaderProps) {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <header className={styles.header} style={backgroundImageStyle}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          {subtitle !== '' && <Heading6 theme={textColor}>{subtitle}</Heading6>}

          {title !== '' && <Heading1 theme={textColor}>{title}</Heading1>}

          {buttonText !== '' && <Button path='/' size={ButtonSize.medium}>{buttonText}</Button>}
        
          <div className={styles.header__text}>
            {text !== '' && <Paragraph textColor={textColor} >{text}</Paragraph>}
          </div>
        </div>
      </div>
    </header>
  );
}
