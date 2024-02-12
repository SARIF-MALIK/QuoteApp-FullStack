import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ShowQuotes() {
    let [quote, setQuote] = useState({author: "", text: ""})
    let params = useParams(); 
    useEffect(()=>{
        async function fetchQuote(){
            let res = await axios.get(`http://localhost:8080/quotes/${params.id}`); 
            let {author, text} = res.data; 
            setQuote({text, author}); 
            console.log(res); 
        }
        fetchQuote(); 
    },[])
  return (
    <div>ShowQuotes
        <h2>{quote.author}</h2>
        <p>{quote.text}</p>
    </div>
  )
}

export default ShowQuotes