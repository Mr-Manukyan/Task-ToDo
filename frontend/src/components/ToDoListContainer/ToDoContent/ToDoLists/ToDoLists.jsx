import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { changeToDoIsDone, removeOneToDo, updateOneToDoData } from '../../../../Redux/reducers/ToDo-reducer'
import { getToDos } from '../../../../Redux/selectors/ToDo-selector'
import { ToDo } from './ToDo/ToDo'
import style from './ToDoLists.module.css'

export const ToDoLists = () => {

    const todos = useSelector(getToDos)

    const dispatch = useDispatch()

    const deleteOneTodo = (todoID) => {
        dispatch(removeOneToDo(todoID))
    }

    const changeIsDone = (isDone, todoID) => {
        dispatch(changeToDoIsDone(isDone, todoID))
    }

    const updateToDoData = (todoUpdateData) => {
        dispatch(updateOneToDoData(todoUpdateData))
    }

    console.log(todos)

    return (
        <div className={style.container}>

            {
                todos.length === 0 && <div className={style.toDoEmptyBox}>
                    <p className={style.todoEmptyText1}>You have  no tasks registered yet.</p>
                    <p className={style.todoEmptyText2}>Create Your tasks and organize.</p>
                </div>
            }


            <AnimatePresence>
                {
                    todos.map((todo) => <ToDo todo={todo}
                        key={todo.id}
                        changeIsDone={changeIsDone}
                        removeOneTodo={deleteOneTodo}
                        updateToDoData={updateToDoData}
                    />
                    )}
            </AnimatePresence>
        </div>
    )
}



