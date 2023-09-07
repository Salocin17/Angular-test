import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  @Input() data: any;
  pokeInfo: any = [];
  

  ngOnInit(): void {
    
    console.log(this.data);
    this.pokeInfo.push(this.data)
  }

  getColor(e: number) {
    console.log(e);
  }
}
