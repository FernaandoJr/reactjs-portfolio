import styles from "./skillsbtn.module.css";

function SkillButton(props) {
  return (
    <>
      <div className={styles.img} name={props.name}></div>
      <div className={styles.btn}>{props.skill}</div>
    </>
  );
}

export default SkillButton;
