import React, { useRef } from 'react'
import { useGlobalContext } from '../context'
import "./SearchForm.css";
const SearchForm = () => {
  // Handling Uncontrolled Inputs

  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  const handleChange = () => {
    setSearchTerm(searchValue.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className='form-container'>
      <form className='serach-form' onSubmit={handleSubmit}>
        <div className='search-form-control'>
          <label htmlFor='search'>Search your favourite cocktail</label>
          <input type='text' ref={searchValue} onChange={handleChange}></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
