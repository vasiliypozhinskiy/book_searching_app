import React from "react";
import backgroundImage from "../../../assets/images/background.jpg"
import styles from "./Background.module.scss"

const Background = () => {
    return <div className={styles.background__container} style={{backgroundImage: `url(${backgroundImage})`}}/>
}

export default Background
