import React from 'react'
import style from './Project.module.css'


export const Project = (props) => {
    return <article className={style.project}>
               <div className={style.imgContainer}>
                    <a href="#!"><h3 className={style.link}>Check it out</h3></a>
                </div>
                <div className={style.contentContainer}>
                        <h4>{props.title}</h4>
                        <span>{props.description}</span>
                </div>             
            </article>   
}