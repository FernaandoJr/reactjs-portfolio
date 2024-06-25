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
          <SkillButton image="gitHub" skill="GitHub"/>
          <SkillButton image="html" skill="HTML"/>
          <SkillButton image="javascript" skill="Javascript"/>
          <SkillButton image="mysql" skill="MySQL"/>
          <SkillButton image="nodejs" skill="NodeJS"/>
          <SkillButton image="notion" skill="Notion"/>
          <SkillButton image="npm" skill="Npm"/>
          <SkillButton image="php" skill="PHP"/>
          <SkillButton image="python" skill="Python"/>
          <SkillButton image="react" skill="React"/>
          <SkillButton image="vercel" skill="Vercel"/>
          <SkillButton image="vscode" skill="Vscode"/>
        </div>
    </div>
    </>
  );
}

export default Skills;
