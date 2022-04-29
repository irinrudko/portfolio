import React from "react"
import style from './Contacts.module.scss'
import commonStyle from '../common/styles/Styles.module.css'
import { Title } from '../common/components/Title/Title'
import { Footer } from '../Footer/Footer';
import { Button } from "../common/components/Button/Button";


export const Contacts = () => {
    return <section className={style.item}>
        <div className={`${commonStyle.container} ${style.contactsContainer}`}>
            <Title title={'contact '} subtitle={'me'} bgTitle={'feel free to'} />
            <div className={style.contentContainer}>
                <Footer />
                <form action="#!" className={style.form}>
                    <input placeholder="Your name" required />
                    <input type='email' placeholder="Your email name" required />
                    <textarea placeholder="Your message here" required></textarea>
                    <Button text='Send message' type="submit" className={style.submit} />
                </form>
            </div>
        </div>
    </section>
}