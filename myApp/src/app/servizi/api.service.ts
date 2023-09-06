import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  
  getPokemons(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.url}/pokemon/?offset=${offset}&limit=${limit}`);
  }

  getData(name: string) {
    return this.http.get(`${this.url}/pokemon/${name}`)
  }
}
