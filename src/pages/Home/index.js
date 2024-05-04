// import { Link } from 'react-router-dom'
import styles from "./index.module.css";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import About from "../../assets/About";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.topo_bg}>
        <div className={styles.card}>
          <About />
        </div>
        <div className={styles.card}>
          <Skills />
        </div>
      </div>
      <Projects />
    </>
  );
}

export default Home;
