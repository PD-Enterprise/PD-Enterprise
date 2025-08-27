import apiConfig from "$lib/utils/apiConfig";
import type { Post } from "../types";
import type { PageLoad } from "./$types";


export const load: PageLoad = async ({ params }) => {
    const response = await fetch(`${apiConfig.apiUrl}pd-enterprise/blog/posts`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    console.log(result);

    if (result.status === 200) {
        return {
            status: result.status,
            message: "Posts fetched successfully",
            data: result.data.sort(
                (a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            ),
            error: ""
        }
    } else {
        return {
            status: result.status,
            error: "",
            message: "Something went wrong",
            data: null
        }
    }
}