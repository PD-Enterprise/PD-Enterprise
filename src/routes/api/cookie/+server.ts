import { json } from '@sveltejs/kit';

export async function GET({ request }) {
    try {
        const cookies = request.headers.get('cookie');

        const parsedCookies = Object.fromEntries(cookies.split('; ').map(cookie => {
            const [name, value] = cookie.split('=');
            return [name, decodeURIComponent(value)];
        }));

        const cookieValue = parsedCookies.Session_id; // Replace with your actual cookie name

        if (cookieValue) {
            return json({ cookieValue });
        } else {
            return json({ message: 'Cookie not found' }, { status: 404 });
        }
    } catch (error) {
        return json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
