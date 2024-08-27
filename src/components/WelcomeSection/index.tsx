import styles from "./WelcomeSection.module.scss";

import { Link } from "react-router-dom";
import { ButtonSize } from "../../enum/ButtonSize";
import { ThemeColor } from "../../enum/ThemeColor";
import Button from "../Button";
import { Label2 } from "../Label";
import Paragraph from "../Paragraph";
import manPraying from "./assets/manPraying.png";
import peopleSitting from "./assets/peopleSitting.png";
import readingBook from "./assets/readingBook.png";
import arrow from "./assets/arrow.svg";
import { Heading2, Heading4 } from "../Heading";
import { ButtonTheme } from "../../enum/ButtonTheme";
import { ButtonType } from "../../enum/ButtonType";

export default function WelcomeSection({ footer = false }: { footer?: boolean }) {
  const secondImageStyle: React.CSSProperties | undefined =
    footer && window.innerWidth > 920
      ? {
          position: "static" as const,
          width: "390px",
          height: "512px",
        }
      : undefined;

  const containerImagesStyle = footer
    ? {
        FlexWrap: "wrap",
        alignItems: "center",
        marginBottom: "64px",
      }
    : undefined;

  return (
    <div className={styles.container}>
      <Heading2 theme={ThemeColor.black}>Amor e Compaixão</Heading2>

      <div className={styles.container__paragraph}>
        <Paragraph textColor={ThemeColor.black}>
          O amor e a compaixão são os pilares da nossa fé. Ao amarmos ao próximo como a nós mesmos, demonstramos o amor de Deus de forma tangível. A compaixão nos move a agir com gentileza e bondade, aliviando o sofrimento daqueles que nos cercam. Ao
          praticarmos essas virtudes, não apenas transformamos o mundo ao nosso redor, mas também encontramos uma profunda paz interior.
        </Paragraph>
      </div>

      {!footer && (
        <Button buttonType={ButtonType.ReactLink} theme={ButtonTheme.light} size={ButtonSize.medium}>
          Leia mais
        </Button>
      )}

      <div className={styles.container__images} style={containerImagesStyle}>
        <img src={manPraying} alt="Um homem barbudo rezando" />
        <img src={readingBook} alt="Pessoas lendo um livro em uma igreja" style={secondImageStyle} />
        <img src={peopleSitting} alt="Passoas sentadas em uma igreja" />
      </div>

      {!footer ? (
        <>
          <div className={styles.container__footer}>
            <Label2>nossa missão & visão</Label2>
            <Heading4 theme={ThemeColor.black}>comemore CONOSCO</Heading4>
            <Paragraph textColor={ThemeColor.black}> Nossos valores são a base de tudo o que fazemos. Venha compartilhar conosco momentos de alegria e celebrar a vida.</Paragraph>
          </div>

          <div className={styles.container__readMore}>
            <Link to="/aboutus">
              <p>LEIA MAIS</p>
              <img src={arrow} alt="Ícone de seta" />
            </Link>
          </div>
        </>
      ) : (
        <div className={styles.container__footerArticles}>
          <div>
            <Label2>NOSSA MISSÃO E VISÃO</Label2>

            <Heading4 theme={ThemeColor.black}>ESFORÇANDO-SE POR UM AMANHÃ MELHOR</Heading4>

            <Paragraph textColor={ThemeColor.black}>
              Acreditamos em um mundo onde todos tenham oportunidades iguais e possam alcançar seu pleno potencial. Nosso compromisso é promover ações que contribuam para um futuro mais justo, sustentável e humano. Trabalhamos incansavelmente para superar
              desafios sociais e ambientais, buscando soluções inovadoras e colaborando com a comunidade para construir um amanhã melhor para todos.
            </Paragraph>
          </div>
          <div>
            <Label2>O QUE FAZEMOS</Label2>

            <Heading4 theme={ThemeColor.black}>TRAZENDO PAZ E ALEGRIA AO MUNDO</Heading4>

            <Paragraph textColor={ThemeColor.black}>
              Acreditamos que um mundo mais pacífico e alegre é possível. Através de nossas ações, buscamos inspirar e conectar pessoas, promovendo valores como compaixão, solidariedade e respeito mútuo. Nosso trabalho se concentra em [mencionar áreas de
              atuação, ex: projetos sociais, eventos beneficentes, apoio a comunidades]. Junte-se a nós nessa jornada e faça a diferença na vida de muitas pessoas.
            </Paragraph>
          </div>
        </div>
      )}
    </div>
  );
}
