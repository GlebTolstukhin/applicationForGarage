import React from "react"; 
import style from "./../../../styles/MainPageStyles/CreatePageStyles/CreatePageStyle.module.css"
import { createClientAC } from "../../../store/store";

function CreatePage (props){

    let lastNameText = React.createRef()
    let firstNameText = React.createRef()
    let patronymicText = React.createRef()
    let phoneNomberText = React.createRef()
    let carNumberText = React.createRef()
    let emailText = React.createRef()


    let createClient = ()=>{
        props.dispatch(createClientAC(props.state.createClient, lastNameText.current.value, firstNameText.current.value,
             patronymicText.current.value,carNumberText.current.value, phoneNomberText.current.value, emailText.current.value))
    }

    return(
        <div className={style.createPageWrapper}>
            <div className={style.infoTitle}>Фамилия</div>
            <input ref={lastNameText} type="text"  placeholder="Фамилия"/>
            <div className={style.infoTitle}>Имя</div>
            <input ref={firstNameText} type="text"  placeholder="Имя"/>
            <div className={style.infoTitle} >Отчество</div>
            <input ref={patronymicText} type="text" placeholder="Отчество"/>
            <div className={style.infoTitle} >Номер транспортного средства</div>
            <input ref={carNumberText} type="text" placeholder="x000xx000"/>
            <div className={style.infoTitle} >Номер телефона</div>
            <input ref={phoneNomberText} type="tel" placeholder="x-xxx-xxx-xx-xx"/>
            <div className={style.infoTitle} >Email</div>
            <input ref={emailText} type="email" placeholder="address@email.dom"/>
            <button onClick={createClient} className={style.toCreate}>Создать карту клиента</button>
        </div>
    )
}
export default CreatePage