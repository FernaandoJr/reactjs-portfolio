import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

function RoutesApp(){
    return(
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp