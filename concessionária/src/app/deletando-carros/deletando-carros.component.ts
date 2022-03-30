import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarroServiceSetadoDoJava } from '../carro.serviceSetadoDoJava';
import { Carro } from '../carro';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-deletando-carros',
  templateUrl: './deletando-carros.component.html',
  styleUrls: ['./deletando-carros.component.css']
})
export class DeletandoCarrosComponent{

  carro:Carro;

  constructor(private CarroServiceSetadoDoJava: CarroServiceSetadoDoJava, private carroNovo: trocandoJson,
    private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getcarro(this.route.snapshot.params['id']);
  }

  getcarro(id: number){
    this.CarroServiceSetadoDoJava.buscarDetalheDocarroJava(id).subscribe((data: Carro) => {
      this.carro = this.carroNovo.mudarArquivoJsonDoBackParaOFront(data);
    });
  }

  deletarUmcarro(id:number){
    this.CarroServiceSetadoDoJava.deletarcarro(id).subscribe(()=>{});
    setTimeout(function() {
      window.location.reload();
    });
    this.irParaPaginaDeletarcarros();
    this.toastr.warning("O carro foi deletado com sucesso!");
  }

  irParaPaginaDeletarcarros(){
    this.router.navigate(['/deletarcarro'], { relativeTo: this.route });
  }
}