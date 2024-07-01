// import { Link } from 'react-router-dom'
import styles from "./index.module.css";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.topo_bg}id="about">
        <div className={styles.card}>
          <About />
          
          <Projects />
        </div>
      </div>
      

      
          <Footer />
    </>
  );
}

export default Home;
