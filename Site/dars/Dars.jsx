import React, { useRef, useState } from 'react'
import './Dars.css'
import Home from '../home/Home';

function Dell() {
  const [search, setSearch] = useState('')
  const refs = useRef()
  console.log(refs);
  const change = () => {
    setSearch(refs.current.value)
  }
  return (
    <>
    <div className='navbarMenu'>
      <h1>Mashinalarni Korish</h1>
      <div className="navbarSearch">
        <div className="search">
          <input type="text" ref={refs} />
          <button onClick={change}>Search</button>
        </div>
        <select>
          <option value="0">Select car:</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
          <option value="5">Honda</option>
          <option value="6">Jaguar</option>
          <option value="7">Range Rover</option>
          <option value="8">Mercedes</option>
          <option value="8">Labar</option>
        </select>
      </div>
    </div>
    <Home search={search} />
    </>
  )
}
export default Dell
