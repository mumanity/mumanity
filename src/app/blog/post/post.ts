export class Post {
    id: number;
    title: string;
    content: string;
    img: string;
    createdDate: Date;
    comments?: Array<Comment>;
}