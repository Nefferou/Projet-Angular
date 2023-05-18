import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../Models/pokemon.model';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {
  token!: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token');
      console.log('Token JWT:', this.token);

      // Ajout du token dans le localStorage
      if (this.token) {
        localStorage.setItem('token', this.token);
        if(localStorage.getItem('cart') == null){
          localStorage.setItem('cart',JSON.stringify(new Map<Pokemon, number>()))
        }
      }
    });
  }
}
