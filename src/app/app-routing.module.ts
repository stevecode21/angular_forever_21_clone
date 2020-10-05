import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaquetasComponent } from './components/chaquetas/chaquetas.component'
import { ContentComponent } from './components/content/content.component'
import { BotaComponent } from './components/botas/botas.component'


const routes: Routes = [
  { path: 'home', component: ContentComponent },
  { path: 'chaquetas', component: ChaquetasComponent },
  { path: 'botas', component: BotaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [ContentComponent, ChaquetasComponent, BotaComponent]