import React from "react";
import star from "./images/star.png"


export default function Card (props){
    console.log(props);
    
    return(
        
        <div className="card">
            <div className="card__img-container">
               <img src={require(`./images/${props.img}`)} className="card__img"></img>
               <p className="card__status">{props.status}</p>
            </div>
            <div className="card__info">
                <div className="card__stats">
                <img src={star} className="card__star"></img>
                <p className="rating">{props.rating}</p>
                <p className="stock">({props.reviewCount})</p>
                <p className="country">{props.country}</p>
                </div>
                <p className="card__title">{props.title}</p>
                <p className="card__price-data"><span className="card__price">From ${props.price}</span> / person</p>
                <p></p>
            </div>
        </div>
       
    )
}