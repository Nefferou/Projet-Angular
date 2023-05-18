export class Pokeball {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public image: string
  ) {
  }

  static getPokeballs(): Pokeball[] {
    return [
      new Pokeball(1, 'Pokeball', 100, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'),
      new Pokeball(2, 'Great Ball', 200, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png'),
      new Pokeball(3, 'Ultra Ball', 300, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png'),
      new Pokeball(4, 'Master Ball', 500, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png')
    ];
  }
}
