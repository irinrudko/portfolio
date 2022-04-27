import React from "react"
import style from './Contacts.module.css'
import commonStyle from '../common/styles/Styles.module.css'

export const Contacts = () => {
    return <section className={style.item}>
        <div className={`${commonStyle.container} ${style.contactsContainer}`}>
            <h2 className={commonStyle.title}>Feel free to contact me</h2>
            <form action="#!" className={style.form}>
                <input placeholder="Your first name" />
                <input placeholder="Your last name" />
                <textarea placeholder="Your message here"></textarea>
                <input type="submit" value="Submit" className={style.submit} />
            </form>
        </div>
    </section>
}