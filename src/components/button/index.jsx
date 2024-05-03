import React from "react";
import './styles.css';

export default function Button ({ children, onClick }){
    return <button onClick={() => onClick()}>{children}</button>
}