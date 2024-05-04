// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./skills.module.css";
import SkillButton from "../SkillButton";

function Skills() {
  return (
    <>
    <div className={styles.title_section}>
        <h1 className={styles.title}>&lt;Skills/&gt;</h1>
        <span />
      </div>
    <div className={styles.container}>
      <div className={styles.buttons}>
      <SkillButton skill="HTML" name="html"/>
      <SkillButton skill="HTML"/>
      </div>
    </div>
    </>
  );
}

export default Skills;
