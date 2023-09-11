import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent {

  @Input() data: any;

  pokeCompare: any = [];
  

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.pokeCompare = [...this.pokeCompare, this.data]
    console.log(this.pokeCompare);
  }


}
