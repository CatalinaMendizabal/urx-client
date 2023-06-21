import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong, faLeftLong, faUpLong, faDownLong, faShare, faReply } from '@fortawesome/free-solid-svg-icons';

const ArrowButton = ({direction, onClick}) => (
    <button onClick={onClick} className={"arrow-button"}>
        {direction === "right" && <FontAwesomeIcon icon={faRightLong} className={"arrow-icon"}/>}
        {direction === "left" && <FontAwesomeIcon icon={faLeftLong} className={"arrow-icon"} />}
        {direction === "up" && <FontAwesomeIcon icon={faUpLong} className={"arrow-icon"} />}
        {direction === "down" && <FontAwesomeIcon icon={faDownLong} className={"arrow-icon"} />}
        {direction === "rotate-right" && <FontAwesomeIcon icon={faShare} className={"arrow-icon"} />}
        {direction === "rotate-left" && <FontAwesomeIcon icon={faReply} className={"arrow-icon"} />}
        <span className={"direction-text"}>{direction}</span>
    </button>
);

export default ArrowButton;