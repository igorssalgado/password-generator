import lockIcon from "../../assets/lock.svg"
import s from "./style.module.css"

export function PasswordGeratorHeader() {
    return (<div className={s.root}>
        <div className={s.title}>
            Password Generator
        </div>
        <img src={lockIcon} className={s.icon} alt="lock icon"/>
    </div>)
}