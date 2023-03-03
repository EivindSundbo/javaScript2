import { sendRegisterForm } from "./pages/register/index.mjs";
import { sendLoginForm } from "./pages/login/index.mjs";

const path = location.pathname;


if (path === "/profile/register/") {
    sendRegisterForm()
} else if (path === "/profile/login/") {
    sendLoginForm()
}

console.log(path)