import React from "react"
import style from './Contacts.module.css'
import commonStyle from '../common/styles/Styles.module.css'
import { Title } from '../common/components/Title/Title'

export const Contacts = () => {
    return <section className={style.item}>
        <div className={`${commonStyle.container} ${style.contactsContainer}`}>
            <Title title={'contact '} subtitle={'me'} bgTitle={'feel free to'} />
            <form action="#!" className={style.form}>
                <input placeholder="Your first name" />
                <input placeholder="Your last name" />
                <textarea placeholder="Your message here"></textarea>
                <input type="submit" value="Submit" className={style.submit} />
            </form>
        </div>
    </section>
}