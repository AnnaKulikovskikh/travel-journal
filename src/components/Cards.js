import React from "react"
import googlemap from "../images/googlemap.png"

export default function Cards(props) {
    
    return (
        <div className="card">
            <img src={props.img}/>
            <div className="depict">
                <div className="location">
                    <img src={googlemap} />
                    <p>{props.country}</p>
                    <a href={props.url}>View on Google Maps</a>
                </div>
                <h2>{props.site}</h2>
                <p className="date">{props.from} - {props.to}</p>
                <p className="description">{props.text}</p>
            </div>
        </div>
    )
}