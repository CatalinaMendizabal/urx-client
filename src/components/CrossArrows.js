import React from "react";
import ArrowButton from "../ArrowButton";

const CrossArrows = ({ moveUp, moveDown, moveRight, moveLeft, n1, n2, n3, n4 }) => {

    return (
        <div className={"arrow-buttons-container"}>
            <ArrowButton direction={"up"} onClick={moveUp} name={n1}/>
            <div className={"arrow-buttons-lr"}>
                <ArrowButton direction={"left"} onClick={moveLeft} name={n2} />
                <ArrowButton direction={"right"} onClick={moveRight} name={n3} />
            </div>
            <ArrowButton direction={"down"} onClick={moveDown} name={n4} />
        </div>
    );
}

export default CrossArrows;