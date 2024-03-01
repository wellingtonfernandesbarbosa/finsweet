import styles from "./WelcomeSection.module.scss";

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

export default function WelcomeSection({
  footer = false,
}: {
  footer?: boolean;
  }) {
  const secondImageStyle: React.CSSProperties | undefined = footer && window.innerWidth > 920
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
      <Label2>Sub-Headline</Label2>

      <Heading2 theme={ThemeColor.black}>love and compassion</Heading2>

      <div className={styles.container__paragraph}>
        <Paragraph textColor={ThemeColor.black}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Paragraph>
      </div>

      {!footer && (
        <Button
          buttonType={ButtonType.ReactLink}
          theme={ButtonTheme.light}
          size={ButtonSize.medium}
        >
          Read more
        </Button>
      )}

      <div className={styles.container__images} style={containerImagesStyle}>
        <img src={manPraying} alt="A bearded man praying" />
        <img
          src={readingBook}
          alt="People reading a book on a church"
          style={secondImageStyle}
        />
        <img src={peopleSitting} alt="People sitting" />
      </div>

      {!footer ? (
        <>
          <div className={styles.container__footer}>
            <Label2>our mission & vision</Label2>
            <Heading4 theme={ThemeColor.black}>celebrate WITH US</Heading4>
            <Paragraph textColor={ThemeColor.black}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </div>

          <div className={styles.container__readMore}>
            <p>Read more</p>
            <img src={arrow} alt="Arrow to read more" />
          </div>
        </>
      ) : (
        <div className={styles.container__footerArticles}>
          <div>
            <Label2>OUR MISSIOn & Vision</Label2>

            <Heading4 theme={ThemeColor.black}>
              STRIVING FOR A BETTER TOMORROW
            </Heading4>

            <Paragraph textColor={ThemeColor.black}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </Paragraph>
          </div>
          <div>
            <Label2>WHAT WE DO</Label2>

            <Heading4 theme={ThemeColor.black}>
              BRINgING PEACE AND JOY TO THE WORLD
            </Heading4>

            <Paragraph textColor={ThemeColor.black}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </Paragraph>
          </div>
        </div>
      )}
    </div>
  );
}
