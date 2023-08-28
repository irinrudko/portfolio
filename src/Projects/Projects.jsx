import React from 'react'
import style from './Projects.module.scss'
import commonStyle from '../common/styles/Styles.module.css'
import { Project } from './Project/Project'
import { Title } from '../common/components/Title/Title'
import todolistImg from '../assets/images/todolist.png'
import virtualPianoImg from '../assets/images/virtualPiano.png'
import cardsImg from '../assets/images/cards.png'
import inctagramImg from '../assets/images/inctagram.png'

export const Projects = () => {
    const cards = {
        backgroundImage: `url(${cardsImg})`,
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`,
    }
    const virtualPiano = {
        backgroundImage: `url(${virtualPianoImg})`,
    }
    const inctagram = {
        backgroundImage: `url(${inctagramImg})`,
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
                    <a href="https://irinrudko.github.io/todolist" target="_blank" rel="noreferrer">
                        <Project
                            title="Todolist"
                            description="SPA – React/Redux-toolkit/TS. Storybook, hooks, HOCs, REST API, axios. Unit, integration tests"
                            style={todolist}
                        />
                    </a>
                    <a href="https://inctagram.net" target="_blank" rel="noreferrer">
                        <Project
                            title="Inctagram – in process"
                            description="Been developing in a team. Next.js, SSR, RTK Query, Jest, React testing library, UI-kit, Radix, Sass"
                            style={inctagram}
                        />
                    </a>
                    <a href="https://irinrudko.github.io/virtual-piano/" target="_blank" rel="noreferrer">
                        <Project
                            title="Virtual piano keyboard"
                            description="Vanilla JS. DOM events"
                            style={virtualPiano}
                        />
                    </a>
                </div>
            </section>
        </div>
    )
}
