import React from 'react'
import styles from './Quote.module.css'

const Quote = (props) => {
  return (
    <li>
        <span>
            <p>props.text</p>
            <p>props.author</p>
        </span>
        <button>View full Quote</button>
    </li>
  )
}

export default Quote