import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../Service/pokemon.service';
import { SortByPipe } from '../sort-by.pipe';
import { UserService } from '../Service/user.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../Models/pokemon.model';

@Component({
  selector: 'headerComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: string | null = null;
  value = 0;
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.token = params.get('token');

      if (this.token) {
        localStorage.setItem('token', this.token);
        if (localStorage.getItem('cart') === null) {
          localStorage.setItem('cart', JSON.stringify(new Map<Pokemon, number>()));
        }
      }

      this.getUserInfo();
    });
  }

  reset() {
    localStorage.setItem('User', 'null');
    console.log(localStorage.getItem('User')!);
  }

  getUserInfo() {
    const token = localStorage.getItem('token');
    if (token) {
      this.userService.getUser(token)
        .then(
          (data: any) => {
            console.log(data);
            this.user = data[0];
            localStorage.setItem('User', JSON.stringify(data));
            console.log('Informations de l\'utilisateur :', this.user);
            console.log('local storage :', localStorage.getItem('User'));
          },
          (error: any) => {
            console.error('Failed to get user:', error);
          }
        );
    }
  }
}
