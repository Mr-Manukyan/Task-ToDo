import React from 'react'
import style from './ToDoInput.module.css'
import { motion } from 'framer-motion'


export const ToDoInput = ({ register, isRequired = false,
  id, placeholder, registerName, requiredMessage = '',
  maxLengthValue = 10, maxLengthMessage = '', minLengthValue = 0,
  minLengthMessage = '', errors, type, label = '', watch, callback
}) => {

  const value = watch(registerName)
  const onKeyDownHandler = (e) => {
    if (e.charCode === 13) {
      callback()
    }
  }

  return (
    <div className={style.inputField}>
      <input id={id}
        className={errors ? style.inputError : style.input}
        placeholder={placeholder}
        onKeyDown={onKeyDownHandler}
        type={type}
        {...register(registerName,

          {
            [isRequired ? 'required' : '']: requiredMessage,
            maxLength: {
              value: maxLengthValue,
              message: maxLengthMessage
            },
            minLength: {
              value: minLengthValue,
              message: minLengthMessage
            },
          }
        )}
      />
      <label htmlFor={id} className={errors ? style.labelError : (value ? style.labelActive : style.label)}>
        {label}
      </label>

      {errors &&
        <motion.div className={style.errorWrapper}
          initial={{ opacity: 0, x: '-30px' }}
          animate={{ opacity: 1, x: '0px' }}
          exit={{ opacity: 0, x: '-30px' }}
          transition={{ duration: .3 }}
        >
          <p className={style.errorMessage}>
            {errors?.message}
          </p>
        </motion.div>
      }
    </div>
  )
}















