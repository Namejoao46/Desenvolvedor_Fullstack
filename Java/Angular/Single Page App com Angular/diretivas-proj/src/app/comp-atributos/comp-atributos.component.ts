import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: '/src/app/comp-atributos/comp-atributos.component.html',
  styleUrls: ['/src/app/comp-atributos/comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo:string="disable"
  corFundo:string ="blue"
  corDafonte:string = "yellow"
  item:string =""
  lista:string[] = []
  isEnableBlock:boolean = false

  constructor() { }

  adicionarLista() {
    if (this.item.trim()) {
      this.lista.push(this.item);
      this.item = "";
    }
  }

  ngOnInit(): void {
  }

  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }

}