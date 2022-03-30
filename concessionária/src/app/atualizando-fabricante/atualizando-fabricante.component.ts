import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fabricante } from '../carro';
import { FabricanteServiceSetadoDoJava } from '../Fabricante.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-atualizando-fabricante',
  templateUrl: './atualizando-fabricante.component.html',
  styleUrls: ['./atualizando-fabricante.component.css']
})
export class AtualizandoFabricanteComponent   {

  fabricante: Fabricante;
  idDoFabricante: number = 0;
  formularioDeFabricante;

  constructor(private FabricanteServiceSetadoDoJava: FabricanteServiceSetadoDoJava, private formBuilder: FormBuilder,
    private FabricanteCadastrado: trocandoJson, private toastr: ToastrService, private route: ActivatedRoute,
    private router: Router, private fabricanteAtualizado: trocandoJson) {}

  ngOnInit(){
    this.getFabricante(this.route.snapshot.params['id']);
    this.formularioDeFabricante = this.criandoFormulario();
  }

  getFabricante(id: number){
    this.idDoFabricante = id;
    this.FabricanteServiceSetadoDoJava.buscarDetalheDoFabricanteJava(id).subscribe((data: Fabricante) => {

      this.fabricante = this.fabricanteAtualizado.mudarArquivoJsonDoBackParaOFront(data);

      this.formularioDeFabricante.setValue({
        nome: this.fabricante.nome,
        cnpj: this.fabricante.cnpj
      });
    });
  }

  criandoFormulario(){
    return this.formBuilder.group({
      nome: [''],
      cnpj: [''],
     });
  }

  getIdDoFabricante(){
    return this.formBuilder.control(this.idDoFabricante);
  }

  onSubmit() {
    this.formularioDeFabricante.addControl('id',this.getIdDoFabricante());
    var jsonString = Array(this.formularioDeFabricante.value);
    this.FabricanteServiceSetadoDoJava.atualizarFabricante(this.FabricanteCadastrado.mudarArquivoJsonDoFrontParaOBack(jsonString)).subscribe(()=>{});
    this.irParaPaginaListarFabricantes();
    this.toastr.success("O fabricante foi atualizado com sucesso!");
    setTimeout(function() {
      window.location.reload();
    });
  }

  irParaPaginaListarFabricantes(){
    this.router.navigate(['/atualizarFabricante'], { relativeTo: this.route });
  }
}