import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import "./SingleCocktail.css";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [cocktailDetail, setCocktailDetail] = useState(null);

  useEffect(() => {
    fetchData()
  }, [id]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    if (data) {
      const { drinks } = data;
      const drinkData = drinks[0];
      console.log(drinkData);
      const {
        strDrink: name,
        strCategory: category,
        strAlcoholic: info,
        strDrinkThumb: image,
        strGlass: glass,
        strInstructions: instruction,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5

      } = drinkData;
      const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
      const cocktailObject = { name, category, info, image, glass, instruction, ingredients };
      setCocktailDetail(cocktailObject);
    }
    else {
      setCocktailDetail(null);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  if (cocktailDetail === null) {
    return (
      <section>
        <h1>No Data Exists for the item</h1>
      </section>)
  }

  return (
    <>
      <Link className='back-link' to="/">Back Home</Link>
      <section className='detail-container'>
        <div className='image-container'>
          <img src={cocktailDetail.image} alt={cocktailDetail.name}></img>
        </div>
        <div className='details'>
          <h3>
            <span className='label'>Name:</span> {cocktailDetail.name}
          </h3>
          <p>
            <span className='label'>Category:</span> {cocktailDetail.category}
          </p>
          <p>
            <span className='label'>Instruction:</span> {cocktailDetail.instruction}
          </p>
          <p>
            <span className='label'>Glass:</span> {cocktailDetail.glass}
          </p>
          <p>
            <span className='label'>Ingredients:</span>
            {cocktailDetail.ingredients.map((ingredient,index)=>{
              return (
                <span key={index}>{ ingredient ? " " + ingredient + " " : null  }</span>
              )
            })}
          </p>
        </div>
      </section>
    </>
  )
}

export default SingleCocktail;
