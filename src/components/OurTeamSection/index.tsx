import { ThemeColor } from "../../enum/ThemeColor";
import { Heading2 } from "../Heading";
import { Label2 } from "../Label";
import styles from "./OurTeamSection.module.scss";
import KimBowen from "./assets/KimBowen.png";
import DanielleWatkins from "./assets/DanielleWatkins.png";
import NaomiCraig from "./assets/NaomiCraig.png";
import SantosPayne from "./assets/SantosPayne.png";
import { TeamMember } from "../../types/TeamMenber";
import { TeamCard } from "../Cards";

const teamMembers: TeamMember[] = [
  {
    name: "Kim Bowen",
    role: "Pastor, Church",
    image: KimBowen,
  },
  {
    name: "Danielle Watkins",
    role: "Pastor, Church",
    image: DanielleWatkins,
  },
  {
    name: "Naomi Craig",
    role: "Pastor, Church",
    image: NaomiCraig,
  },
  {
    name: "Santos Payne",
    role: "Pastor, Church",
    image: SantosPayne,
  },
];

export default function OurTeamSection() {
  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <Label2>church members</Label2>
        <Heading2 theme={ThemeColor.black}>
          meet our Inspirational team
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
