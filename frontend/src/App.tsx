import { useState } from 'preact/hooks'

import './app.css'
import { Landing } from './components/Landing'


import { getAnalytics } from "firebase/analytics";
import { SignIn } from './components/SignIn';


export function App() {

  return (
    <>
      <div className= "text-3xl font-bold underline">
      <Landing/>
      <SignIn/>
      </div>
     
    </>
  )
}
