import React from "react";
import style from "./../../../styles/MainPageStyles/CardPageStyles/ClientInfoStyle.module.css"

function ClientInfo (props){
    const isClient = (el) => {
        
        if(el.phoneNumber === props.state.searchingNumber || el.carNumber === props.state.searchingNumber){
        return el.phoneNumber === props.state.searchingNumber || el.carNumber === props.state.searchingNumber
        }

        else {

            return el.phoneNumber === "Клиент не найден" 
        }
       
    }

    return (
        <div className={style.clientInfoWrapper}>
            <div>
               <span className={style.subTitle}>Фамилия: </span> <span className={style.inf}>{props.state.clients[props.state.clients.findIndex(isClient)].lastName}</span>
            </div>
            <div>
                <span className={style.subTitle}>Имя: </span><span className={style.info}>{props.state.clients[props.state.clients.findIndex(isClient)].firstName}</span>
            </div>
            <div>
                <span className={style.subTitle}>Отчество: </span><span className={style.info}>{props.state.clients[props.state.clients.findIndex(isClient)].patronymic}</span>
            </div>
            <div>
                <span className={style.subTitle}>Госномер транспортного средства: </span><span className={style.info}>{props.state.clients[props.state.clients.findIndex(isClient)].carNumber}</span>
            </div>
            <div>
                <span className={style.subTitle}>Номер телефона: </span><span className={style.info}>{props.state.clients[props.state.clients.findIndex(isClient)].phoneNumber}</span>
            </div>
            <div>
                <span className={style.subTitle}>Email: </span><span className={style.info}>{props.state.clients[props.state.clients.findIndex(isClient)].email}</span>
            </div>
        </div>
    )
}
export default ClientInfo