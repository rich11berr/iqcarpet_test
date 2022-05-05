import React from "react";
import "./Header.scss";

//images
import Logo from "../../../assets/header/logo.svg"
import Menu from "../../../assets/header/menu.svg"

const Header = () => {
    return <div className="header">
        <img src={Logo} alt="iqcarpet" className="header__logo" />
        <div className="header__nav">
            <button className="header__nav_btn current">
                Каталог
                <img src={Menu} alt="menu" />
            </button>
            <button className="header__nav_btn">Продавцы
            </button>
            <button className="header__nav_btn">Контакты</button>
        </div>
    </div>;
};

export default Header;
