import style from "./InputCheckBox.module.css";

export const InputCheckBox = ({ isDone, changeIsDone, todoID }) => {

    const InputHandler = (e) => {
        changeIsDone(e.target.checked, todoID)
    }

    return (
        <div className={style.checkBox}>
            <input type="checkbox"
                id={todoID}
                className={style.input}
                checked={isDone}
                onChange={InputHandler}
            />
            <label htmlFor={todoID}></label>
        </div>
    )
}