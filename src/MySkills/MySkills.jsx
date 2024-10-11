import React from 'react';
import style from './MySkills.module.scss';
import commonStyle from '../common/styles/Styles.module.css';
import { Card } from '../components/card/Card';
import { Title } from '../common/components/Title/Title';
import { skills } from './skillsData';

export const MySkills = () => {
    return (
        <div className={style.item}>
            <section className={`${commonStyle.container} ${style.skillsContainer}`}>
                <Title title={'my '} subtitle={'skills'} bgTitle={'about me'} />
                <div className={style.skills}>
                    {skills.map(skill => <Card key={skill.title} title={skill.title} icon={skill.icon} description={skill.description} />)}
                </div>
            </section>
        </div>
    )
}
