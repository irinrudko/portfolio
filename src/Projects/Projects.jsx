import React from 'react'
import style from './Projects.module.scss'
import commonStyle from '../common/styles/Styles.module.css'
import { Project } from './Project/Project'
import { Title } from '../common/components/Title/Title'
import myNetImg from '../assets/images/myNet.png'
import todolistImg from '../assets/images/todolist.png'
import virtualPianoImg from '../assets/images/virtualPiano.png'
import petStoryImg from '../assets/images/petstory.png'


export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${myNetImg})`,
    };
    const todolist = {
        backgroundImage: `url(${todolistImg})`,

    };
    const virtualPiano = {
        backgroundImage: `url(${virtualPianoImg})`,
    };
    const petStory = {
        backgroundImage: `url(${petStoryImg})`,
    };

    return <div className={style.item}>
        <section className={`${commonStyle.container} ${style.projectsContainer}`}>
            <Title title={'my '} subtitle={'projects'} bgTitle={'portfolio'} />
            <div className={style.projects}>
                <Project title='Social Network' description="Class &amp; Func components, TS, React Redux, REST API, axios" style={socialNetwork} />
                <Project title='Todolist' description='SPA – React, Redux, Typescript, hooks, HOC' style={todolist} />
                <Project title='Virtual piano keyboard' description='Vanilla JS' style={virtualPiano} />
                <Project title='Petstory figma mockup' description='SASS, responsive, animation, popup, pseudo, position sticky, absolute' style={petStory} />
            </div>
        </section>
    </div>
}

