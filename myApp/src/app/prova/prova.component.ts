import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servizi/api.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPokemons(0, 50).subscribe((response: any) => response.results.forEach((element: { name: string; }) => {
      this.apiService.getData(element.name).subscribe((response: any) => {
        this.pokemons.push(response);
        console.log(this.pokemons);
      })
    }))
  }

  getPokemonData(){
    
  }

  getColor(type: string){
    switch (type) {
      case 'grass': return '#51a158';
      case 'fire': return '#f43636';
      case 'normal': return 'lightgray';
      case 'water': return 'lightblue';
      case 'poison': return '#c869d9';
      case 'ground': return '#e3ccad';
      case 'bug': return '#bce471';
      case 'electric': return '#7385ec';
      case 'fairy': return '#f0a4c8';
      case 'fighting': return '#f8734f';
      case 'psychic': return '#f6f154';
      case 'rock': return '#828282';
      case 'ghost': return '#655469';
      default: return 'white'
    }
  }

  onClick(e: number){
    this.apiService.getPokemons(this.pokemons.length, e).subscribe((response: any) => response.results.forEach((element: { name: string; }) => {
      this.apiService.getData(element.name).subscribe((response: any) => {
        this.pokemons.push(response);
        console.log(this.pokemons);
      })
    }))
    
  }

}

