import styles from "./OurTeamSection.module.scss";

import { ThemeColor } from "../../enum/ThemeColor";
import { Heading2 } from "../Heading";
import { Label2 } from "../Label";

import { TeamMember } from "../../interfaces";
import { TeamCard } from "../Cards";

import KimBowen from "./assets/KimBowen.png";
import DanielleWatkins from "./assets/DanielleWatkins.png";
import NaomiCraig from "./assets/NaomiCraig.png";
import SantosPayne from "./assets/SantosPayne.png";

const teamMembers: TeamMember[] = [
  {
    name: "Kim Bowen",
    role: "Pastora",
    image: KimBowen,
  },
  {
    name: "Danielle Watkins",
    role: "Pastora",
    image: DanielleWatkins,
  },
  {
    name: "Naomi Craig",
    role: "Pastora",
    image: NaomiCraig,
  },
  {
    name: "Santos Payne",
    role: "Pastor",
    image: SantosPayne,
  },
];

export default function OurTeamSection() {
  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <Label2>Membros da Igreja</Label2>
        <Heading2 theme={ThemeColor.black}>
          Conheça nosso time inspirador
        </Heading2>
      </div>

      <div className={styles.container__teamMembers}>
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
