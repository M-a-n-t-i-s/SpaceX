import axios from "axios";


const instance = axios.create({
    baseURL:'https://api.spacexdata.com/',
});

export const infoAPI= {

    getAll() {
        return instance.get(`v5/launches`).then(res => res.data)
    }
}