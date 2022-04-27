import React from 'react'
import style from './Main.module.scss'
import commonStyle from '../common/styles/Styles.module.css'
import { Button } from '../common/components/Button/Button'
import profilePhoto from '../assets/images/me.jpg'
import { NavLink } from 'react-router-dom'

export const Main = () => {
    return <main className={style.mainBlock}>
        <section className={commonStyle.container}>
            <div className={style.colorBlock}></div>
            <img className={style.photo} src={profilePhoto} alt='A picture of Iryna' />
            <div className={style.textBlock}>
                <h1 className={style.title}>I'm Iryna Rudzko.<span className={style.subtitle}>Frontend developer</span></h1>
                <p className={style.description}>Hey there! I'm a passionate frontend developer focused on building excellent
                    software that improves the lives of those around me.
                </p>
                <NavLink to='/skills'><Button text='more about me' /></NavLink>

            </div>
        </section>
    </main>
}