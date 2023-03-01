import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { v4 as uniqueID } from 'uuid'
import { createOneToDo } from '../../../../Redux/reducers/ToDo-reducer'
import { Button } from "../../../Common/Button/Button"
import { MyCalendar } from '../../../Common/Calendar/Calendar'
import { ChooseDate } from "../../../Common/ChooseDate/ChooseDate"
import { ToDoInput } from '../../../Common/FormsControls/ToDoInput'
import { Modal } from '../../../Common/Modal/Modal'
import style from './CreateToDo.module.css'

export const CreateToDo = () => {


    const [isShowCalendar, setIsShowCalendar] = useState(false)
    const [todoDate, setTodoDate] = useState(new Date())

    const dispatch = useDispatch()

    const createNewTodo = (newTodo) => {
        dispatch(createOneToDo(newTodo))
    }
    const setNewDate = (date) => {
        setTodoDate(date)
    }

    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
        setFocus,
        reset
    } = useForm({ mode: "all" })
    const value = watch('toDoText')

    const onSubmit = (data) => {

        if (value) {
            createNewTodo({
                ...data,
                id: uniqueID(),
                todoDate: todoDate.getTime(),
                isDone: false
            })
            setTodoDate(new Date())
            reset()
        }
        setFocus('toDoText')

    }


    return (
        <>
            <AnimatePresence>
                {isShowCalendar &&
                    <Modal setIsShow={setIsShowCalendar} zIndex={2}>
                        <MyCalendar setIsShowCalendar={setIsShowCalendar} setNewDate={setNewDate} todoDate={todoDate} />
                    </Modal>
                }
            </AnimatePresence>

            <div className={style.formContainer}>
                <form onSubmit={handleSubmit(onSubmit)} className={style.toDoCreateForm}>
                    <ToDoInput id='creatToDoText'
                        label='Add a new task'
                        watch={watch}
                        register={register}
                        registerName='toDoText'
                        errors={errors.toDoText}
                        maxLengthMessage="Maximum` 30 symbols"
                        maxLengthValue={30}
                        callBack={onSubmit}

                    />
                    <ChooseDate setIsShowCalendar={setIsShowCalendar} todoDate={todoDate} />
                    <div className={style.submitButtonWrapper}>
                        <Button name='create' />
                    </div>
                </form>
            </div>
        </>
    )

}
