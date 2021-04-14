import React from "react";
import styles from "./Preloader.module.scss"
import preloaderImage from "../../../assets/images/Eclipse-1s-200px.svg"

const Preloader = () => {
    return <img className={styles.Preloader} src={preloaderImage} alt={"preloader"}/>
}

export default Preloader
