import React from "react";
import './App.css';
import axios from 'axios'
import {useState , useEffect} from 'react'
import Images from "./components/Images";



const App=()=> {
  const [term, setTerm] = useState("")
  const [images , setImages]=useState([])
  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?query=flower&client_id=vT6nqxHPnGCSdWCmGfLd3USgcqnuOVXTc-TuI0YC1zU
    `).then((res)=>{
      setImages(res.data.results)
      console.log(res.data)
    }).catch((error)=>{
      console.log(error)
    })
        
     
      
  }, []);
  return (
    <div>
      <Images images={images}/>
    </div>
  )
}

export default App ;
