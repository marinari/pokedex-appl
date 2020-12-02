import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPokemonList(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=15`);
  }
  //Method to Get Pokemons from API
  getPokemon(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

}
