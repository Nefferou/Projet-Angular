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
  order: string ='dateAsc';

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
  changeOrder(e: any) {
    if (e.target.value === 'idAsc') {
      this.order = 'idAsc';
    } else if (e.target.value === 'idDesc') {
      this.order = 'idDesc';
    } else if (e.target.value === 'nameAsc') {
      this.order = 'nameAsc';
    } else if (e.target.value === 'nameDesc') {
      this.order = 'nameDesc';
    }
  }
}
