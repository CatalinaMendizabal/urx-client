import React from "react";
import ArrowButton from "../ArrowButton";

const CrossArrows = ({ moveUp, moveDown, moveRight, moveLeft }) => {

    return (
        <div className={"arrow-buttons-container"}>
            <ArrowButton direction={"up"} onClick={moveUp}/>
            <div className={"arrow-buttons-lr"}>
                <ArrowButton direction={"left"} onClick={moveLeft} />
                <ArrowButton direction={"right"} onClick={moveRight} />
            </div>
            <ArrowButton direction={"down"} onClick={moveDown}/>
        </div>
    );
}

export default CrossArrows;