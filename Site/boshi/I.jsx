import React from 'react'
import "./I.css"
import img from "../toyota-supra-3x-drift-wallpaper-2560x1440_51.jpg"
import { Link } from 'react-router-dom'
function I() {
  return (
    <div>
        <div>
            
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={img} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>mahsultlarni korish uchun bosing</h1>
        <Link to="/dars" >
        <button className='btn btn-outline-success'>Kirish</button>
        </Link>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>mahsultlarni korish uchun bosing</h1>
        <Link to="/dars" >
        <button className='btn btn-outline-success'>Kirish</button>
        </Link>      </div>
    </div>
    <div class="carousel-item">
      <img src={img} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>mahsultlarni korish uchun bosing</h1>
        <Link to="/dars" >
        <button className='btn btn-outline-success'>Kirish</button>
        </Link>      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
    {/* <h1 className='h1/'>Assalomu alaykum bizning avto salonimizga hush kelibsiz</h1> */}
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            {/* <h1>Assalomu alaykum</h1> */}
        </div>
    </div>
  )
}

export default I