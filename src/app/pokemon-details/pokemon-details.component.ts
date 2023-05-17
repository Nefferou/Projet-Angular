import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../Models/pokemon.model';
import { PokemonService } from '../Service/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent{
  pokemon!: Pokemon;
  id!:number

  constructor(private pokemonService: PokemonService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params =>{
      this.id = parseInt(params['id']);
    });
    this.pokemonService.getPokemonById(this.id).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
    console.log(this.pokemon)
  }

  ChangedId(id: number): void {
    this.id = id;
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate([`/pokemon/${id}`]));
  }
}
