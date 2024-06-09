import React,{useEffect} from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login'
import {auth} from './firebase'
import { useStateValue } from './StateProvider'
import Merch from './Merch'

function App() {
  const [{},dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('USER IS >>>>', authUser)
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="app">
    <Header/>
      <Routes>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/merch' element={<Merch/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
