import classes from './Reestablish.module.css'

export const Reestablish = () => {

    let reg3 = /[1-5]/g;
      
    return(
        <div className={classes.container}>
            <div className={classes.reestablish}>
                <div>
                    <ul className={classes.div}>Восстановление пароля</ul>
                </div>
                <div>
                    <input className={classes.input} type="number" maxlength="10" id='number' placeholder='Введите номер телефона или эл.почту' />
                </div>
                <div >
                    
                    <ul className={classes.type}>
                        <li className={classes.ul}>На данный номер телефона или почту будет </li>
                        <li className={classes.sob}>отправлена ссылка</li>
                    </ul>
                    <ul>
                        <li className={classes.vostonovka}>для восстановления </li>
                        <li className={classes.pasvord}>пароля с дальнейшей инструкцией</li>
                    </ul> 
                </div>
                <div>
                    <button className={classes.button}>Восстановить пароль</button>
                </div>
                <div>
                    <ul>
                        <li className={classes.netu}>У вас есть профиль?<a href='/section'  className={classes.net} > Войти </a> </li>
                    </ul>
                    <ul>
                        <li className={classes.zabl}>Забыли пароль? <a className={classes.zabli} > Восстановить </a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )

}

export default Reestablish