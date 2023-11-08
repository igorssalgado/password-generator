import s from "./style.module.css"

import copyPasteIcon from "../../assets/copy-paste.svg"

export function PasswordGeratorFooter({password}) {

    function saveInClipboard(){
        navigator.clipboard.writeText(password);
    }

    return (
        <div className={s.root} onClick={saveInClipboard}>
            <div className={s.title}>{password}</div>
            <img src={copyPasteIcon} className={s.copyPasteIcon} alt="copyPasteIcon" />
        </div>
    )
}