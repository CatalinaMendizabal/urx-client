import ArrowButton from "../ArrowButton";

const UpDownArrows = ({ moveUp, moveDown, rotateRight, rotateLeft, direction }) => {

    if (direction === "up-down") {
        return (
            <div className="up-down-arrows">
                <ArrowButton direction={"up"} onClick={moveUp}/>
                <ArrowButton direction={"down"} onClick={moveDown}/>
            </div>
        )
    } else {
        return (
            <div className="up-down-arrows">
                <ArrowButton direction={"rotate-left"} onClick={rotateLeft}/>
                <ArrowButton direction={"rotate-right"} onClick={rotateRight}/>
            </div>
        )
    }
}

export default UpDownArrows;