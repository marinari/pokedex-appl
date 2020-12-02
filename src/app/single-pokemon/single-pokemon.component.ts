import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.scss']
})
export class SinglePokemonComponent implements OnInit {
  // pick: number = Math.floor(Math.random() * 100) + 1;
  // pokemon: any[] = [];
  // constructor(private dataService: DataService,
  //   private _activatedRoute: ActivatedRoute,
  //   private _router: Router) { 

  //   }
    
  // ngOnInit(): void {
  //   this.dataService.getPokemonById(this.pick).subscribe((response: any) => {
  //     console.log(response);
  //     this.pokemon = response;
  //   })
  // }

}
