export class Pokemon {
    constructor(
        public id: number,
        public name: string,
        public imageURL: string,
        public stats: { 
            HP: number,
            Att: number,
            Def: number,
            AttSpe: number,
            DefSpe: number,
            Vit: number,
        },
        public types: {
            first: string,
            second?: string,
        },
        public likes:number,
        public price?: number,
        public isLikes?:boolean,
        public fav?: boolean) {}
}