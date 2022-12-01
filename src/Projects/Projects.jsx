import React from 'react'
import style from './Projects.module.scss'
import commonStyle from '../common/styles/Styles.module.css'
import { Project } from './Project/Project'
import { Title } from '../common/components/Title/Title'
import myNetImg from '../assets/images/myNet.png'
import todolistImg from '../assets/images/todolist.png'
import virtualPianoImg from '../assets/images/virtualPiano.png'
import petStoryImg from '../assets/images/petstory.png'
import cardsImg from '../assets/images/cards.png'

export const Projects = () => {
    const cards = {
        backgroundImage: `url(${cardsImg})`,
    }
    const socialNetwork = {
        backgroundImage: `url(${myNetImg})`,
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`,
    }
    const virtualPiano = {
        backgroundImage: `url(${virtualPianoImg})`,
    }
    const petStory = {
        backgroundImage: `url(${petStoryImg})`,
    }

    return (
        <div className={style.item}>
            <section className={`${commonStyle.container} ${style.projectsContainer}`}>
                <Title title={'my '} subtitle={'projects'} bgTitle={'portfolio'} />
                <div className={style.projects}>
                    <a href="https://irinrudko.github.io/learning-cards" target="_blank" rel="noreferrer">
                        <Project
                            title="Cards"
                            description="Startup project developed in a team. Git, Jira, daily scrum meetings
                             React/Redux/TS"
                            style={cards}
                        />
                    </a>
                    <a href="https://irinrudko.github.io/hogwarts" target="_blank" rel="noreferrer">
                        <Project
                            title="Social Network"
                            description="Model-View-Presenter, Flux patterns; React/Redux/TS, Class &amp; Func components"
                            style={socialNetwork}
                        />
                    </a>
                    <a href="https://irinrudko.github.io/todolist" target="_blank" rel="noreferrer">
                        <Project
                            title="Todolist"
                            description="SPA – React/Redux-toolkit/TS. Storybook, hooks, HOCs, REST API, axios. Unit, integration tests"
                            style={todolist}
                        />
                    </a>
                    <a href="https://irinrudko.github.io/virtual-piano/" target="_blank" rel="noreferrer">
                        <Project
                            title="Virtual piano keyboard"
                            description="Vanilla JS. DOM events"
                            style={virtualPiano}
                        />
                    </a>
                    <a
                        href="https://rolling-scopes-school.github.io/irinrudko-JSFE2021Q1/online-zoo/pages/index.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Project
                            title="Petstory figma mockup"
                            description="SASS, svg, adaptive, animation, tooltip, pseudo, position sticky, absolute, bg images"
                            style={petStory}
                        />{' '}
                    </a>
                </div>
            </section>
        </div>
    )
}
