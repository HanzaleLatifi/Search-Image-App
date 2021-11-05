import React from "react";
import './App.css';
import axios from 'axios'
import {useState , useEffect} from 'react'
import Images from "./components/Images";
import SerachInput from "./components/SerachInput";



const App=()=> {
  const [term, setTerm] = useState("")
  const [images , setImages]=useState([])
  
  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?query=${term}&client_id=vT6nqxHPnGCSdWCmGfLd3USgcqnuOVXTc-TuI0YC1zU
    `).then((res)=>{
      console.log(res.data.results)
      setImages(res.data.results)
    }).catch((error)=>{
      console.log(error)
    })    
  }, [term]);
  
  const getTerm=(term)=>{
    setTerm(term)
  }
  return (
    <>
      <SerachInput getTerm={getTerm}/>
      <Images images={images}/>
    </>
  )
}

export default App ;
