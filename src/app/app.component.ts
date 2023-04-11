import { Component, OnInit } from '@angular/core';
import { PokemonService } from './Service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search: String = '';
  order: String = '';
  title: String = '';

  constructor(private pokemons: PokemonService) { }

  changeOrder(e: any) {
    if (e.target.value === 'dateAsc') {
      this.order = 'dateAsc';
    } else if (e.target.value === 'dateDesc') {
      this.order = 'dateDesc';
    } else if (e.target.value === 'nameAsc') {
      this.order = 'nameAsc';
    } else if (e.target.value === 'nameDesc') {
      this.order = 'nameDesc';
    }
    console.log(this.order);
  }
}
