import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Card.module.scss'

export const Card = ({title, icon, description}) => {
    return <article className={style.card}>
        <span className={style.icon}>
            <FontAwesomeIcon icon={icon} />
        </span>
        <h3 className={style.title}>{title}</h3>
        <span className={style.description}>{description}</span>
    </article>
}