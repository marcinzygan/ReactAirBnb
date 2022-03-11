import React from "react";
import star from "./images/star.png"


export default function Card (props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return(
        
        <div className="card">
            <div className="card__img-container">
               <img src={require(`./images/${props.item.coverImg}`)} className="card__img"></img>
               {badgeText && <p className="card__status">{badgeText}</p>}
            </div>
            <div className="card__info">
                <div className="card__stats">
                <img src={star} className="card__star"></img>
                <p className="rating">{props.item.stats.rating}</p>
                <p className="stock">({props.item.stats.reviewCount})</p>
                <p className="country">{props.item.location}</p>
                </div>
                <p className="card__title">{props.item.title}</p>
                <p className="card__price-data"><span className="card__price">From ${props.item.price}</span> / person</p>
                <p></p>
            </div>
        </div>
       
    )
}