import React from "react"
import style from './MySkills.module.css'
import commonStyle from '../common/styles/Styles.module.css'
import { Skill } from "./Skill/Skill"


export const MySkills = () => {
    return <div className={style.item}>
                <section className={`${commonStyle.container} ${style.skillsContainer}`}>
                        <div className={commonStyle.title}>
                            <h2>My Skills</h2>
                        </div>
                        <div className={style.skills}>
                            <Skill title={'React'} description={'about it'} />
                            <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}/>
                            <Skill title={'CSS'} description={'about it'}/>
                            <Skill title={'Storybook'} description={'about it'}/>
                            <Skill title={'Redux'} description={'about it'}/>
                            <Skill title={'Etc.'} description={'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                        </div>
                 </section>
            </div>
}

