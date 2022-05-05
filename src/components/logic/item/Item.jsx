import React from "react";
import "./Item.scss";

import Amount from "../../../assets/shop/amount.svg";
import Location from "../../../assets/shop/location.svg";
import MainImg from "./Ellipse 19.png"
import Caretka from "./caretka.png"

const Item = () => {

    return <div className="item">
        <img src={MainImg} alt="shop" className="item_mainImage"/>
        <p className="item_title">НАЗВАНИЕ ПРОДАВЦА</p>
        <div className="item_wrapper">
            <div className="item_image_wrap">
                <img src={Caretka} alt="carpet" />
                <img src={Caretka} alt="carpet" />
                <img src={Caretka} alt="carpet" />
            </div>
            <div className="item_info_wrap">
                <div className="item_info_subwrap">
                    <img src={Location} alt="location" />
                    <span>Иран, г. Тегеран</span>
                </div>
                <div className="item_info_subwrap">
                    <img src={Amount} alt="amount" />
                    <span>1 200 ковров</span>
                </div>
            </div>
            <button className="item_btn">Подробнее</button>
        </div>
    </div>;
};

export default Item;
