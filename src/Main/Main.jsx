import React from "react"
import style from './Main.module.css'
import commonStyle from '../common/styles/Styles.module.css'

export const Main = () => {
    return <main className={style.mainBlock}>
                <section className={commonStyle.container}>
                    <div className={style.photoBlock}>
                        <img href="" alt="A picture of me" />
                    </div>
                    
                    <div className={style.textBlock}>
                        <h1>Iryna Rudzko. Frontend developer</h1>
                        <span>Hey there! I'm a passionate frontend developer focused on building excellent
                            software that improves the lives of those around me.
                        </span>
                    </div>
                </section>
            </main>
}