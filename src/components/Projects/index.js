// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./project.module.css";
import ProjectsCard from "../ProjectCard";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.title_section}>
        <h1 className={styles.title}>&lt;Projetos/&gt;</h1>
        <span />
      </div>

      <div className={styles.card_container}>
        <ProjectsCard
          title="Portifólio"
          image="banner"
          desc="Site pessoal criado usando ReactJS com o propósito de aprimorar as minhas habilidades de React e mostrar meus projetos atuais, qualificações, habilidades etc."
          repo="https://github.com/FernaandoJr/react-portfolio"
          link="https://fernaandojr.vercel.app/"
        />
        <ProjectsCard
          title="QR Code Generator"
          image="banner"
          desc="Site feito com o intúito de praticar o uso de APIs, usando a API de gerar QR Code dentro do próprio browser podendo escolher os próprios parâmetros desejados."
          repo="https://github.com/FernaandoJr/react-portfolio"
          link="https://fernaandojr.vercel.app/"
        />
        <ProjectsCard
          title="Studio Ao Quadrado"
          image="banner"
          desc="Site feito como projeto como trabalho de conclusão do curso de Desenvolvimento de Sistemas para facilitar o acesso do cliente com o designer de interiores."
          repo="https://github.com/FernaandoJr/react-portfolio"
          link=""
        />
      </div>
    </div>
  );
}

export default Projects;
