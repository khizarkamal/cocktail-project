import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css";
const Error = () => {
  return (
    <div className='error-container'>
      <h2 className='error-heading'>Oops Its a dead end</h2>
      <Link className='error-link' to="/">Back to home</Link>
    </div>
  )
}

export default Error
