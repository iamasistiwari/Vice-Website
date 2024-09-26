"use server"
import axios from "axios"


export async function getResponse() {
    const res = await axios.get("http://127.0.0.1:5000/items")
    return res.data
}

