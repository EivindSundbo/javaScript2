import { url } from "../url.mjs";

const action = "/auth/register";

export async function register(profile){
    try{
        const registerUrl = url + action;

        const response = await fetch(registerUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        });

        console.log(registerUrl);
        const data = await response.json();
        return data;

    } catch(error){
        console.log(error)
    }

}