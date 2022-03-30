import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senha-deletar',
  templateUrl: './senha-deletar.component.html',
  styleUrls: ['./senha-deletar.component.css']
})
export class SenhaDeletarComponent{

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
