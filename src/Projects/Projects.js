import React from "react"
import style from './Projects.module.css'
import commonStyle from '../common/styles/Styles.module.css'
import { Project } from "./Project/Project"


export const Projects = () => {
    return <div className={style.item}>
                <section className={`${commonStyle.container} ${style.projectsContainer}`}>
                        <div className={commonStyle.title}>
                            <h2>My Projects</h2>
                        </div>
                        <div className={style.projects}>
                            <Project title='Social Network' description='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum'/>
                            <Project title='Todolist' description='React, Redux, Typescript'/>
                            <Project title='Virtual piano keyboard' description='Vanilla JS'/>
                        </div>
                 </section>
            </div>
}

