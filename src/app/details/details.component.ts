import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // const newPokemonDetails = <Content>({
  //   name: 
  // });

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPokemon("mew").subscribe((pmResponse: any) =>{
      console.log(pmResponse);
    });
  }

}
