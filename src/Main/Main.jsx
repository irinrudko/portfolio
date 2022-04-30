import React from 'react'
import style from './Main.module.scss'
import commonStyle from '../common/styles/Styles.module.css'
import { Button } from '../common/components/Button/Button'
import profilePhoto from '../assets/images/me.jpg'
import { faDownload } from '@fortawesome/fontawesome-free-solid'


export const Main = () => {
    return <main className={style.main}>
        <section className={`${commonStyle.container} ${style.container}`}>
            <div className={style.colorBlock}></div>
            <img className={style.photo} src={profilePhoto} alt='A picture of Iryna' />
            <div className={style.textBlock}>
                <h1 className={style.title}>I'm Iryna Rudzko.<span className={style.subtitle}>Frontend developer</span></h1>
                <p className={style.description}>Hey there! I'm a passionate frontend developer focused on building excellent software that makes people's lives easier.
                    Being a former teacher of English, I have strong communication skills (both oral and written), can take responsibility and work well in a team.
                </p>
                <a href='https://www.linkedin.com/in/irinrudko/' target='_blank'><Button text='Download CV' ico={faDownload} /></a>
            </div>
        </section >
    </main >
}