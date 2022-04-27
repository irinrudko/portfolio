import React from "react"
import style from './Navbar.module.css'

export const Navbar = () => {
    return <div className={style.nav}>
        <a href="">Home</a>
        <a href="">About me</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contacts</a>
    </div>
}