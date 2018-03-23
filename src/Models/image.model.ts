import ImageInterface from '@/Models/ImageInterface';

export default class ImageModel implements ImageInterface {

    // public id: number;
    public title: string;

    public constructor(title: string) {
        this.title = title;
        // this.id = id;
        //  this.updated_at = new Date().toLocaleString();
    }

}
