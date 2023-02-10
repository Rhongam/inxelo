import axios from 'axios';

const apiUrl = "https://inxelo-interview-project-default-rtdb.europe-west1.firebasedatabase.app/acd361de-30d0-4b99-8c04-f9683094b61d";

export default axios.create({
    baseURL: apiUrl,
    headers: {'Content-Type' : "application/json; charset=UTF-8"}
})