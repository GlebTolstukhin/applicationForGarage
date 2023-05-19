import React from "react";
import style from "./../../../styles/MainPageStyles/CardPageStyles/CardPageStyle.module.css"
import ClientInfo from "./ClientInfo";
import ClientServices from "./ClientServices.jsx";
import CreateService from "./CreateService";
import { takeNumberAC } from "../../../store/store";

function CardPage (props){

    let searchingNumber = React.createRef()
    
    let takeNumber = () =>{
        props.dispatch(takeNumberAC(props.state.takeNumber, searchingNumber.current.value))
    }

    return (
        <div className={style.cardPageWrapper}>
            <div className={style.searchRow}>
                <input ref={searchingNumber} className={style.searchArea} type="text"  placeholder="Номер автомобиля или телефона"/>
                <button onClick={takeNumber} className={style.toSearch}>Найти карту клиента</button>
            </div>
            <ClientInfo state={props.state}  />
            <ClientServices state={props.state} dispatch={props.dispatch}/>
            <CreateService state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default CardPage