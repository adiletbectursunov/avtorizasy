
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { useState } from 'react'
import classes from './Middle.module.css'
import { Link } from 'react-router-dom'

export const Middle = () => {

    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')



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
                <input onChange={e=>setFirstName(e.target.value)}  className={classes.input} type="email" maxlength="40" id='email' placeholder='Введите электронный адрес' />
            </div> 
            <div className={classes.password}>
                <input className={classes.eye} type={type} maxlength="20" placeholder='Введите пароль'  />
                <span onClick={handleToggle}><Icon icon={icon} size={25} /></span>
            </div>
            <label onChange={e=>setFirstName(e.target.value)}  className={classes.name}>at pustoq bolbosh kerek</label>
            </form>
            <div>
                <button className={classes.button}>Войти</button>
            </div>
            <label className={classes.last_name}>familia  pustoq bolbosh kerek</label>
            <div className={classes.div_ul}>
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