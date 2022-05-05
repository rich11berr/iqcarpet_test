import React from "react";
import "./Input.scss";

//images
import SearchIcon from "../../../assets/other/Search.svg"

const Input = ({...props}) => {

    return <div className={`input_wrap ${props.className}`}>
        <input  className="input" placeholder={props.placeholder} />
        <div className="input_icon_wrap">
            <img src={SearchIcon} alt="search" className="input_icon"/>
        </div>
    </div>;
};

export default Input;
