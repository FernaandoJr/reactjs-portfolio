import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Header from './components/Header'

function RoutesApp(){
    return(
        <BrowserRouter basename="/portfolio">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp