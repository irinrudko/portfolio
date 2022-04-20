import React from "react"
import style from './Skill.module.css'

export const Skill = (props) => {
    return <article className={style.skill}>
                <span className={style.imgContainer}></span>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </article>
}