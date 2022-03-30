import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FabricanteServiceSetadoDoJava } from '../Fabricante.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-cadastrar-fabricante',
  templateUrl: './cadastrar-fabricante.component.html',
  styleUrls: ['./cadastrar-fabricante.component.css']
})
export class CadastrarFabricanteComponent  {

  formularioDeFabricante = this.criandoFormulario();

  constructor(private FabricanteServiceSetadoDoJava: FabricanteServiceSetadoDoJava, private formBuilder: FormBuilder,
    private FabricanteCadastrado: trocandoJson, private toastr: ToastrService, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(){}

  criandoFormulario(){
    return this.formBuilder.group({
      nome: [''],
      cnpj: [''],
     });
  }
  onSubmit() {
    var jsonString = Array(this.formularioDeFabricante.value);
    console.log(jsonString);
    this.FabricanteServiceSetadoDoJava.salvarFabricante(this.FabricanteCadastrado.mudarArquivoJsonDoFrontParaOBack(jsonString)).subscribe(()=>{});
    this.irParaPaginaListarFabricantes();
    this.toastr.success('O Fabricante foi cadastrado com sucesso!');
  }

  irParaPaginaListarFabricantes(){
    this.router.navigate(['/Fabricantes'], { relativeTo: this.route });
  }
}