import axios from "axios"

const api = axios.create({
    baseURL: "http://127.0.0.1:8080",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export const checkHealth = async () => {
    const url = `/health`

    return await api.get(url)
}

export const moveUp = () => {
    console.log("move up");
}

export const moveDown = () => {
    console.log("move down");
}

export const moveLeft = () => {
    console.log("move left");
}

export const moveRight = () => {
    console.log("move right");
}

export const rotateRight = () => {
    console.log("move up");
}

export const rotateLeft = () => {
    console.log("move up");
}
