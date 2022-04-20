import React from "react"
import style from './Contacts.module.css'
import commonStyle from '../common/styles/Styles.module.css'

export const Contacts = () => {
    return <section className={style.item}>
                <div className={`${commonStyle.container} ${style.contactsContainer}`}>
                    <div className={commonStyle.title}>
                            <h2>Contacts</h2>
                    </div>
                    <article className={style.contacts}>
                        <form action="#!" className={style.form}>
                            <input placeholder="Your first name" /> 
                            <input  placeholder="Your last name" />
                            <textarea placeholder="Write any additional info here">                            
                            </textarea>
                        </form>
                        <input type="submit" value="Submit" className={style.submit} />
                    </article>
                </div>
            </section>
}