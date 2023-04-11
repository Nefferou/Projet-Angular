import { Component } from '@angular/core';
import { PokemonService } from '../Service/pokemon.service';
import { Pokemon } from '../Models/pokemon.model';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent {
  public pokemonList!:Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getAllPokemon().subscribe(
      (data: Pokemon[]) => {
        this.pokemonList = data;
        console.log(this.pokemonList);
      }
    );
  }

}
