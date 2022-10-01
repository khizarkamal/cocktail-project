import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import "./CocktailList.css";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading></Loading>;
  }

  if (cocktails.length < 1) {
    return <h2 className='section-title'>No cocktail matched your search criteria</h2>;
  }

  return (
    <div className='drinks-container'>
      {cocktails.map(cocktail=>{
        return (
          <Cocktail key={cocktail.id} {...cocktail}></Cocktail>
        )
      })}
    </div>
  )
}

export default CocktailList
