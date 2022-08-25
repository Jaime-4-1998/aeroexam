import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/index'
import Jaime from './components/Jaime'
import './styles/style.scss'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Jaime' element={<Jaime/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
