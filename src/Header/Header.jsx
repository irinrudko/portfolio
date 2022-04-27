import React from "react"
import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faPaperPlane, faUserGraduate } from '@fortawesome/fontawesome-free-solid'
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"


export const Header = () => {
    return (<div className={style.header}>
        <NavLink to='/'><FontAwesomeIcon icon={faHome} />Home</NavLink>
        <NavLink to='/skills'><FontAwesomeIcon icon={faHome} />About me</NavLink>
        <NavLink to='/projects'><FontAwesomeIcon icon={faBriefcase} />Projects</NavLink>
        <NavLink to='/contacts'><FontAwesomeIcon icon={faPaperPlane} />Contacts</NavLink>

        {/* <a href=""> <FontAwesomeIcon icon={faUserGraduate} />Skills</a> */}
    </div >)
}