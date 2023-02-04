
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { useState } from 'react'
import classes from './Middle.module.css'
import { Link } from 'react-router-dom'

export const Middle = () => {


    const [type , setType] = useState('password');
    const [icon , setIcon] = useState(eyeOff)

    const handleToggle = () =>{
        if(type === 'password'){
            setIcon(eye)
            setType('text')
        }else{
            setIcon(eyeOff)
            setType('password')
        }
    } 

    return(
        <div>
            <div>
                <ul className={classes.div}>Авторизация через электронный адрес</ul>
            </div>
            <form >
            <div className={classes.van}>
                <input  className={classes.input} type="email" maxlength="40" id='email' placeholder='Введите электронный адрес' />
            </div> 
            <div className={classes.password}>
                <input className={classes.eye} type={type} maxlength="20" placeholder='Введите пароль'  />
                <span onClick={handleToggle}><Icon icon={icon} size={25} /></span>
            </div>
            </form>

            <div>
                <button className={classes.button}>Войти</button>
            </div>
            <div>
                <ul>
                    <li className={classes.netu}>Нету профиля? <Link to='/registrations' className={classes.net}>Зарегистрироваться</Link> </li>
                </ul>
                <ul>
                    <a className={classes.zabl}>Забыли пароль? <Link to='reestablish' > Восстановить </Link></a>
                </ul>
            </div>

        </div>
    )
}

export default Middle