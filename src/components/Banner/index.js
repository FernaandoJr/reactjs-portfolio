// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./banner.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Banner() {
  var ocupacao = "Estudante de Análise e Desenvolvimento de Sistemas";
  // Função de imitar máquina de escrever
  const [typewriter_text] = useTypewriter({
    words: [
      "Tecnologia",
      "Programação",
      "Desenvolvimento",
      "IA",
      "Games",
      "Inovação",
    ],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 110,
  });

  return (
    <div className={styles.container} id='home'>
      <div className={styles.text_parent}>
        <h1 className={styles.title}>
          Olá, eu sou o <span className={` ${styles.title}`}>Fernando!</span>
        </h1>
        {/* Usando a função de imitar uma máquina de escrever */}
        <h3 className={`${styles.typewriter} `}>
          {" "}
          Apaixonado por{" "}
          <span className={`${styles.typewriter}`}>
            <span className={styles.animated_gradient}>{typewriter_text}</span>
            <Cursor cursorStyle="|"/>
          </span>
        </h3>
          <h3 className={`${styles.subtitle}`}>{ocupacao}</h3>

      </div>
    </div>
  );
}

export default Banner;
