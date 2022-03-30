import { Component, EventEmitter, Output } from '@angular/core'
import { CarroServiceSetadoDoJava } from '../carro.serviceSetadoDoJava';
import { Carro } from '../carro';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-listar-carros',
  templateUrl: './listar-carros.component.html',
  styleUrls: ['./listar-carros.component.css']
})
export class ListarCarrosComponent{
  @Output() pageChange: EventEmitter<number>;
  carros: Carro[];

  constructor(private CarroServiceSetadoDoJava: CarroServiceSetadoDoJava, private carrosNovos: trocandoJson){
  }
  
  ngOnInit(){
    var listaDoscarrosNovos = []
    this.CarroServiceSetadoDoJava.buscarcarrosDoJava().subscribe((data: any[]) => {
      for (var carroDoJava of data){
        var carrosComJsonAlterado = this.carrosNovos.mudarArquivoJsonDoBackParaOFront(carroDoJava);
        listaDoscarrosNovos.push(carrosComJsonAlterado);
      }
      this.carros = listaDoscarrosNovos;
    });
  }
  
  pesquisarcarrosPeloNome(event: Event){
    var filterValue = (event.target as HTMLInputElement).value;
    if(filterValue!=""){
      this.CarroServiceSetadoDoJava.pesquisarPeloNomeDocarroJava(filterValue).subscribe((data: any[]) => {
        this.carros = data['results'];  
      });
    }else {
      this.ngOnInit();
    }
  }
}