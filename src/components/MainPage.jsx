import React from "react";
import style from "./../styles/MainPage.module.css"
import { Route, Routes } from "react-router-dom";
import NavBar from "./mainPageComponents/NavBar.jsx";
import TitlePage from "./mainPageComponents/titlePageComponents/TitlePage";
import ClientList from "./mainPageComponents/clientListComponent/ClientList";
import CreatePage from "./mainPageComponents/createPageComponent/CreatePage.jsx";
import CardPage from "./mainPageComponents/cardPageComponents/CardPage";

function MainPage (props){
    return(
        <div className={style.mainPageWrapper}>
            <div className={style.navBar}>
                <NavBar />
            </div>
            <div className={style.workingPlace}>
                <Routes>
                    <Route path="/" Component={() =>
                        <TitlePage />}/>
                    <Route path="/searchClient" Component={()=>
                        <CardPage state={props.state} dispatch={props.dispatch} />}/>
                    <Route path="/clientList" Component={()=>
                        <ClientList state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path="/createPage" Component={()=>
                        <CreatePage state={props.state} dispatch={props.dispatch} />}/>
                </Routes>
            </div>
        </div>
    )
}
export default MainPage