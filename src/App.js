import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/index'
import Staff from './components/Staff'
import Estudiantes from './components/Estudiantes'

import './styles/style.scss'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Estudiantes' element={<Estudiantes/>}></Route>
          <Route path='/Staff' element={<Staff/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
