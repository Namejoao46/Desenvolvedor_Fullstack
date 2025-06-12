import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  produtos:string[] = []

  constructor(){
    this.produtos = [
      "mouse",
      "cabo",
      "teclado",
      "font"
    ]
  }

  ngOnInit(): void{

  }


  adicionar() {
    this.produtos.push("Joao")
  }
}
