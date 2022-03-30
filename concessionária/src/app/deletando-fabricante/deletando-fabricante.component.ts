import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fabricante } from '../carro';
import { FabricanteServiceSetadoDoJava } from '../Fabricante.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-deletando-fabricante',
  templateUrl: './deletando-fabricante.component.html',
  styleUrls: ['./deletando-fabricante.component.css']
})
export class DeletandoFabricanteComponent{
  
  fabricante:Fabricante;

  constructor(private FabricanteServiceSetadoDoJava: FabricanteServiceSetadoDoJava, private fabricanteNovo: trocandoJson,
    private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getfabricante(this.route.snapshot.params['id']);
  }

  getfabricante(id: number){
    this.FabricanteServiceSetadoDoJava.buscarDetalheDoFabricanteJava(id).subscribe((data: Fabricante) => {
      this.fabricante = this.fabricanteNovo.mudarArquivoJsonDoBackParaOFront(data);
    });
  }

  deletarUmfabricante(id:number){
    this.FabricanteServiceSetadoDoJava.deletarFabricante(id).subscribe(()=>{});
    setTimeout(function() {
      window.location.reload();
    });
    this.irParaPaginaDeletarfabricantes();
    this.toastr.warning("O fabricante foi deletado com sucesso!");
  }

  irParaPaginaDeletarfabricantes(){
    this.router.navigate(['/deletarFabricante'], { relativeTo: this.route });
  }
}