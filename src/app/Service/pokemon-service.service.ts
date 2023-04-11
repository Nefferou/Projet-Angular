import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../Models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokebuildapi.fr/api/v1/pokemon';
  private pokemons = this.getAllPokemon();

  constructor(private http: HttpClient) {}

  getAllPokemon(): Pokemon[] {
    let tab = Array();
    this.http.get<Pokemon[]>(this.baseUrl).forEach((ps : Pokemon =>{
      tab.push(ps);
    })
    );
    return tab;
  }

  getPokemonById(id: number): Observable<Pokemon> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pokemon>(url);
  }

  searchPokemon(query: string): Observable<Pokemon[]> {
    const url = `${this.baseUrl}/search?q=${query}`;
    return this.http.get<Pokemon[]>(url);
  }


  onAddLike(pokemon: Pokemon): void {
    if(pokemon.isLikes){
      pokemon.isLikes = false;
      pokemon.likes--;
    }
    else{
      pokemon.isLikes = true;
      pokemon.likes++;
    }
  }

  onAddFav(pokemon: Pokemon): void {
    if(pokemon.fav){
      pokemon.fav = false;
    }
    else{
      pokemon.fav = true;
    }
  }
}
