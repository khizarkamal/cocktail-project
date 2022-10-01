import React from 'react'
import { Link } from 'react-router-dom'
import "./Cocktail.css";

const Cocktail = ({ image, name, type, id, alcholic }) => {
  return (
    <article className='cocktail-element'>
      <div className='image-container'>
        <img src={image} alt={name}></img>
      </div>
      <div className='detail'>
        <h3>
          {type}
        </h3>
        <h4>
          {alcholic}
        </h4>
        <Link className='detail-link' to={`/cocktail/${id}`}>details</Link>
      </div>
    </article>
  )
}

export default Cocktail
