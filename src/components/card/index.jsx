import React from "react";
import './styles.css';

export default function Card({ title, subtitle, style, image, onClick }) {
    return (
        <div className="card" style={{ ...style }} onClick={onClick}>
            <img className="image" src={image} alt={title} />
            <div className="content">
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
            </div>
        </div>
    )
}