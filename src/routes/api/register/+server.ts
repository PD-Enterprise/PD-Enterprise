import { json, type RequestHandler } from "@sveltejs/kit"
import { sql } from "../../../db.server";
import stringHash from "string-hash";
import * as cookie from "cookie";
import { v4 as uuidv4 } from 'uuid';

//@ts-ignore
export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json();

    try {
        const userExists = await checkUserExists(body.email);
        return userExists
            ? returnJson("error", "User already exists.", userExists)
            : await registerUser(body);
    } catch (error) {
        return returnJson("error", "Something went wrong.", error);
    }
}
function returnJson(status: string, message: string, response: any, headers?: any) {
    return json({ status: status, message: message, response: response }, { headers: headers });
}

async function checkUserExists(email: string) {
    const checkUser = await sql`select * from users where email = ${email}`;
    if (checkUser[0]) {
        return true;
    } else {
        return false;
    }
}

async function registerUser(body: any) {
    const cookieID = uuidv4();
    const headers = {
        "Set-cookie": cookie.serialize("Session_id", cookieID, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 30
        })
    }

    const response = await sql`insert into users (name, email, user_password, session_id, membership)
    values (${body.username}, ${body.email}, ${stringHash(body.password)}, ${cookieID}, ${"tier-1"})`;
    return returnJson("success", "New user created.", response, headers);
}