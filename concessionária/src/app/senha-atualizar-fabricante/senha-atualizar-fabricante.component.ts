import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senha-atualizar-fabricante',
  templateUrl: './senha-atualizar-fabricante.component.html',
  styleUrls: ['./senha-atualizar-fabricante.component.css']
})
export class SenhaAtualizarFabricanteComponent{

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