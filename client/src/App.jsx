import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar'
import './App.css'
import Leftbar from './components/Leftbar'
import Bottombar from './components/Bottombar'
import Header from './components/Header'
import Home from './pages/Home'
import CreateCommunity from './components/CreateCommunity';
import UserCommunity from './pages/UserCommunity';
import Index from './socket';



function App() {

  return (
    <BrowserRouter>
    <div className=" container">
    <Sidebar />
    <Header />
      <Leftbar />
      <Bottombar />
     
    </div>
     
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-community' element={<CreateCommunity />} />
      <Route path='/user-channel' element={<Index />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
