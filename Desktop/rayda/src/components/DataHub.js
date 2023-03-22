import React from "react";

const DataHub = ({name, title, image, bid}) => {
    return(
    <div>
        <h1>{name}</h1>
        <p>{title}</p>
        <img src={image}/>
        <p>{bid}</p>
    </div>
    )
}

export default DataHub;