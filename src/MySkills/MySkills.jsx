import React from 'react'
import style from './MySkills.module.scss'
import commonStyle from '../common/styles/Styles.module.css'
import { Skill } from './Skill/Skill'
import { Title } from '../common/components/Title/Title'
import { faReact, faJs, faUikit, faSass, faShirtsinbulk, faOctopusDeploy, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faRocket, faTextWidth, faGlobe, faCloud } from '@fortawesome/fontawesome-free-solid'



export const MySkills = () => {
    return <div className={style.item}>
        <section className={`${commonStyle.container} ${style.skillsContainer}`}>
            <Title title={'my '} subtitle={'skills'} bgTitle={'about me'} />
            <div className={style.skills}>
                <Skill title={'English'} icon={faGlobe} description={'C1+'} />
                <Skill title={'React'} icon={faReact} description={'Hooks, Class components, React-router'} />
                <Skill title={'Redux'} icon={faRocket} description={'Reducers, Thunks, Sagas, Store Structure'} />
                <Skill title={'TypeScript'} icon={faTextWidth} description={'Primitive types, Objects, Generics, Union types'} />
                <Skill title={'Testing'} icon={faOctopusDeploy} description={'Jest, Unit tests, Integration (snapshot) tests'} />
                <Skill title={'Storybook'} icon={faShirtsinbulk} description={'about it'} />
                <Skill title={'ES6+'} icon={faJs} description={'Promises, Eventloop, this, Closures, Hoisting, Recursion, Prototypes, Scope'} />
                <Skill title={'GIT'} icon={faGitAlt} description={'about it'} />
                <Skill title={'CSS 3, Sass'} icon={faSass} description={'Flexbox, grid, positioning'} />
                <Skill title={'Material UI'} icon={faUikit} description={'about it'} />
                <Skill title={'REST API'} icon={faCloud} description={'CRUD, Postman'} />

            </div>
        </section>
    </div>
}

