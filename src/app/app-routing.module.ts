import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { MarchandComponent } from './marchand/marchand.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: 'boutique/:token', component: BoutiqueComponent },
  { path: 'marchand', component: MarchandComponent },
  { path: 'pokemon/:id', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
