import style from './ToDoHeader.module.css'
import icon from '../../../assets/icons/ToDoIcon.png'
import { Loading } from '../../Common/Loading/Loading'
import { useSelector } from 'react-redux'
import { getIsLoading } from '../../../Redux/selectors/ToDo-selector'

export const ToDoHeader = () => {

    const isLoading = useSelector(getIsLoading)

    return (
        <div className={style.container}>
            {isLoading && <Loading name='ToDo' />}
            <div className={style.body}>
                <img src={icon} alt='ToDo-icon' className={style.icon} />
                <h1 className={style.paragraph}>ToDO</h1>
            </div>
            {isLoading && <Loading name='ToDo' />}
        </div>
    )
}

