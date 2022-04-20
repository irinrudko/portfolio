import React from "react"
import style from './Projects.module.css'
import commonStyle from '../common/styles/Styles.module.css'


export const Projects = () => {
    return <div className={style.item}>
                <section className={`${commonStyle.container} ${style.projectsContainer}`}>
                        <div className={commonStyle.title}>
                            <h2>My Projects</h2>
                        </div>
                        <div className={style.projects}>
                            <a href="#!">
                                <article className={style.project}>
                                    <span className={style.imgContainer}>
                                        <img href="#!" alt="ico"></img>
                                    </span>
                                    <div className={style.contentContainer}>
                                            <a href="#!"><h3 className={style.link}>Check it out</h3></a>
                                            <div className={style.description}>
                                                <h4>Social Network</h4>
                                                <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</span>
                                            </div>
                                    </div>
                                </article>
                            </a>
                            <a href="#!">
                                <article className={style.project}>
                                    <span className={style.imgContainer}>
                                        <img href="#!" alt="ico"></img>
                                    </span>
                                    <div className={style.contentContainer}>
                                            <a href="#!"><h3 className={style.link}>Check it out</h3></a>
                                            <div className={style.description}>
                                                <h4>Todolist</h4>
                                                <span>React, Redux, Typescript</span>
                                            </div>
                                    </div>
                                </article>
                            </a>
                            <a href="#!">
                                <article className={style.project}>
                                    <span className={style.imgContainer}>
                                        <img href="#!" alt="ico"></img>
                                    </span>
                                    <div className={style.contentContainer}>
                                            <a href="#!"><h3 className={style.link}>Check it out</h3></a>
                                            <div className={style.description}>
                                                <h4>Virtual piano keyboard</h4>
                                                <span>Vanilla JS</span>
                                            </div>
                                    </div>
                                </article>
                            </a>
                           
                           
                        </div>
                 </section>
            </div>
}

