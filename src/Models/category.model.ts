import CategoryInterface from '@/Models/CategoryInterface';

export default class CategoryModel implements CategoryInterface {

    public id: number;
    public title: string = '';

    constructor(title: string, id: number) {
        this.title = title;
        this.id = id;
    }
}
