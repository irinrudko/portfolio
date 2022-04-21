import React from "react"
import { Navbar } from "../Navbar/Navbar"
import style from './Header.module.css'
import commonStyle from '../common/styles/Styles.module.css'


export const Header = () => {
    return <div className={`${style.header}`}>
        <div className={`${commonStyle.center} ${style.flexEnd}`}>
            <Navbar />
        </div>
    </div>
}