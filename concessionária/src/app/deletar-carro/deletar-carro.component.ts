import { Component, OnInit } from '@angular/core';
import { CarroServiceSetadoDoJava } from '../carro.serviceSetadoDoJava';
import { Carro } from '../carro';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-deletar-carro',
  templateUrl: './deletar-carro.component.html',
  styleUrls: ['./deletar-carro.component.css']
})
export class DeletarCarroComponent  {

  carros: Carro[];

  constructor(private CarroServiceSetadoDoJava: CarroServiceSetadoDoJava, private carrosNovos: trocandoJson){}

  ngOnInit(){
    var listaDoscarrosNovos = [];
    this.CarroServiceSetadoDoJava.buscarcarrosDoJava().subscribe((data: any[]) => {
      for (var carroDoJava of data){
        var carrosComJsonAlterado = this.carrosNovos.mudarArquivoJsonDoBackParaOFront(carroDoJava);
        listaDoscarrosNovos.push(carrosComJsonAlterado);
      }
      this.carros = listaDoscarrosNovos;
    });
  }

  pesquisarcarrosPeloNome(event: Event){
    this.carros=[];
    var filterValueNome = (event.target as HTMLInputElement).value;
    if(filterValueNome!=""){
      var listaDosPesquisados = []
      this.CarroServiceSetadoDoJava.pesquisarPeloNomeDocarroJava(filterValueNome).subscribe((data: any[]) =>{
        for (var carroDoJava of data){
          var carrosComJsonAlterado = this.carrosNovos.mudarArquivoJsonDoBackParaOFront(carroDoJava);
          listaDosPesquisados.push(carrosComJsonAlterado);
        }
        this.carros = listaDosPesquisados;
      });
    }else{
      this.ngOnInit();
    }
  }
}