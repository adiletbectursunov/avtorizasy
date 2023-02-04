import game from '../../assets/icons/game.png'
import classes from './Headre.module.css'
import instagram from '../../assets/icons/instagram.png'
import vka from '../../assets/icons/vka.png'
import Facebook from '../../assets/icons/Facebook.png'

export const Headre = () => {
    return(
        <header id='container'>
            <div>
                <img className={classes.game} src={game} alt="" />
            </div>
            <div className={classes.button}>
                <button className={classes.but}>Регистрация</button>
                <button className={classes.tub}>Войти</button>
            </div>
            <div className={classes.nav}>
                <button className={classes.pon}>Главная</button>
                <button className={classes.don}>Сражения</button>
                <button className={classes.kun}>ЧАВО</button>
                <button className={classes.num}>Новости</button>
            </div>
            <div className={classes.nov}>
            <a href="https://www.instagram.com/"><img className={classes.instagram} src={instagram} alt="" /></a>
                <a href="https://ru-ru.facebook.com/"><img className={classes.vka} src={vka} alt="" /></a>
                <a href="https://vk.com/"><img className={classes.Facebook} src={Facebook} alt="" /></a>
            </div>
        </header>

    )
}

export default Headre