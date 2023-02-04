import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import classes from './Registrations.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const Registrations = () => {
    
    const [type , setType] = useState('password');
    const [icon , setIcon] = useState(eyeOff)
    const [pass , setPass] = useState('password');
    const [icons , setIcons] = useState(eyeOff)

    const handleToggle = () =>{
        if(type === 'password'){
            setIcon(eye)
            setType('text')
        }else{
            setIcon(eyeOff)
            setType('password')
        }
    } 


    const passToggle = () =>{
        if(pass === 'password'){
            setIcons(eye)
            setPass('text')
        }else{
            setIcons(eyeOff)
            setPass('password')
        }
    } 

    return (
        <div className={classes.container}>
            <div>
                <ul className={classes.div}>Регистрация</ul>
            </div>
                <div>
                    <input className={classes.type} type="number" maxlength="13" id='number' placeholder='Введите номер' />
                </div>
                <div>
                     <input className={classes.text} type="email" maxlength="40" id='email' placeholder='Введите электронный адрес' />
                </div>
                <div>
                    <input className={classes.usere} type="text" maxlength="20" name="" id="username" placeholder="Введите игровой ник"/>
                </div>
            <div className={classes.password}>
                <input className={classes.eye} type={type} maxlength="20" placeholder='Введите пароль'  />
                <span onClick={handleToggle}><Icon icon={icon} size={25} /></span>
            </div>
            <div  className={classes.pass} >
                 <input className={classes.patt} type={pass} name="" maxlength="20" placeholder="Повторите пароль"/> 
                 <span onClick={passToggle} ><Icon icon={icons} size={25}/></span>  
            </div>
            <div>
                <button className={classes.button}>Регистрация</button>
            </div>
            <div>   
                <ul>
                    <li className={classes.netu}>У вас есть профиль?  <Link to='section' className={classes.pin} >Войти </Link> </li>
                    
                </ul>
                <ul>
                    <li className={classes.zabli}>Забыли пароль? <Link to='middle/:reestablishId' className={classes.pik} > Восстановить </Link> </li>
                    
                </ul>
            </div>
        </div>
    )
} 

export default Registrations