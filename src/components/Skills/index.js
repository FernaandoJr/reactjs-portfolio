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
      <SkillButton skill="HTML" image="html"/>
      <SkillButton skill="CSS" image="css"/>
      <SkillButton skill="Javascript" image="javascript"/>
      <SkillButton skill="NodeJS" image="nodejs"/>
      <SkillButton skill="Npm" image="npm"/>
      <SkillButton skill="ReactJS" image="react"/>
      <SkillButton skill="MySQL" image="mysql"/>
      <SkillButton skill="PHP" image="php"/>
      <SkillButton skill="C Language" image="c"/>
      <SkillButton skill="Python" image="python"/>
      <SkillButton skill="Notion" image="notion"/>
      <SkillButton skill="GitHub" image="github"/>
      <SkillButton skill="Vercel" image="vercel"/>
      <SkillButton skill="Visual Studio Code" image="vscode"/>

      </div>
    </div>
    </>
  );
}

export default Skills;
