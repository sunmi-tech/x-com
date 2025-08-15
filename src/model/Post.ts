import { User } from "./User";
import { PostImage } from "./PostImage";

export interface Post {
    User: User;
    postId: number;
    content: string;
    createdAt: Date;
    Images: PostImage[];
}