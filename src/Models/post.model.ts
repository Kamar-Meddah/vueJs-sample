import PostInterface from '@/Models/PostInterface';

export default class PostModel implements PostInterface {

    // public id: number = null;
    public title: string = '';
    public content: string = '';
    public slug: string = '';
    // public created_at: string;
    // public updated_at: string;
    public category_id: number = 1;

}
