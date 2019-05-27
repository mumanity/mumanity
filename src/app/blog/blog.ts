export class Blog {
    id: number;
    name: string;
    content: string;
    img: string;
    date: Date;
    comments?: Array<Comment>;
}