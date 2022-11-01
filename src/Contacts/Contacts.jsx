import React from 'react'
import style from './Contacts.module.scss'
import commonStyle from '../common/styles/Styles.module.css'
import { Title } from '../common/components/Title/Title'
import { Footer } from './Footer/Footer'
import { Button } from '../common/components/Button/Button'
import { faPaperPlane } from '@fortawesome/fontawesome-free-solid'

export const Contacts = () => {
    return (
        <section className={style.item}>
            <div className={`${commonStyle.container} ${style.contactsContainer}`}>
                <Title title={'contact '} subtitle={'me'} bgTitle={'feel free to'} />
                <div className={style.contentContainer}>
                    <Footer />
                    <form
                        action="https://public.herotofu.com/v1/ecf8b780-59bc-11ed-b82c-5d75eaa7ccff"
                        method="post"
                        className={style.form}
                        target="_blank"
                    >
                        <input name="Name" id="name" placeholder="Your name" required />
                        <input name="Email" id="email" type="email" placeholder="Your email" required />
                        <textarea name="Message" id="message" placeholder="Your message here" required></textarea>
                        <Button text="Send message" ico={faPaperPlane} type="submit" className={style.submit} />
                    </form>
                </div>
            </div>
        </section>
    )
}
