import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { DetailsComponent } from '../details/details.component';

const routes: Routes = [
  { path: 'pokemon-list', component: PokemonListComponent},
  { path: 'details', component: DetailsComponent }   
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
