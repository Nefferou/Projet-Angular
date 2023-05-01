import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ClickerComponent } from './clicker/clicker.component';
import { MarchandComponent } from './marchand/marchand.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'boutique', pathMatch: 'full' },
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'clicker', component: ClickerComponent },
  { path: 'marchand', component: MarchandComponent },
  { path: 'pokemon/:id', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
