import React from "react";
import style from "./../../../styles/MainPageStyles/CardPageStyles/ClientServicesStyle.module.css"
import ServiceUnit from "./ServiceUnit";

function ClientServices (props){

    const isClient = (el) => {
        
        if(el.phoneNumber === props.state.searchingNumber || el.carNumber === props.state.searchingNumber){
        return el.phoneNumber === props.state.searchingNumber || el.carNumber === props.state.searchingNumber
        }

        else {
            return el.phoneNumber === "Клиент не найден" 
        }
       
    }

    let services = props.state.clients[props.state.clients.findIndex(isClient)].services
        
    let servicesContent = services.map(el => <ServiceUnit text={el} state={props.state} dispatch={props.dispatch}/>)
  
    return(
        <div className={style.clientServiceWrapper}>
            {servicesContent}
        </div>
    )
}
export default ClientServices