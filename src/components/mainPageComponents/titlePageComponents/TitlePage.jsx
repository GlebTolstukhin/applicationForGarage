import React from "react";
import style from "./../../../styles/MainPageStyles/TitlePageStyles/TitlePageStyle.module.css"
function TitlePage () {
    return (
        <div className={style.titlePageWarapper}>
            <h2 className={style.title}>Как создать клиента</h2>
            <div className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sapiente obcaecati enim quaerat reprehenderit voluptas! Nisi quos cupiditate, iusto sit possimus veritatis minima earum at dolores sunt, fugit quasi nostrum?</div>
            <h2 className={style.title}>Поиск клиента</h2>
            <div className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officiis alias dignissimos earum incidunt sed quo et nostrum similique? Veniam aperiam sit deleniti nostrum error, quo facilis dicta mollitia autem.</div>
            <h2 className={style.title}>Просмотр истории обслуживания клиента</h2>
            <div className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum, molestias, aliquid mollitia debitis nihil optio provident consequatur saepe expedita ullam unde perferendis, natus qui velit est culpa! Ipsum, saepe.</div>
            <h2 className={style.title}>Еще что-то</h2>
            <div className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure necessitatibus sapiente adipisci, eligendi quam autem fugiat rem maxime aliquam mollitia magni dolorem, veritatis hic est illum ullam similique. Voluptas, enim?</div>
        </div>
    )
}
export default TitlePage