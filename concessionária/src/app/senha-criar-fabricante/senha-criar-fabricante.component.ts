import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senha-criar-fabricante',
  templateUrl: './senha-criar-fabricante.component.html',
  styleUrls: ['./senha-criar-fabricante.component.css']
})
export class SenhaCriarFabricanteComponent {

  validandoSenha: boolean = false;

  constructor() { }

  ngOnInit() {
    this.validandoSenha = false;
  }

  validaSenha(event: Event){
    var senha = (event.target as HTMLInputElement).value;
    if(senha=='funcionario'){
      this.validandoSenha = true;
    }else{
      this.validandoSenha = false;
    }
  }
}