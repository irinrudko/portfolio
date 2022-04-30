import React from "react";
import style from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'


export const Footer = () => {
    return <footer className={style.item}>
        <a href='!#' target='_blank' rel='author'>
            <span><FontAwesomeIcon icon={faTelegram} />Telegram </span>
        </a>
        <a href='src/Contacts/Footer/Footer' target='_blank' rel='author'>
            <span><FontAwesomeIcon icon={faLinkedin} />Linkedin </span>
        </a>
        <a href='src/Contacts/Footer/Footer' target='_blank' rel='author'>
            <span><FontAwesomeIcon icon={faGithub} />GitHub </span>
        </a>
        <a href='!#' target='_blank' rel='author'>
            <span><FontAwesomeIcon icon={faEnvelope} />Email </span>
        </a>

    </footer>
}