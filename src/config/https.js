import axios from "axios";

const ISSERVER = typeof window === "undefined"
var lang = !ISSERVER && localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "ar"


export let https = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        'Accept-Language': lang
    },
})

