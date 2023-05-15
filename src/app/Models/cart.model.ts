import { Pokeball } from "./pokeball.model";
import { Pokemon } from "./pokemon.model";

export class Cart {
  constructor(
    public pokemon: Pokemon,
    public pokeball: Pokeball,
    public quantity: number
  ) {}
}
