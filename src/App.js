import React from "react";
import './App.css';
import axios from 'axios'
import {useState , useEffect} from 'react'
import Images from "./components/Images";


const App=()=> {
  const [term, setTerm] = useState("")
  useEffect(() => {
      axios.get(`https://pixabay.com/api/?key=21860598-f8ba3048534b8b69916a04f61&q=${term}&image_type=photo`)
     
  }, [])
  return (
    <div>
      <Images/>
    </div>
  )
}

export default App ;
