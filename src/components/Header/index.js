import { Link } from 'react-router-dom'
import "./index.css"

function Header(){
    return(
        <div className="header">
            <p>FernaandoJr</p>
            <div className="menu">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/projects">Projetos</Link></p>
                    <p><Link to="/about">Sobre Mim</Link></p>
                    <p><Link to="/contact">Contato</Link></p>
            </div>
        </div>
    )
}


export default Header