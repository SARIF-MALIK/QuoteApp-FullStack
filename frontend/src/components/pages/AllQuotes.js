import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from '../Quote/Quote';

function AllQuotes() {
  let [quotes, setQuotes] = useState()
  async function getQuotes(){
      let res = await axios.get('http://localhost:8080/allquotes')
      setQuotes(res.data); 
      console.log(res); 
  }
  useEffect(()=>{
    getQuotes(); 
  },[])
  return (
    <div>
      <h1>AllQuotes</h1>
      {/* <ul>
        {
          quotes.map((quote, idx)=>{
            return <Quote  
              key={idx}
              author={quote.author}
              text={quote.text}
            />
          })
        }
      </ul> */}

    </div>
    
  )
}

export default AllQuotes