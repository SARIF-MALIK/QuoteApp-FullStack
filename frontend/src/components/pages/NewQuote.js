import React from 'react'
import styles from './NewQuote.module.css'

function NewQuote() {
  return (
    <form className={styles['new-quote-form']} action='http://localhost:8080/addquotes' method='post' >
      <div>
        <label htmlFor="author">Author: </label>
        <input type="text" id='author' placeholder="Author's Name"/>
      </div>
      <div>
        <label htmlFor="quote">Quote: </label>
        <textarea name="" id="quote" cols="43" rows="6"></textarea>
      </div>

      <button>Add Quote</button>
    </form>
  )
}

export default NewQuote