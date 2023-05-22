import header_logo_icon from '../../assets/images/header_logo_icon.svg'
import style from './Footer.module.css'
import telegram from '../../assets/images/telegram.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import vk from '../../assets/images/vk.svg'

export const Footer = () => {
    return (
        <>
        <div className={style.footer_main}>
            <div className={style.first_column}>
            <div className={style.info_wrapper}>
                <img src={header_logo_icon} alt="petshop"  className={style.logo_icon}/>
                <h1 className={style.footer_logo}>DogFood</h1>
            </div>
            <div className={style.footer_copyright}>© "Интернет-магазин DogFood.ru"</div>
            </div>
            
            
            <div className={style.footer_group}>
                <div className={style.footer_links}>
                    <a className={style.a} href="#">Каталог </a>
                    <a className={style.a} href="#">Акции</a>
                    <a className={style.a} href="#">Новости</a>
                    <a className={style.a} href="#">Отзывы</a>
                </div>
            </div>
            <div className={style.footer_group}>
                 <div className={style.footer_links}> 
                     <a className={style.a} href="#">Оплата и доставка</a>
                     <a className={style.a} href="#">Часто спрашивают</a>
                     <a className={style.a} href="#">Обратная связь</a>
                     <a className={style.a} href="#">Контакты</a>
                 </div>
            </div>
            
            <div className={style.network}>
                <div className={style.footer_links}>
                  <h4>Мы на связи</h4>
                  <a className={style.link} href="tel:79990000000">8 (999) 00-00-00</a>
                  <a className={style.link} href="mailto:dogfood.ru@mail.ru">dogfood.ru@mail.ru</a>
                </div>
                
                    <a href="#"><img src={telegram} className={style.icon} /></a>
                    <a href="#"><img src={whatsapp} className={style.icon}/></a>
                    <a href="#"><img src={vk} className={style.icon}/> </a>
            </div> 
    
    </div>

    <div className={style.mobile_footer}>

        <div className={style.mobile_contacts}>
            <div className={style.mobfooter_links}>
                  <h4 className={style.mobh}>Мы на связи</h4>
                  <a className={style.moblink} href="tel:79990000000">8 (999) 00-00-00</a>
                  <a className={style.moblink} href="mailto:dogfood.ru@mail.ru">dogfood.ru@mail.ru</a>
            </div>
                <div className={style.mobicong}>
                    <a href="#"><img src={telegram} className={style.mobicon} /></a>
                    <a href="#"><img src={whatsapp} className={style.mobicon}/></a>
                    <a href="#"><img src={vk} className={style.mobicon}/> </a>
                </div>
            <div className={style.mobfooter_copyright}>© "Интернет-магазин DogFood.ru"</div>
        </div> 
        
    </div>


    </>
    
    
    )
}