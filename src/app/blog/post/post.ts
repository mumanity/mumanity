export class Post {
    id: number;
    title: string;
    content: string;
    img: string;
    date: Date;
    comments?: Array<Comment>;
}