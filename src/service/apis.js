import axios from "axios"

const api = axios.create({
    baseURL: "http://127.0.0.1:5000",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
});

export const checkHealth = async () => {
    const url = '/health'

    return await api.get(url)
}

export const checkHealthConnection = async () => {
    const url = '/ur5e/health-connection'

    return await api.get(url)
}

export const getConfig = async () => {
    const url = '/ur5e/config'

    return await api.get(url)
}

export const setConfig = async (body) => {
    const url = '/ur5e/config'

    return await api.post(url, body)
}

export const getCurrentPose = async () => {
    const url = '/ur5e/current-pose'

    return await api.get(url)
}

export const getCurrentJointPose = async () => {
    const url = '/ur5e/current-joint-pose'

    return await api.get(url)
}

export const partialGripper = async (amount) => {
    const url = '/ur5e/gripper/partial'

    return await api.post(url, {amount: amount})
}

export const openGripper = async () => {
    const url = '/ur5e/gripper/open'

    return await api.post(url)
}

export const closeGripper = async () => {
    const url = '/ur5e/gripper/close'

    return await api.post(url)
}

export const movej = async (body) => {
    const url = '/ur5e/movej'

    return await api.post(url, body)
}

export const movel = async (body) => {
    const url = '/ur5e/movel'

    return await api.post(url, body)
}

export const movels = async (body) => {
    const url = '/ur5e/movels'

    return await api.post(url, body)
}

export const move = async (body) => {
    const url = '/ur5e/move'

    return await api.post(url, body)
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
