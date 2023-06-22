import ArrowButton from "../ArrowButton";

const UpDownArrows = ({ moveUp, moveDown, rotateRight, rotateLeft, direction, n1, n2 }) => {

    if (direction === "up-down") {
        return (
            <div className="up-down-arrows">
                <ArrowButton direction={"up"} onClick={moveUp} name={n1} />
                <ArrowButton direction={"down"} onClick={moveDown} name={n2} />
            </div>
        )
    } else {
        return (
            <div className="up-down-arrows">
                <ArrowButton direction={"rotate-left"} onClick={rotateLeft} name={n1} />
                <ArrowButton direction={"rotate-right"} onClick={rotateRight} name={n2} />
            </div>
        )
    }
}

export default UpDownArrows;