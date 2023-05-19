import React from "react";
import{NavLink} from "react-router-dom"
import style from "./../../styles/MainPageStyles/NavBarStyle.module.css"

let aFn = ({ isActive }) => isActive ? style.active : undefined;
function NavBar (){
    return (
        <nav className={style.navBar}>
           <div className={style.navPoint}>
            <NavLink to="/" className={aFn}>Главная страница</NavLink>
           </div>
           <div className={style.navPoint}>
            <NavLink to="/searchClient" className={aFn}>Учетные записи клиентов</NavLink>
           </div>
           <div className={style.navPoint}>
            <NavLink to="/clientList" className={aFn}>Список клиентов</NavLink>
           </div>
           <div className={style.createUser}>
            <NavLink to="/createPage" className={aFn}>Создать клиента</NavLink>
           </div>
        </nav>
    )
}
export default NavBar