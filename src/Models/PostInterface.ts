
import CategoryInterface from '@/Models/CategoryInterface';

export default interface PostInterface {

    id?: number;
    title: string;
    content: string;
    created_at?: string;
    updated_at?: string;
    category_id: number;
    category?: CategoryInterface;

}
