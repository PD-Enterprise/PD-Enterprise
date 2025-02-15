import {loggedIn} from "$lib/stores/loggedIn";
import config from '$lib/utils/apiConfig';

export async function renewSession(cookieValue: string) {
    const response = await fetch(`${config.apiUrl}users/renew_session`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sessionId: cookieValue
        })
    }) 
    const result = await response.json();
    if (result.status == 200) {
        const cookie = result.headers['Set-cookie'].split(';')[0];
		document.cookie = cookie;
        loggedIn.set(true);
        sessionStorage.setItem("LoggedIn", true);
        sessionStorage.setItem("Email", result.data.email);
    } else {
        loggedIn.set(false);
    }
}