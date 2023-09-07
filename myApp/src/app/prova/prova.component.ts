import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../servizi/api.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {
  pokemons: any[] = [];
  pokeInfo: any = [];
  infoActive = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPokemons(0, 50).subscribe((response: any) => response.results.forEach((element: { name: string; }) => {
      this.apiService.getData(element.name).subscribe((response: any) => {
        this.pokemons.push(response);
      })
    }))
    
  }

  getPokemonData(){
    
  }

  getColor(type: string){
    switch (type) {
      case 'grass': return 'grass';
      case 'fire': return 'fire';
      case 'normal': return 'normal';
      case 'water': return 'water';
      case 'poison': return 'poison';
      case 'ground': return 'ground';
      case 'bug': return 'bug';
      case 'electric': return 'electric';
      case 'fairy': return 'fairy';
      case 'fighting': return 'fighting';
      case 'psychic': return 'psychic';
      case 'rock': return 'rock';
      case 'ghost': return 'ghost';
      default: return 'white'
    }
  }

  getMore(e: number){
    this.apiService.getPokemons(this.pokemons.length, e).subscribe((response: any) => response.results.forEach((element: { name: string; }) => {
      this.apiService.getData(element.name).subscribe((response: any) => {
        this.pokemons.push(response);
      })
    }))
  }

  getInfo (name: any) {
    this.apiService.getData(name).subscribe((response: any) => {
      this.pokeInfo.push(response);
      this.infoActive = !this.infoActive;
    })
  }


}

