import { Component} from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';
import { PokemonService } from '../Service/pokemon.service';
import { Observable, map} from 'rxjs';
import { SortByPipe } from '../sort-by.pipe';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent {
  pokemonList!: Observable<Pokemon[]>;
  myControl = new FormControl();
  searchTerm: string = '';
  order: string = "";

  constructor(private pokemonService: PokemonService) {
    this.pokemonList = pokemonService.getAllPokemon();
  }

  changeOrder(event: Event) {
    console.log("changed");
    this.order = (event.target as HTMLSelectElement).value;
  }


  getPokemons(): Observable<Pokemon[]> {
    return this.pokemonList.pipe(
      map(pokemonArray => new SortByPipe().transform(pokemonArray, this.order, this.searchTerm))
    );
  }

}
