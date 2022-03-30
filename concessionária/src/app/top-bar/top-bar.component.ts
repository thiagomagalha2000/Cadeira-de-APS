import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  animations:[]
})

export class TopBarComponent implements OnInit {

  carros: Carro[];

  constructor() {}

  ngOnInit() {}

  trocarAltoContraste(){
    document.getElementById("alto-contraste").classList.toggle('alto-contraste');;
  }

  mudarFonte(number: Number){
    var body = document.getElementsByTagName("body")[0];

    var valorAtribuidoDaFonte = parseInt(window.getComputedStyle(body, null).getPropertyValue("font-size"));

    if(number==1 && valorAtribuidoDaFonte<22){
      document.getElementsByTagName("body")[0].style.fontSize = (valorAtribuidoDaFonte + 2) + "px";
    }
    if(number==0){
      document.getElementsByTagName("body")[0].style.fontSize = 16 + "px";
    }
    if(number==-1 && valorAtribuidoDaFonte>10){
      document.getElementsByTagName("body")[0].style.fontSize = (valorAtribuidoDaFonte - 2) + "px";
    }
  }
}