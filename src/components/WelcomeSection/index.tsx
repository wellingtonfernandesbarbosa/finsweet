import styles from "./WelcomeSection.module.scss";
import { ButtonSize } from "../../enum/ButtonSize";
import { TextColor } from "../../enum/TextColor";
import Button from "../Button";
import { Label2 } from "../Label";
import Paragraph from "../Paragraph";
import manPraying from "./assets/manPraying.png";
import peopleSitting from "./assets/peopleSitting.png";
import readingBook from "./assets/readingBook.png";
import arrow from "./assets/arrow.svg";
import { Heading2, Heading4 } from "../Heading";
import { ButtonTheme } from "../../enum/ButtonTheme";

export default function WelcomeSection({
  footer = false,
}: {
  footer?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Label2>Sub-Headline</Label2>

      <Heading2 theme={TextColor.black}>love and compassion</Heading2>

      <div className={styles.container__paragraph}>
        <Paragraph textColor={TextColor.black}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Paragraph>
      </div>

      <Button theme={ButtonTheme.light} path="/" size={ButtonSize.medium}>
        Read more
      </Button>

      <div className={styles.container__images}>
        <img src={manPraying} alt="A bearded man praying" />
        <img src={readingBook} alt="People reading a book on a church" />
        <img src={peopleSitting} alt="People sitting" />
      </div>

      <div className={styles.container__footer}>
        <Label2>our mission & vision</Label2>
        <Heading4 theme={TextColor.black}>celebrate WITH US</Heading4>
        <Paragraph textColor={TextColor.black}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </div>

      <div className={styles.container__readMore}>
        <p>Read more</p>
        <img src={arrow} alt="Arrow to read more" />
      </div>

      {footer && (
        <div className={styles.container__footer}>
          <div>
            <Label2>OUR MISSIOn & Vision</Label2>

            <Heading4 theme={TextColor.black}>
              STRIVING FOR A BETTER TOMORROW
            </Heading4>

            <Paragraph textColor={TextColor.black}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </Paragraph>
          </div>
          <div>
            <Label2>WHAT WE DO</Label2>

            <Heading4 theme={TextColor.black}>
              BRINgING PEACE AND JOY TO THE WORLD
            </Heading4>

            <Paragraph textColor={TextColor.black}>
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
