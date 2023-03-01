import { memo } from 'react'
import style from './ChooseDate.module.css'
import calendarIcon from '../../../assets/icons/calendar-icon.png'
import { dateFormatter } from '../../../helpers/helpers'


export const ChooseDate = memo(({ setIsShowCalendar, todoDate }) => {

    const isCalendarShowHandler = () => {
        setIsShowCalendar(true)
    }
    const formattedDate = dateFormatter(todoDate)

    return (

        <div className={style.calendarIconWrapper}>
            <p className={style.paragraph}>Add date</p>
            <div className={style.dateInfo}>{formattedDate}</div>
            <div className={style.calendarIconBody} onClick={isCalendarShowHandler}>
                <img src={calendarIcon} alt='calendar-icon' className={style.calendarIcon} />
            </div>
        </div>

    )
})

