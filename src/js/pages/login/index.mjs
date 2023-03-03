import { login } from "../../api/login.mjs";

export function sendLoginForm(){
    const form = document.querySelector("#loginForm");

    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());

            login(profile)

            alert("You are now logged in");
            // window.location.replace("/profile/login/")
        })
    }
}