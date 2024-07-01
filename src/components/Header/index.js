// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import { HashLink as Link } from 'react-router-hash-link'
import styles from './header.module.css'

function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.menu}>
                    <Link className={styles.menu_item} smooth to="#home">Home</Link>
                    <Link className={styles.menu_item} smooth to="#about">Sobre</Link>
                    <Link className={styles.menu_item} smooth to="#projects">Projetos</Link>
                    <Link className={styles.menu_item} smooth to="#education">Formação</Link>
                    <Link className={styles.menu_item} smooth to="#contact">Contato</Link>
            </div>
        </div>
    )
}


export default Header