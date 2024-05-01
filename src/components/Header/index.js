import { Link } from 'react-router-dom'
// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from './header.module.css'

function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.menu}>
                    <Link className={styles.menu_item} to="/">Home</Link>
                    <Link className={styles.menu_item} to="/about">Sobre</Link>
                    <Link className={styles.menu_item} to="/projects">Projetos</Link>
                    <Link className={styles.menu_item} to="/contact">Contato</Link>
            </div>
        </div>
    )
}


export default Header