import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../Models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokebuildapi.fr/api/v1/pokemon';

  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<Pokemon[]> {
    const url = `${this.baseUrl}/limit/100`
    return this.http.get<Pokemon[]>(url);
  }

  getPokemonById(id: number | any): Observable<Pokemon> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pokemon>(url);
  }

  searchPokemon(query: string): Observable<Pokemon[]> {
    const url = `${this.baseUrl}/search?q=${query}`;
    return this.http.get<Pokemon[]>(url);
  }
}
