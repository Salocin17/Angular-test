import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent {

  @Input() data: any;
  @Output() closeCompare = new EventEmitter<boolean>();

  pokeCompare: any[] = [];
  pokeCompareStart: boolean = false;
  

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.pokeCompare = [...this.pokeCompare, this.data]
  }

  removeCompare(e: number) {
    this.pokeCompare.splice(e, 1)
  }

  compareStart() {
    this.pokeCompareStart = true;
  }

  compareEnd () {
    this.pokeCompareStart = false;
    this.closeCompare.emit(false)
    this.pokeCompare = []
  }

}
