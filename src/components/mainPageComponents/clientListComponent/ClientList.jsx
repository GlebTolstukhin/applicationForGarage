import React from "react";
import style from "./../../../styles/MainPageStyles/ClientListStyles/ClientListStyle.module.css"
import Client from "./Client";

function ClientList (props){
    
    let clients = Array.from(props.state.clients)
    clients.pop()
    let clientsList = clients.map(el => 
        ({text: {lastName: el.lastName, firstName: el.firstName, patronymic: el.patronymic, carNumber: el.carNumber, phoneNumber: el.phoneNumber}, goTo: `${el.carNumber}`}))
        .map(element => <Client state={props.state} text={element.text} goTo={element.goTo} dispatch ={props.dispatch}/>)
            
    return (
        <div> 
            <h2>Cписок клиентов</h2>
            <div className={style.clientListWrapper}>
                {clientsList}
            </div>
        </div>
    )
}
export default ClientList