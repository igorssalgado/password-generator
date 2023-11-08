import { PasswordGeratorHeader } from "../PasswordGeneratorHeader/PasswordGeneratorHeader"
import { PasswordGeratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody"
import { PasswordGeratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter"
import s from "./style.module.css"
import { useState } from "react"

export function PasswordGeratorCard() {

    const [password, setPassword] = useState("senhatop");

    return (
        <div className={s.root}>
            <div className={s.main}>
                <PasswordGeratorHeader />
                <PasswordGeratorBody onSubmit={setPassword}/>
            </div>
            <div className={s.footer}>
                <PasswordGeratorFooter password={password}/>
            </div>
        </div>
    )
}