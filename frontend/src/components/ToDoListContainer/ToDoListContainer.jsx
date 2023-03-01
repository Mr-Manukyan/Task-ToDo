import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllToDos } from '../../Redux/reducers/ToDo-reducer'
import { ToDoContent } from './ToDoContent/ToDoContent'
import { ToDoHeader } from './ToDoHeader/ToDoHeader'
import style from './ToDoList.module.css'

export const ToDoListContainer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllToDos())
  }, [])

  return (
    <div className={style.container}>
      <ToDoHeader />
      <ToDoContent />
    </div>
  )

}

