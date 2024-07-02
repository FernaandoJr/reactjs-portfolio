import styles from "./about.module.css";
import Skills from "../Skills";

function About() {
  return (
    <>
      <div className={styles.title_section}>
        <h1 className={styles.title}>&lt;Sobre Mim/&gt;</h1>
        <span />
      </div>
      <div className={styles.content}>
        <div className={styles.text_section}>
          <p className={styles.about_text}>
            Desde 2020, estou na área de desenvolvimento após concluir um curso
            de Desenvolvimento de Sistemas. Ao longo desse período, defini meu
            caminho profissional na área de T.I., desenvolvendo interesse por
            ferramentas como Inteligência Artificial, Desenvolvimento Web,
            Design, Criação de Jogos, entre outras. Minha paixão pela inovação e
            pelo aprendizado contínuo é essencial em minha jornada, levando-me a
            explorar possibilidades e aprimorar habilidades constantemente.
          </p>
          <p className={styles.about_text2}>
            Atualmente estou cursando Análise e Desenvolvimento de Sistemas na
            Fatec Arthur Azevedo, Mogi Mirim. Estou à procura de uma
            oportunidade de emprego ou estágio dentro da área de
            desenvolvimento.
          </p>
        </div>
        <Skills />
      </div>
    </>
  );
}

export default About;
