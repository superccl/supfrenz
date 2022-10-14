import React from 'react'
import './search.scss'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
const Search = () => {
  const inputRef = useRef()
  const navigate = useNavigate()
  function handleSubmit() {
    navigate(`/details/${inputRef.current.value}`)
  }

  return (
    <div id="search" className="search-container">
      <h2 className="search-container__header">FIND MY WHOOPSIE</h2>
      <form className="search-container__form">
        <input ref={inputRef} type="number" className="search-container__form__input"/>
        <button type="button" onClick={handleSubmit} className="search-container__form__submit">SEARCH</button>
      </form>
    </div>
  )
}

export default Search