import { Component, OnInit } from '@angular/core';
import { Fabricante } from '../carro';
import { FabricanteServiceSetadoDoJava } from '../Fabricante.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-deletar-fabricante',
  templateUrl: './deletar-fabricante.component.html',
  styleUrls: ['./deletar-fabricante.component.css']
})
export class DeletarFabricanteComponent{

  Fabricantes: Fabricante[];

  constructor(private FabricanteServiceSetadoDoJava: FabricanteServiceSetadoDoJava, private FabricantesNovos: trocandoJson){}

  ngOnInit(){
    var listaDosFabricantesNovos = [];
    this.FabricanteServiceSetadoDoJava.buscarFabricantesDoJava().subscribe((data: any[]) => {
      for (var FabricanteDoJava of data){
        var FabricantesComJsonAlterado = this.FabricantesNovos.mudarArquivoJsonDoBackParaOFront(FabricanteDoJava);
        listaDosFabricantesNovos.push(FabricantesComJsonAlterado);
      }
      this.Fabricantes = listaDosFabricantesNovos;
    });
  }

  pesquisarFabricantesPeloNome(event: Event){
    this.Fabricantes=[];
    var filterValueNome = (event.target as HTMLInputElement).value;
    if(filterValueNome!=""){
      var listaDosPesquisados = []
      this.FabricanteServiceSetadoDoJava.pesquisarPeloNomeDoFabricanteJava(filterValueNome).subscribe((data: any[]) =>{
        for (var FabricanteDoJava of data){
          var FabricantesComJsonAlterado = this.FabricantesNovos.mudarArquivoJsonDoBackParaOFront(FabricanteDoJava);
          listaDosPesquisados.push(FabricantesComJsonAlterado);
        }
        this.Fabricantes = listaDosPesquisados;
      });
    }else{
      this.ngOnInit();
    }
  }
}