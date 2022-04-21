import React from "react";
import style from './Footer.module.css'
import commonStyle from '../common/styles/Styles.module.css'

export const Footer = () => {
    return <footer className={style.item}>
        <div className={`${commonStyle.container} ${style.footerContainer}`}>
            <h2 className={commonStyle.title}>Social</h2>
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