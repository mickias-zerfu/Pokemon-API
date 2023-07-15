import { Injectable } from '@angular/core';
import { Pokemon } from './pokeman.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: Pokemon[] = [ ];

  getFavorites(): Pokemon[] {
    return this.favorites;
  }

  addFavorite(pokemon: Pokemon) {
    this.favorites.push(pokemon);
  }

  removeFavorite(pokemon: Pokemon) {
    const index = this.favorites.findIndex((fav) => fav.id === pokemon.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }

  updateFavoriteName(id: number, newName: string) {
    const pokemon = this.favorites.find((fav) => fav.id === id);
    if (pokemon) {
      pokemon.name = newName;
    }
  }
  // getAvailableTypes(){
  //   getPokemonTypes
  // }
}
