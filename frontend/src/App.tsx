import { useState } from 'preact/hooks'

import './app.css'
import { Landing } from './components/Landing'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { SignIn } from './components/SignIn';

const firebaseConfig = {
  apiKey: "AIzaSyBYvAhZxNx_AqmsE6Smv8IV7EJni_wzLIc",
  authDomain: "leetcode-clone-6d136.firebaseapp.com",
  projectId: "leetcode-clone-6d136",
  storageBucket: "leetcode-clone-6d136.appspot.com",
  messagingSenderId: "914677649476",
  appId: "1:914677649476:web:5f0bd481903e616b6b2c11",
  measurementId: "G-TVGZSM09EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
