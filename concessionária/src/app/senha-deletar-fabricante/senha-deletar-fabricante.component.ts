import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senha-deletar-fabricante',
  templateUrl: './senha-deletar-fabricante.component.html',
  styleUrls: ['./senha-deletar-fabricante.component.css']
})
export class SenhaDeletarFabricanteComponent{

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