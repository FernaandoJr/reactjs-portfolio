// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./banner.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BannerVideo from "../../media/video/background.mp4";

function Banner() {
    var ocupacao = "Estudante de Análise e Desenvolvimento de Sistemas" 
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
    <div className={styles.container}>
      <div className={styles.text_parent}>
        <h1 className={styles.title}>
          Olá, eu sou o{" "}
          <span className={`${styles.animated_gradient} ${styles.title}`}>
            Fernando!
          </span>
        </h1>
        <h3 className={styles.typewriter}>
          Apaixonado por{" "}
          <span>
            {typewriter_text}
            <Cursor cursorStyle="|" />
          </span>
        </h3>
        <h3 className={`${styles.subtitle}`}>{ocupacao}</h3>
      </div>
      <video src={BannerVideo} autoPlay loop muted className={styles.videobg} />
    </div>
  );
}

export default Banner;
