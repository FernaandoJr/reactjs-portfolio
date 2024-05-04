import styles from "./skillsbtn.module.css";

function SkillButton(props) {
  return (
    <>
      <div className={styles.btn}>
        <img src={`/assets/logos/${props.image}.png`} className={styles.img} alt=""/>
        {props.skill}
      </div>
    </>
  );
}

export default SkillButton;
