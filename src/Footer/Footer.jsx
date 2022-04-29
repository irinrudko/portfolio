import React from "react";
import style from './Footer.module.scss'

export const Footer = () => {
    return <footer className={style.item}>
        {/* <h2 className={commonStyle.title}>Social</h2> */}
        <span>Telegram</span>
        <span>GitHub</span>
        <span>Linkedin</span>
        <span>Email</span>
    </footer>
}