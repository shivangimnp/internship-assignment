import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Userinput from './components/Userinput'
import Secondpage from './components/Secondpage'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Userinput />} />
      <Route path='/secondpage' element={<Secondpage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
