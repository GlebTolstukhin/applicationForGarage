import React from "react";
import style from "./../../../styles/MainPageStyles/CardPageStyles/CreateServiceStyle.module.css"
import {createServiceAC } from "../../../store/store"

function CreateService (props){

    let serviceName = React.createRef()
    let serviceDate = React.createRef()
    let serviceDescription = React.createRef()

    let createService = () => {
        props.dispatch(createServiceAC(props.state.createService, serviceName.current.value,
            serviceDate.current.value, serviceDescription.current.value))
    }

    return (
        <div className={style.createServiceWrapper}>
            <input ref={serviceName} placeholder="Название услуги" type="text"/>
            <input ref={serviceDate} type="date"/>
            <input ref={serviceDescription} placeholder="Описание услуги" type="text"/>
            <button onClick={createService}>Добавить услугу</button>
        </div>
    )
}
export default CreateService