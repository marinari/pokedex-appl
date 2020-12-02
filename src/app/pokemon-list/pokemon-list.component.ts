import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonsArray: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPokemonList().subscribe((response: any) => {
      response.results.forEach(pokemon => {
        this.dataService.getPokemon(pokemon.name).subscribe((pmResponse: any) =>{
          this.pokemonsArray.push(pmResponse);
          console.log(this.pokemonsArray);
        });
      });
    });
  }

}
