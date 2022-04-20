import React from "react";
import style from './Footer.module.css'
import commonStyle from '../common/styles/Styles.module.css'

export const Footer = () => {
    return <footer className={style.item}>
                <div className={`${commonStyle.container} ${style.footerContainer}`}>
                    <div className={commonStyle.title}>
                                <h2>Social</h2>
                    </div>
                    <div className={style.socialContainer}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span className={style.copyright}>®2022 All rights reserved</span>
                </div>

        </footer>
}