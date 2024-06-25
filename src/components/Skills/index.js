// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./skills.module.css";
import SkillButton from "../SkillButton";

function Skills() {
  return (
    <>
    <div className={styles.container}>
        <span className={styles.title}># Habilidades</span>
        <div className={styles.group}>

          <SkillButton image="c" skill="C"/>
          <SkillButton image="css" skill="CSS"/>
          <SkillButton image="GitHub" skill="GitHub"/>
          <SkillButton image="html" skill="HTML"/>
          <SkillButton image="Javascript" skill="Javascript"/>
          <SkillButton image="MySQL" skill="MySQL"/>
          <SkillButton image="NodeJS" skill="NodeJS"/>
          <SkillButton image="Notion" skill="Notion"/>
          <SkillButton image="Npm" skill="Npm"/>
          <SkillButton image="php" skill="PHP"/>
          <SkillButton image="Python" skill="Python"/>
          <SkillButton image="React" skill="React"/>
          <SkillButton image="Vercel" skill="Vercel"/>
          <SkillButton image="VSCode" skill="Vscode"/>
        </div>
    </div>
    </>
  );
}

export default Skills;
