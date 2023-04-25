import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ClickerComponent } from './clicker/clicker.component';
import { MarchandComponent } from './marchand/marchand.component';

const routes: Routes = [
  { path: '', redirectTo: 'boutique', pathMatch: 'full' },
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'clicker', component: ClickerComponent },
  { path: 'marchand', component: MarchandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
