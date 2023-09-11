import { Component, EventEmitter, HostListener, Input, OnInit, Output,} from '@angular/core';
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
  pokemonFiltered: any[] = [];
  searchTerm: any = '';
  filteredPokemons: any[] = [];
  selectedType: string = 'all';
  pokeCompare: any[] = [];
  compareActive = false;

  

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPokemons(0, 50).subscribe((response: any) => response.results.forEach((element: { name: string; }) => {
      this.apiService.getData(element.name).subscribe((response: any) => {
        this.pokemons.push(response);
        this.filteredPokemons = this.pokemons;
      })
    }))
    console.log(this.pokemons);
  }

  ngOnChanges() {
    console.log(this.compareActive);
  }

  getMore(e: number){
    this.apiService.getPokemons(this.pokemons.length, e).subscribe((response: any) => response.results.forEach((element: { name: string; }) => {
      this.apiService.getData(element.name).subscribe((response: any) => {
        this.pokemons.push(response);
      })
    }))
  }

  getInfo (name: any, value: string) {
    if (value === 'info') {
      this.apiService.getData(name).subscribe((response: any) => {
        if (!this.infoActive) {
            this.pokeInfo.splice(0)
            this.pokeInfo.push(response);
        } 
        this.infoActive = !this.infoActive;
      })
    } if (value === 'compare') {
      this.apiService.getData(name).subscribe((response: any) => {
        const result = [];
        result.push(response)
        this.pokeCompare = [...result];
        this.compareActive = true;
      })
    }
  }

  @HostListener('document:click', ['$event'])
    documentClick(event: MouseEvent) {
        if (this.infoActive) {
          this.infoActive = !this.infoActive;
        }
    }

  filterByType(type: string): void {
    this.selectedType = type;

    if (type === 'all') {
      this.filteredPokemons = this.pokemons;
    } else {
      this.filteredPokemons = this.pokemons.filter(pokemon =>
        pokemon.types.some((t: { type: { name: string; }; }) => t.type.name === type)
      );
    }
  }

  compareEnd (e: boolean) {
    this.compareActive = e;
  }

}

