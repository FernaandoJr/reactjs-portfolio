// import { Link } from 'react-router-dom'
import './index.css'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'

function Home(){
    return(
        <>
        <Header/>
            <Banner/>
            <About/>
            <Projects/>
            <Skills/>
        </>
    )
}

export default Home