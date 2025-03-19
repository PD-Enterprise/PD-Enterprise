type Post = {
    post_id: number;
    title: string;
    slug: string;
    content: string;
    authorId: string;
    createdAt: string;
    image?: string; // Added image property to the Post type
}

type User = {
    id: string;
    name: string;
    email: string;
    role?: string; // Added role property to the User type
}




export type { Post };
