import React from 'react'
import style from './Projects.module.scss'
import commonStyle from '../common/styles/Styles.module.css'
import { Project } from './Project/Project'
import { Title } from '../common/components/Title/Title'


export const Projects = () => {
    return <div className={style.item}>
        <section className={`${commonStyle.container} ${style.projectsContainer}`}>
            <Title title={'my '} subtitle={'projects'} bgTitle={'portfolio'} />
            <div className={style.projects}>
                <Project title='Social Network' description='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum' />
                <Project title='Todolist' description='React, Redux, Typescript' />
                <Project title='Virtual piano keyboard' description='Vanilla JS' />
            </div>
        </section>
    </div>
}

