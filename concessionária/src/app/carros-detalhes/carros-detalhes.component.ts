import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarroServiceSetadoDoJava } from '../carro.serviceSetadoDoJava';
import { Carro } from '../carro';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-carros-detalhes',
  templateUrl: './carros-detalhes.component.html',
  styleUrls: ['./carros-detalhes.component.css']
})
export class CarrosDetalhesComponent{

  carro: Carro;

  constructor(private CarroServiceSetadoDoJava: CarroServiceSetadoDoJava,  private carroNovo: trocandoJson,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getcarro(this.route.snapshot.params['id']);
  }
  getcarro(id: number){
    this.CarroServiceSetadoDoJava.buscarDetalheDocarroJava(id).subscribe((data: Carro) => {
      this.carro = this.carroNovo.mudarArquivoJsonDoBackParaOFront(data);
    });
  }
}