import { url } from "../url.mjs";
import * as storage from "../storage.mjs";

const action = "/auth/login";

export async function login(profile){
    try{
        const loginUrl = url + action;

        const response = await fetch(loginUrl, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(profile)
        });

        // const data = await response.json();
        // return data;

        const {accessToken, ...user} = await response.json();
        storage.save("token", accessToken);
        storage.save("profile", user);

    } catch(error){
        console.log(error);
    }
};