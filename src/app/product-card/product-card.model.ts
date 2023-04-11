export class Product {
    constructor(
        public title: string,
        public description: string,
        public imageURL: string,
        public price: number,
        public isLikes:boolean,
        public likes:number,
        public naissance: Date,
        public fav: boolean,
        public size?: string) {}
}