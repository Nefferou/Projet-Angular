export class Pokemon {
    constructor(
        public id: number,
        public name: string,
        public image: string,
        public sprite: string,
        public stats: {
            HP: number,
            attack: number,
            defense: number,
            special_attack: number,
            special_defense: number,
            speed: number,
        },
        public apiTypes: [{
            image: string,
            name: string,
        },
        {
          image?: string,
          name?: string,
      }
    ],
        public likes:number,
        public price?: number,
        public isLikes?:boolean,
        public fav?: boolean) {}


        public getApiTypes(){
          return this.apiTypes;
        }

}
