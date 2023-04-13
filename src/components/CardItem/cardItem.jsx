import style from './cardItem.module.css'


export const CardItem = ({item}) =>{
    return(
        <div className={style.card}>
            <div className={style.additionalElementsWrapper}>
                <p className={`${item.discount? `${style.discounttag}` :"" }`}>{item.discount>0 && -item.discount}{item.discount>0 && "%"}</p>
                <label>
                    <input type='checkbox' className={style.favorite}/>
                    <span className={style.fakecheckbox}/>
                </label>
 
            </div>
            <div className={style.imgWrapper}>
                <img src={item.pictures} className={style.picture}/>
            </div>
            <p className={style.previousprice}>{item.discount>0&&Math.round((item.price*100)/(100-item.discount))} {item.discount>0 && "₽"}</p>
            <p className={`${item.discount? `${style.disforprice}` :`${style.price}` }`}>{item.price} ₽</p> 
            <p className={style.weight}>{item.wight}</p>
            <p className={style.name}>{item.name}</p>
            <button className={style.button}>В корзину</button>
        </div>
    )
}