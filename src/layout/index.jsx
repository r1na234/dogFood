import { Header } from "./Header/header"
import { Main } from "./Main/main"
import { Footer } from "./Footer/footer"
import style from './layout.module.css'

export const Layout = () => {
  return (
    <div className="">
      <Header />

      <Main />

      <Footer/>
    </div>
  )
}