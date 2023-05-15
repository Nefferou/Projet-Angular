import { Component } from '@angular/core';
import { PokemonService } from '../Service/pokemon.service';
import { SortByPipe } from '../sort-by.pipe';
import { UserService } from '../Service/user.service';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'headerComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
[x: string]: any;
  value=0;
  user: any;

  constructor(private pokemonService: PokemonService, private sortByPipe: SortByPipe, private userService: UserService) {
    this.getUserInfo();
  }

  getUserInfo(): void {
    const token = localStorage.getItem("token");
    if (token) {
      this.userService.getUser(token).subscribe(
        data => {
          this.user = data[0];
          localStorage.setItem("User", JSON.stringify(data));
          console.log("Informations de l'utilisateur :", this.user);
          console.log("local storage :", localStorage.getItem("User"))
        },
        error => {
          console.log("Erreur lors de la récupération des informations de l'utilisateur :", error);
        }
      );
    }
  }

  cartOptions():void{

  }
}
