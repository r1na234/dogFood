import { useEffect, useState } from 'react'
import style from './Main.module.css'
import { CardItem } from '../../components/CardItem/CardItem'
import { AuthToken } from '../../assets/constants/const'
import { getAllProducts } from '../../Api/Products/getAllProductsApi'
import { useNavigate } from 'react-router-dom'


export const Main = () =>{

  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem(AuthToken)
    if(!token){
      navigate('/')
    }
  },[navigate])

    const [item, setItem] = useState([])

    useEffect(() => {
      const fetchData = async ()=>{
        const token = localStorage.getItem(AuthToken)
        const res = await getAllProducts(token)
        const responce  = await res.json()
        setItem(responce)
      }
      fetchData()
    }, [setItem])
    
    console.log(item.products)
    
    return (
      <>
      <div className={style.container}>        
        <div className={style.main}>
            {item.products?.map((item)=>{
                return (<CardItem key ={item._id} item ={item}/>)
            })}
        </div>
      </div>
      </>
    )
}