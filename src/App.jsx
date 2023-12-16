import './App.css'
import { Header } from './common/Header/Header'
import { Router } from './pages/Routes/Router';
import smoothscroll from 'smoothscroll-polyfill';
 
smoothscroll.polyfill();

function App() {

  return (
    <>
      <Header/>
      <Router/>
    </>
  )
}

export default App



