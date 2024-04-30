import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Header from './components/Header'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function RoutesApp(){
    return(
        <BrowserRouter basename="/portfolio">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/about' element={<Sobre/>}/>
                <Route path='/contact' element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp