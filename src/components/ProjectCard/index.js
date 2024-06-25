// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./project.module.css";

function ProjectsCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.img_card}>
          <img src={`/assets/img_project/${props.image}.png`} />
        </div>
        <div className={styles.content}>
          <div className={styles.title_section}>
            <p>{props.title}</p>
            <div className={styles.icons}>
              <a href={props.repo}>
                <img src="/assets/logos/github-white.png" />
              </a>
              
              {props.link !== ""? ( // verifica se tem um link e renderiza ele
                <>
                  <span />
                  <a href={props.link}>
                    <img src="/assets/logos/link-white.png" />
                  </a>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <p className={styles.desc}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
