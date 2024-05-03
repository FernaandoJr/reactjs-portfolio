// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./skills.module.css";
import SkillButton from "../SkillButton";


function Skills() {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.buttons}>
      <SkillButton skill="HTML"/>
      <SkillButton skill="HTML"/>
      <SkillButton skill="HTML"/>
      <SkillButton skill="HTML"/>

      </div>
    </div>
  );
}

export default Skills;
