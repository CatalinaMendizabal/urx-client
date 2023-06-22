import React, {useEffect, useState} from 'react';
import './App.css';
import CrossArrows from "./components/CrossArrows";
import UpDownArrows from "./components/UpDownArrows";
import {
    checkHealth,
    getCurrentPose, move,
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    rotateLeft,
    rotateRight
} from "./service/apis";
import MiddleContent from "./components/MiddleContent";
import {directions} from "./service/enums";

function App() {

    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        getCurrentPose().then((response) => {
            setCoordinates(response.data.current_pose)
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const moveUR5e = async (direction) => {
        const body = {
            direction: direction,
            distance: 0.05
            /*
             "acceleration": 0.0,
             "velocity": 0.0
             */
        }

        await move(body).then((response) => {
            console.log(response);
            setCoordinates(response.data.status)
        }).catch((error) => {
            console.log(error);
        })
    }

    const rotateUR5e = async (direction, positive) => {
        const distance_p = 0.05;
        const distance_n = -0.05;

        const body = {
            direction: direction,
            distance: positive ? distance_p : distance_n
            /*
             "acceleration": 0.0,
             "velocity": 0.0
             */
        }

        await move(body).then((response) => {
            console.log(response);
            setCoordinates(response.data.status)
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="App">
            <div className={"button-container"}>
                {/*<h1>TCP Position</h1>*/}
                <UpDownArrows direction={"up-down"} n1={"Z+"} n2={"Z-"}
                              moveUp={() => moveUR5e(directions.UP)}
                              moveDown={() => moveUR5e(directions.DOWN)}/>
                <CrossArrows n1={"X+"} n2={"Y-"} n3={"Y+"} n4={"X-"}
                             moveUp={() => moveUR5e(directions.FORWARD)}
                             moveDown={() => moveUR5e(directions.BACKWARD)}
                             moveRight={() => moveUR5e(directions.RIGHT)}
                             moveLeft={() => moveUR5e(directions.LEFT)}
                />
            </div>
            <MiddleContent coordinates={coordinates}/>
            <div className={"button-container"}>
                {/*<h1>TCP Orientation</h1>*/}
                <UpDownArrows direction={"rotate"} n1={"RZ+"} n2={"RZ-"}
                              rotateRight={() => rotateUR5e(directions.YAW_P, true)}
                              rotateLeft={() => rotateUR5e(directions.YAW_N, false)}
                />
                <CrossArrows n1={"RY-"} n2={"RX+"} n3={"RX-"} n4={"RY+"}
                             moveUp={() => rotateUR5e(directions.PITCH_N, false)}
                             moveDown={() => rotateUR5e(directions.PITCH_P, true)}
                             moveRight={() => rotateUR5e(directions.ROLL_P, true)}
                             moveLeft={() => rotateUR5e(directions.ROLL_N, false)}
                />
            </div>
        </div>
    );
}

export default App;
