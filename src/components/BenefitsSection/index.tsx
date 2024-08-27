import React from "react";
import styles from "./BenefitsSection.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";

import Num from "./assets/num.png";
import { Page } from "../../enum/Page";

import { Label2 } from "../Label";
import { Heading2, Heading4 } from "../Heading";
import Paragraph from "../Paragraph";

import { BenefitsCard } from "../Cards";

import HoldingBible from "./assets/holdingBible.png";
import StainedGlass from "./assets/stainedGlass.png";
import ManReadingBible from "./assets/manReadingBible.png";

import Bible from "./assets/bible.png";
import HandsUp from "./assets/handsUp.png";
import Inspire from "./assets/inspire.png";
import FullStainedGlass from "./assets/fullStainedGlass.png";

interface BenefitsCard {
  image: string;
  title: string;
  text?: string;
}

interface BenefitsArticle {
  title: string;
  text: string;
  image: string;
}

const benefitsCards: BenefitsCard[] = [
  {
    image: Num,
    title: "Ouça Mensagens Inspiradoras",
    text: "Seja edificado por mensagens poderosas que transformam vidas. Nossos pastores trazem a Palavra de Deus de forma clara e relevante para o seu dia a dia.",
  },
  {
    image: ManReadingBible,
    title: "Estude a Bíblia Conosco",
    text: "Aprofunde seu conhecimento bíblico através de nossos sermões. Descubra verdades eternas e aplique-as em sua vida.",
  },
  {
    image: HoldingBible,
    title: "Encontre Comunidade",
    text: "Conecte-se com outros cristãos e faça parte de uma comunidade acolhedora. Nossos sermões são um ponto de encontro para todos que buscam um relacionamento mais profundo com Deus.",
  },
  {
    image: StainedGlass,
    title: "Experimente a Presença de Deus",
    text: "Sinta a presença de Deus em cada mensagem. Seus desafios e ansiedades encontram respostas através da Palavra de Deus.",
  },
];

const benefitsArticles: BenefitsArticle[] = [
  {
    title: "Encontre Propósito e Alegria",
    text: "Junte-se a nós e faça parte de uma comunidade onde você se sentirá acolhido e valorizado. Através de nossos programas e eventos, você terá a oportunidade de conectar-se com pessoas que compartilham seus valores e objetivos. Experimente a sensação de pertencer a algo maior do que você.",
    image: Inspire,
  },
  {
    title: "Valores Compartilhados",
    text: "Acreditamos na importância da família, da amizade e do serviço ao próximo. Ao fazer parte da nossa comunidade, você estará contribuindo para um mundo melhor e construindo um futuro mais promissor para todos.",
    image: Bible,
  },
  {
    title: "Eventos Beneficentes",
    text: "Organize campanhas de arrecadação de alimentos, participe de mutirões de limpeza ou simplesmente doe seu tempo para ajudar aqueles que mais precisam. Juntos, podemos construir um mundo mais justo e solidário.",
    image: HandsUp,
  },
  {
    title: "Todos São Bem-Vindos",
    text: "Celebramos a diversidade e valorizamos cada indivíduo. Acreditamos que a união faz a força e que juntos podemos construir um futuro mais brilhante.",
    image: FullStainedGlass,
  },
];

export default function BenefitsSection({
  subtitle,
  page,
  background = "",
}: {
  subtitle: string;
  page: Page;
  background?: string;
}) {
  const backgroundImageStyle: React.CSSProperties =
    background !== "" ? { backgroundColor: background } : {};

  const invertStyle: React.CSSProperties = {
    flexDirection: "row-reverse",
  };

  const containerPdding: React.CSSProperties =
    page === Page.about ? { paddingTop: 0 } : {};

  return (
    <section className={styles.container} style={backgroundImageStyle}>
      <div className={styles.container__content} style={containerPdding}>
        <Label2>{subtitle}</Label2>

        <Heading2 theme={ThemeColor.black}>Os benefícios de se juntar à nossa igreja </Heading2>

        {page === Page.home && (
          <ul className={styles.container__cards}>
            {benefitsCards.map((benefit, index) => (
              <li key={index}>
                <BenefitsCard image={benefit.image} title={benefit.title} text={benefit.text} />
              </li>
            ))}
          </ul>
        )}

        {page === Page.about && (
          <div className={styles.container__articles}>
            <ul className={styles.container__articles__list}>
              {benefitsArticles.map((article, index) => (
                <li key={index} className={styles.container__articles__list__item}>
                  <article style={index % 2 !== 1 ? {} : invertStyle}>
                    <div>
                      <Heading4 theme={ThemeColor.black}>{article.title}</Heading4>

                      <Paragraph textColor={ThemeColor.black}>{article.text}</Paragraph>
                    </div>

                    <div>
                      <img src={article.image} alt={article.title} />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
