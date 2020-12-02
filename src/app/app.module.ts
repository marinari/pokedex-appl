import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
