import { Outlet } from 'react-router-dom';
import './App.css'
import './index.css'
import Navbar from './components/navbar'


export function App(){
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}


export default App;
