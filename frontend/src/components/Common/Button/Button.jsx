import style from './Button.module.css'

export const Button = ({
  name, width, fontSize,
  height, borderRadius, padding
}) => {

  return (
    <button className={style.btn}
      style={{ width, height, borderRadius, fontSize, padding }}
    >
      {name}
    </button>
  )
}
