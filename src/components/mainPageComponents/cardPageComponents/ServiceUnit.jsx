import React from "react";
import style from "./../../../styles/MainPageStyles/CardPageStyles/ServicesTextStyle.module.css"
import {deleteServiceAC} from "../../../store/store"

function ServiceUnit(props){
    let deleteService = ()=>{
        props.dispatch(deleteServiceAC(props.state.deleteService,props.text.number))
    }

    return(
        <div className={style.serviceWrapper}>
            <div><span className={style.subTitle}>Название услуги:</span> <span className={style.nameDate}>{props.text.name}</span></div>
            <div><span className={style.subTitle}>Дата оказания услуги:</span> <span className={style.nameDate}>{props.text.date}</span></div>
            <div><span className={style.subTitle}>Описание услуги: <br/></span>{props.text.description}</div> 
            <div className={style.serviceNumber}><span >Номер услуги <br/></span>{props.text.number}</div> 
            <button className={style.removeServiceUnit} onClick={deleteService}>Удалить услугу</button>
        </div>
    )
}

export default ServiceUnit