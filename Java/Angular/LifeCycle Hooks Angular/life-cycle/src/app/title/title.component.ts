import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges{

  @Input () nome: string = ''

  constructor(){
    console.log("Constructor")


  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ÖnChanges")
  }
  ngOnInit(): void {
    console.log("Öninit")
  }

}
