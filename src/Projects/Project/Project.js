import React from 'react'
import style from './Project.module.css'


export const Project = (props) => {
    return <article className={style.project}>
               <div className={style.imgContainer}>
                    <img href="#!" alt="ico"></img>
                </div>
                <div className={style.contentContainer}>
                    <a href="#!"><h3 className={style.link}>Check it out</h3></a>
                    <div className={style.description}>
                        <h4>{props.title}</h4>
                        <span>{props.description}</span>
                    </div>
                </div>             
            </article>   
}