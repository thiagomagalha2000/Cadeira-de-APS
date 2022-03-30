import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senha-atualizar',
  templateUrl: './senha-atualizar.component.html',
  styleUrls: ['./senha-atualizar.component.css']
})
export class SenhaAtualizarComponent{

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