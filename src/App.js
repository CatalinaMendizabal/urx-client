import React from 'react';
import './App.css';
import CrossArrows from "./components/CrossArrows";
import UpDownArrows from "./components/UpDownArrows";
import {moveDown, moveLeft, moveRight, moveUp, rotateLeft, rotateRight} from "./service/apis";

function App() {

    return (
        <div className="App">
            <div className={"button-container"}>
                <UpDownArrows direction={"up-down"} moveUp={moveUp} moveDown={moveDown} />
                <CrossArrows moveUp={moveUp} moveDown={moveDown} moveRight={moveRight} moveLeft={moveLeft} />
            </div>
            <div className={"button-container"}>
                <UpDownArrows direction={"rotate"} rotateRight={rotateRight} rotateLeft={rotateLeft} />
                <CrossArrows moveUp={moveUp} moveDown={moveDown} moveRight={moveRight} moveLeft={moveLeft} />
            </div>
        </div>
    );
}

export default App;
