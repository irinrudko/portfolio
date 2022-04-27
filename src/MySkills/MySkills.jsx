import React from 'react'
import style from './MySkills.module.scss'
import commonStyle from '../common/styles/Styles.module.css'
import { Skill } from './Skill/Skill'
import { Title } from '../common/components/Title/Title'

export const MySkills = () => {
    return <div className={style.item}>
        <section className={`${commonStyle.container} ${style.skillsContainer}`}>
            <Title title={'My '} subtitle={'skills'} bgTitle={'About me'} />
            <div className={style.skills}>
                <Skill title={'React'} description={'about it'} />
                <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '} />
                <Skill title={'CSS'} description={'about it'} />
                <Skill title={'Storybook'} description={'about it'} />
                <Skill title={'Redux'} description={'about it'} />
                <Skill title={'Etc.'} description={'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            </div>
        </section>
    </div>
}

