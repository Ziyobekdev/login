import React from 'react'
import "./login.css"
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
    const [usename, setUsename] = useState('')
    const [paseword, setPaseword] = useState('')
    const [padge, setPadge] = useState()
    useEffect(() => {
        if (usename.length >= 0 && paseword.length <= 0) {
            setPadge("/")
        }
        else{
            setPadge("/dars")
        }
    })
    console.log(padge);
    
  return (
    <div>
        <div className="form">
            <div className="forms">
                <input type="text" placeholder='Username/Emile' onChange={(e)=> setUsename(e.target.value)} />
                <input type="text" placeholder='Passvord' onChange={(e)=> setPaseword(e.target.value)} />
                <Link to={padge}>
                        <button>login</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login