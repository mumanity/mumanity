export class Post {
    id: number;
    title: string;
    content: string;
    img: string;
    date: string;
    comments?: Array<Comment>;
}