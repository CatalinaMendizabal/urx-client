const MiddleContent = ({coordinates}) => {

    const positions = ["X", "Y", "Z", "RX", "RY", "RZ"];


    return (
        <div className="middle-content">
            <h1>UR5e ubicación actual</h1>
            <h2>Coordenadas: </h2>
            <div className={"coordinates-container"}>
                {coordinates.map((coordinate, index) => {
                    return (
                        <div key={index} className={"coordinates-elements"}>
                            <span className={"position-name"}>{positions[index]}: </span>
                            <span>{coordinate}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MiddleContent;