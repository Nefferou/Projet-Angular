import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from './pokemon-card.model';
import { PokemonService } from '../Service/pokemon-service.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit{
  // @Input() myPokemon!: Pokemon;
  
  myPokemon: Pokemon | any;
  selectedPrice: number = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
      this.myPokemon = this.pokemonService.getOne();
  }
}
