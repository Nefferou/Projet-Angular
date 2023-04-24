import { Component } from '@angular/core';
import { PokemonService } from '../Service/pokemon.service';
import { Router } from '@angular/router';
import { Pokemon } from '../Models/pokemon.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm = '';
  searchResults: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  search(e:any) {
    this.searchTerm = e.target.value;
    (this.searchTerm)?
    this.pokemonService.getAllPokemon().subscribe((Pokemons: Pokemon[]) => {
      this.searchResults = Pokemons.filter((pokemon: Pokemon) => {
        return pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }):
    this.searchResults = [];
    console.log(this.searchResults);
  }
}
