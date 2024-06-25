// import { Link } from 'react-router-dom'
import styles from "./index.module.css";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import About from "../../components/About";
import Projects from "../../components/Projects";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.topo_bg}>
        <div className={styles.card}>
          <About />
          
          <Projects />
        </div>
      </div>
      
    </>
  );
}

export default Home;
