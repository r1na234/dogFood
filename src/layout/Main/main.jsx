import { useEffect, useState } from 'react'
import style from './main.module.css'
import { CardItem } from '../../components/CardItem/cardItem'

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOWFhMzk3MTIxODM4ZjI5MWEiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ5LCJleHAiOjE3MTAzMzg0NDl9.8La4k_qc4EyiTdY1ljl1oXUNJdzTt5LFFMiGWU9Zfok'

export const Main = () =>{

    const [item, setItem] = useState([])

    useEffect(() => {
      const fetchData = async ()=>{
        const res = await fetch('https://api.react-learning.ru/products', {
            headers: {
              Authorization: 'Bearer ' + TOKEN
            }
          }
        )
        const responce  = await res.json()
        setItem(responce)
      }
      fetchData()
    }, [])
    
    console.log(item.products)

    return (
      <>
      <div className={style.container}>        
        <div className={style.main}>
            {item.products?.map((item)=>{
                return (<CardItem key ={item.id} item ={item}/>)
            })}
        </div>
      </div>
      </>
    )
}