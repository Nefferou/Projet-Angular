import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../Models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokebuildapi.fr/api/v1/pokemon/limit/20';

  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseUrl);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pokemon>(url);
  }

  searchPokemon(query: string): Observable<Pokemon[]> {
    const url = `${this.baseUrl}/search?q=${query}`;
    return this.http.get<Pokemon[]>(url);
  }
}
