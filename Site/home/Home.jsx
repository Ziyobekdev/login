import React from 'react'
import "./home.css"
import { Car } from "../../Base"
import img1 from "../toyota-supra-3x-drift-wallpaper-2560x1440_51.jpg"
import { Link } from 'react-router-dom'
function Home({search}) {
  const data = Car
  return (
    <div className='d-flex flex-wrap'>
        {
            data.filter(item =>   
                search == "" ? item : item.name.includes(search)
            )
            .map(item => {
                const {img , id , name } = item
                return (
                    <div key={id} className="card w-25 m-5">
                    <div className="cardImg">
                    <img className='w-100' src={img} alt="" />
                    </div>
                    <div className="card-body text-center">
                        <h3>{name}</h3>
                        <Link to={`/${id}`} >
                        <button className='btn btn-info'>BUY</button>
                        </Link>
                    </div>
                    </div>
            )
            })
        } 
    </div>
  )

}

export default Home


