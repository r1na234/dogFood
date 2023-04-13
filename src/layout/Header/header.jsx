import style from './header.module.css'
import header_logo_icon from '../assets/header_logo_icon.svg'
import favorite_item from '../assets/favorite_item.svg'
import account_icon from '../assets/account_icon.svg'
import basket_icon from '../assets/basket_icon.svg'
import menu from '../assets/menu.png'
import search_mobile from '../assets/search_mobile.svg'


export const Header = () => {
    return (<div className={style.header_main}>
        <div className={style.wrapper}>
        <img src={header_logo_icon} alt="petshop" className={style.header_icon} />
        <h1 className={style.header_logo}>DogFood</h1>
        </div>
        <img src={search_mobile} className={style.search_mobile}/>
        <form className={style.form}>
            <input type="search" placeholder="Поиск по сайту" className={style.search}/>
        </form>
        <img src={favorite_item} alt="petshop" className={style.header_favorite} />
        <img src={basket_icon} alt="petshop" className={style.header_basket} />
        <img src={account_icon} alt="petshop" className={style.header_account} />
        <img src={menu} className={style.mobileMenu}/>
        </div>)
} 