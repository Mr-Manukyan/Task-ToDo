import { CreateToDo } from './CreateToDo/CreateToDo'
import style from './ToDoContent.module.css'
import { ToDoLists } from './ToDoLists/ToDoLists'

export const ToDoContent = () => {

    return (
        <div className={style.container}>
            <div className={style.createToDoWrapper}>
                <CreateToDo />
            </div>
            <div className={style.todoLists}>
                <ToDoLists />
            </div>
        </div>
    )
}

