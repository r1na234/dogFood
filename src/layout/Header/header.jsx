import style from './Header.module.css'
import header_logo_icon from '../../assets/images/header_logo_icon.svg'
import favorite_item from '../../assets/images/favorite_item.svg'
import account_icon from '../../assets/images/account_icon.svg'
import basket_icon from '../../assets/images/basket_icon.svg'
import menu from '../../assets/images/menu.png'
import search_mobile from '../../assets/images/search_mobile.svg'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import exit from '../../assets/images/exit.png'
import { AuthToken } from "../../assets/constants/const";

export const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem(AuthToken)

    
   
  
    return (<div className={style.header_main}>
        
        <div className={style.wrapper}>
            <NavLink to="/about"><img src={header_logo_icon} alt="petshop" className={style.header_icon} /></NavLink>
            <NavLink to="/about"className={style.header_logo} 
            {...({isActive }) => (
                <p className={isActive ? "active" : ""}>Tasks</p>
              )}
            >DogFood</NavLink>
        </div>
        <img src={search_mobile} alt="поиск" className={style.search_mobile} />
        <form className={style.form}>
            <input type="search" placeholder="Поиск по сайту" className={style.search}/>
        </form>
        <NavLink to='/favouriteItems'className={style.header_favorite}><img src={favorite_item} alt="избранное" className={style.header_favorite}/></NavLink>
        <NavLink to='/basket' className={style.header_basket}><img src={basket_icon} alt="корзина" className={style.header_basket} /></NavLink>
        <NavLink to='/personalPage' className={style.header_account}><img src={account_icon} alt="личный кабинет" className={style.header_account}/></NavLink>
        <img src = {exit} className={`${token? `${style.exit}`: `${style.exitNotDisplayed}`}`} onClickCapture={()=>{
            localStorage.clear() 
            navigate('/')
        }
            }/>
        <img src={menu} alt="меню" className={style.mobileMenu}/>
        </div>)
}