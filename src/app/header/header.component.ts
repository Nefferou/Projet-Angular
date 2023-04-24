import { Component, Input } from '@angular/core';

@Component({
  selector: 'headerComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  value = 0;
  searchText = '';

  user = {
    username: 'John',
    Cryptokemons: 10
  };

  changeSearch(value: string) {
    this.searchText = value;
  }
}
