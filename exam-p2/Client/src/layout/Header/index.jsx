import React from 'react'
import style from '../Header/index.module.scss'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
   <header>
    <nav>
    <div className={style["logo"]}>
    <h2>Tasty</h2>
    </div>

    <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/menu"}>Menu</NavLink></li>
        <li><NavLink to={"/reservation"}>Reservation</NavLink></li>
        <li><NavLink to={"/add"}>Add</NavLink></li>
        <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
    </ul>
    </nav>
   </header>
  )
}

export default Header
