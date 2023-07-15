import { Component, OnInit } from '@angular/core';
import { PokemanService } from '../pokeman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  limit: number = 20;
  offset: number = 0;
  pokemanListObject: any[] = [];
  isPetReturned: boolean = false;
  constructor(
    private backeEndService: PokemanService,
  ) { }
  ngOnInit(): void {
    this.getPokemonList(this.offset, this.limit)
  }
  getPokemonList(offset: number, limit: number) {
    this.backeEndService.getPokemonList(this.offset, this.limit).subscribe((pokemonList) => {
      this.pokemanListObject = pokemonList;
      this.isPetReturned = true;
    });
  }

  // "next": "https://pokeapi.co/api/v2/pokemon/?offset=30&limit=20",
  // "previous": "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10",


}
