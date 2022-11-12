import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
const Search = () => {
  const inputRef = useRef()
  const navigate = useNavigate()
  function handleSubmit() {
    navigate(`/details/${inputRef.current.value}`)
  }

  return (
    <div id="search" className="my-6 mx-0 flex flex-col justify-center items-center">
      <h2 className="m-12">FIND MY WHOOPSIE</h2>
      <form className="flex justify-center">
        <input ref={inputRef} type="number" className="py-1 px-2 text-lg w-[50%]"/>
        <button type="button" onClick={handleSubmit} className="p-2 ml-4">SEARCH</button>
      </form>
    </div>
  )
}

export default Search