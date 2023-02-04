import classes from './Section.module.css'
import { Link } from 'react-router-dom'
import Facebooc from '../../assets/icons/Facebooc.png'
import google from '../../assets/icons/google.png'

export const Section = () => {
    return(
        <div id="container">
            <hr className={classes.line}/>
            <div className={classes.Section}>
                <ul className={classes.avtori}>Авторизация</ul>
            </div> 
            <div className={classes.span}>
                <Link to='/middle' className={classes.elekadres}>Ваш электронный адрес</Link>
                <a className={classes.voitiface}>Войти через Facebook</a>
                <a className={classes.voitigoogle}>Войти через Google</a>
            </div>
            <div>
                <img className={classes.facebooc} src={Facebooc} alt="facebooc" />
                <img className={classes.google} src={google} alt="google" />
            </div>

            <div>
            <div>
                <ul className={classes.div}>
                     Нажимая «Войти» вы соглашаетесь с    <li className={classes.ul}>правилами и условиями </li>  использования сервиса
                </ul>
            </div>
            <div>
                <ul>
                    <li className={classes.netu}>Нету профиля? <Link to='/registrations/:sectionId/'  className={classes.net} >Зарегистрироваться</Link> </li>
                </ul>
                <ul>
                    <a className={classes.zabl}>Забыли пароль? <Link to='/reestablish'> Восстановить </Link></a>
                </ul>
            </div>
            <div>
                <ul className={classes.footer}>Пропустить вход</ul>
            </div>
        </div>
                
        </div>
    )
}
export default Section