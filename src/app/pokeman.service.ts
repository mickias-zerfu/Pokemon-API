
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';

export interface Pokemon {
  id:number;
  name: string;
  sprite: string;
  image: string;
  editMode:boolean;
  types:[]
}
@Injectable({
  providedIn: 'root'
})
export class PokemanService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


  constructor(private httpClinet: HttpClient) {
    // this.baseUrl = environment ;

  }

  getPokemonTypes(): Observable<any> {
    return this.httpClinet.get<any>("https://pokeapi.co/api/v2/type");
  }
  getPokemon1(offset: number, limit: number): Observable<any[]> {
    return this.httpClinet
      .get<any[]>(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .pipe(
        map((response: any) => {
          if (Array.isArray(response.results)) {
            return response.results.map((item: any, idx: number) => {
              const id: number = idx + offset + 1;

              return {
                name: item.name,
                sprite: `${this.baseSpriteUrl}${id}.png`,
                id,

              };
            });
          } else {
            return [];
          }
        })
      );
  }
  getPokemonList(offset: number, limit: number): Observable<any[]> {
    return this.httpClinet
      .get<any[]>(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .pipe(
        switchMap((response: any) => {
          if (Array.isArray(response.results)) {
            const observables = response.results.map((item: any, idx: number) => {
              const id: number = idx + offset + 1;

              return this.httpClinet.get<any>(item.url).pipe(
                map((pokemonDetails: any) => {
                  const type = pokemonDetails.types.map((typeInfo: any) => typeInfo.type.name);

                  return {
                    name: item.name,
                    sprite: `${this.baseSpriteUrl}${id}.png`,
                    id,
                    type
                  };
                })
              );
            });

            return forkJoin(observables) as Observable<any[]>;
          } else {
            return of([]);
          }
        })
      );
  }
  getSinglePokeman(id: string): Observable<any> {
    let token = localStorage.getItem('token');

    const url = `${this.baseUrl}animals/${id}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })

    return this.httpClinet.get(url, { headers: headers })
  }
}
