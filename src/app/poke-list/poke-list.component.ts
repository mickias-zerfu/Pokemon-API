import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { PokemanService, Pokemon } from '../pokeman.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css', '../shared/btn.css']
})
export class PokeListComponent implements OnInit {

  constructor(
    private backeEndService: PokemanService, private favoritesService: FavoritesService) { }

  limit: number = 20;
  offset: number = 0;
  getAvailableTypes: any[] = []
  filterType: string | null = null;
  sortOrder: 'asc' | 'desc' = 'asc';
  @Input() pokemanList: any[] = []

  updatedName: string = '';
  onlyFavorites: boolean = false;

  favs: any[] = [11, 12, 14];
  favoritesList: Pokemon[] = [];

  getFavIds(): number[] {
    return this.favs;
  }
  ngOnInit() {
    this.favoritesList = this.favoritesService.getFavorites();
    this.getPokeMonTypes();
  }
  getPokermans(offset: number, limit: number) {
    this.backeEndService.getPokemonList(offset, limit).subscribe((pokemonList) => {
      this.pokemanList = pokemonList;
    });
  }
  getPokeMonTypes() {
    this.backeEndService.getPokemonTypes().subscribe((types) => {
      this.getAvailableTypes = types.results.map((type: any) => type.name);
    });
  }
  onfavClicked() {
    this.onlyFavorites = true
  }
  onAllClicked() {
    this.onlyFavorites = false;
    this.onNextClicked()
  }
  toggleUpdateMode(pokemon: Pokemon) {
    pokemon.editMode = !pokemon.editMode;
  }
  updateName(pokemon: Pokemon) {
    this.favoritesService.updateFavoriteName(pokemon.id, pokemon.name);
    pokemon.editMode = false;
  }

  likedIcon(isliked: boolean, pokemon: Pokemon) {
    if (isliked)
      return this.favoritesList.includes(pokemon);
    else {
      return !this.favoritesList.includes(pokemon);
    }
  }

  unLiked(pokemon: Pokemon) {
    this.favoritesService.removeFavorite(pokemon);
    // this.favs = this.favs.filter(pokeId => pokeId !== id);
  }

  liked(pokemon: Pokemon) {
    this.favoritesService.addFavorite(pokemon);
  }

  applyFiltersAndSort() {
    this.pokemanList = this.pokemanList.filter((pokemon) => {
      if (this.filterType) {

        return pokemon.type.includes(this.filterType);
      } else {
        return true; // No filter applied
      }
    });

    this.sortList();
  }

  sortList() {
    this.pokemanList.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }
  onNextClicked() {
    this.offset = this.offset + 30; this.limit = 20
    this.getPokermans(this.offset, this.limit)
  }
  onPrevClicked() {
    this.offset = this.offset - 30; this.limit = 20
    if (this.offset <= 0) {
      this.offset = 0;
    }
    this.getPokermans(this.offset, this.limit)
  }
}
