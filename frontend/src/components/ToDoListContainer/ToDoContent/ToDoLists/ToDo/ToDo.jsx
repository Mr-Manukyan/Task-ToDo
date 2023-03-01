import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { BsTrash } from 'react-icons/bs'
import { BsPencilSquare } from 'react-icons/bs'
import { dateFormatter } from '../../../../../helpers/helpers'
import { MyCalendar } from '../../../../Common/Calendar/Calendar'
import { ChooseDate } from '../../../../Common/ChooseDate/ChooseDate'
import { ToDoInput } from '../../../../Common/FormsControls/ToDoInput'
import { InputCheckBox } from '../../../../Common/InputCheckBox/InputCheckBox'
import { Modal } from '../../../../Common/Modal/Modal'
import style from './ToDo.module.css'

export const ToDo = ({ todo, changeIsDone, removeOneTodo, updateToDoData }) => {

    const [isShowModalFormEditor, setIsShowModalFormEditor] = useState(false)
    const [isShowCalendar, setIsShowCalendar] = useState(false)
    const [toDoDate, setToDoDate] = useState(new Date(todo.todoDate))
    const todoDateFormatted = dateFormatter(todo.todoDate)


    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
        setFocus,
        setValue,
    } = useForm({
        mode: "all", defaultValues: {
            toDoUpdateText: todo.toDoText
        }
    })


    const value = watch('toDoUpdateText')

    const openToDoEditor = () => {
        setIsShowModalFormEditor(true)
        setValue('toDoUpdateText', todo.toDoText)
        setToDoDate(new Date(todo.todoDate))
    }

    const onSubmit = (data) => {
        if (value) {
            updateToDoData({
                id: todo.id,
                toDoText: data.toDoUpdateText,
                todoDate: toDoDate.getTime()
            })
            setIsShowModalFormEditor(false)
        }
        setFocus('toDoUpdateText')
    }

    return (
        <>
            <AnimatePresence>
                {isShowCalendar &&
                    <Modal setIsShow={setIsShowCalendar} zIndex={3}>
                        <MyCalendar setIsShowCalendar={setIsShowCalendar}
                            setNewDate={(date) => setToDoDate(date)}
                            todoDate={toDoDate}
                        />
                    </Modal>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    isShowModalFormEditor &&

                    <Modal setIsShow={setIsShowModalFormEditor}>
                        <form onSubmit={handleSubmit(onSubmit)} className={style.todoUpdateFormContainer}>
                            <h3 className={style.updateParagraph}>Update Your Data</h3>
                            <ToDoInput id='updateToDoText'
                                label='Update your todo text'
                                watch={watch}
                                register={register}
                                registerName='toDoUpdateText'
                                errors={errors.toDoUpdateText}
                                maxLengthMessage="Maximum` 30 symbols"
                                maxLengthValue={30} />
                            <ChooseDate setIsShowCalendar={setIsShowCalendar} todoDate={toDoDate} />
                            <button className={style.updateButton}>Update</button>
                        </form>
                    </Modal>
                }
            </AnimatePresence>


            <motion.div className={style.container}
                key={todo.id}
                initial={{ opacity: 0, x: "100px" }}
                animate={{ opacity: 1, x: "0px" }}
                exit={{ opacity: 0, x: "-100px" }}
                transition={{ duration: .3 }}
                layoutId={todo.id}
            >
                <div className={style.editorWrapper}>

                    <div className={style.bodyWrapper}>
                        <div className={style.todoBody}>
                            <p style={{
                                textDecoration: todo.isDone ? 'line-through' : '',
                                textDecorationColor: todo.isDone ? '#FF6951' : '',
                                textDecorationThickness: todo.isDone && '3px'
                            }} className={style.todoText}>
                                {todo.toDoText}
                            </p>
                        </div>
                        <div className={style.todoEditorWrapper}>
                            <p className={style.todoDate}>{todoDateFormatted}</p>
                        </div>
                    </div>

                    <div className={style.removeAndEditWrapper}>
                        <div className={style.checkboxWrapper}>
                            <InputCheckBox isDone={todo.isDone} todoID={todo.id} changeIsDone={changeIsDone} />
                        </div>
                        <BsPencilSquare className={style.todoUpdate} onClick={openToDoEditor} />
                    </div>
                    <BsTrash className={style.todoRemove} onClick={() => removeOneTodo(todo.id)} />
                </div>
            </motion.div>

        </>
    )
}

