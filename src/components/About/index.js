// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./about.module.css";
import Skills from "../Skills";

function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.parent}>
        <div className={styles.title_section}>
          <h1 className={styles.title}>&lt;Sobre Mim/&gt;</h1>
          <span />
        </div>
        <div className={styles.content}>
          <div className={styles.text_section}>
            <p>
              // Desde 2020, estou na área de desenvolvimento após concluir um
              curso de Desenvolvimento de Sistemas. Ao longo desse período,
              defini meu caminho profissional na área de T.I., desenvolvendo
              interesse por ferramentas como Inteligência Artificial,
              Desenvolvimento Web, Design, Criação de Jogos, entre outras. Minha
              paixão pela inovação e pelo aprendizado contínuo é essencial em
              minha jornada, levando-me a explorar possibilidades e aprimorar
              habilidades constantemente.
            </p>
          </div>
          <div className={styles.skills_section}>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
