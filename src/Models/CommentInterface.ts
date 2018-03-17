import UserInterface from '@/Models/UserInterface';

export default interface CommentInterface {
    id?: number;
    content: string;
    created_at?: string;
    updated_at?: string;
    user_id?: number;
    post_id?: number;
    user?: UserInterface;
}
