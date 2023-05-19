import React from "react";
import style from "./../../../styles/MainPageStyles/ClientListStyles/ClientStyle.module.css"
import{NavLink} from "react-router-dom"
import { takeNumberAC } from "../../../store/store";


function Client (props){

    function goToClient(){
        props.dispatch(takeNumberAC(props.state.takeNumber, props.goTo))
    }


    return(
        <div className={style.clientWrapper}>
            <div className={style.infoRow}>
                <div><span className={style.info}>{`${props.text.lastName}  ${props.text.firstName} ${props.text.patronymic}`}</span></div>
                <div><span className={style.subTitle}>Номер автомобиля: </span><span className={style.info}>{props.text.carNumber}</span></div>
                <div><span className={style.subTitle}>Номер телефона: </span><span className={style.info}>{props.text.phoneNumber}</span></div>
            </div>
            <button onClick={goToClient} className={style.goToButton}>
                <NavLink className={style.clientLink} to="/searchClient">Перейти к карте клиента</NavLink>
            </button>
        </div>
    )   
}
export default Client