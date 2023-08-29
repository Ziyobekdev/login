import React, { useState } from 'react'
import './Card.css'
import { Car } from '../../Base'
import { Link, useParams } from 'react-router-dom'
function Card() {
    const { id } = useParams()
    const data = Car
    const [color, setColor] = useState("img")
    console.log(color);
    return (
        <div>
            {data
            .filter(item =>
              item.id == id  ? item : ""
                )
            .map(item =>
                <div className="Card" key={item.id} >
                    <div className="cardLeft">
                        <Link to="/dars" >
                        
                            { color === "img" ? <img src={item.img} alt="" /> : color === "img1" ? <img src={item.img1} alt="" /> :
                              color === "img2" ?  <img src={item.img2} alt="" /> : color === "img3" ? <img src={item.img3} alt="" /> : ""
                        }
                        </Link>
                    </div>
                    <div className="cardRight">
                        <h1>{item.name}</h1>
                        <h3><i>{item.price} $</i></h3>
                        <div className="cardColors">
                            <div onClick={()=>setColor("img")} className="bg-secondary cardColor"></div>
                            <div onClick={()=>setColor("img1")} className="bg-danger cardColor"></div>
                            <div onClick={()=>setColor("img2")} className="bg-info cardColor"></div>
                            <div onClick={()=>setColor("img3")} className="bg-dark cardColor"></div>
                        </div>
                        <p>{item.desc}</p>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Card
