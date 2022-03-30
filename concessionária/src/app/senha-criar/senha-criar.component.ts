import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senha-criar',
  templateUrl: './senha-criar.component.html',
  styleUrls: ['./senha-criar.component.css']
})
export class SenhaCriarComponent{

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
