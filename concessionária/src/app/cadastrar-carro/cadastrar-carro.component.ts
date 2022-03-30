import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fabricante } from '../carro';
import { CarroServiceSetadoDoJava } from '../carro.serviceSetadoDoJava';
import { FabricanteServiceSetadoDoJava } from '../Fabricante.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.component.html',
  styleUrls: ['./cadastrar-carro.component.css']
})
export class CadastrarCarroComponent {

  fabricantes = [];
  arrayDeGeneros: Array<any>;
  formularioDecarro = this.criandoFormulario();

  constructor(private CarroServiceSetadoDoJava: CarroServiceSetadoDoJava, private formBuilder: FormBuilder,
    private carroCadastrado: trocandoJson, private toastr: ToastrService, private route: ActivatedRoute,
    private router: Router, private FabricanteServiceSetadoDoJava: FabricanteServiceSetadoDoJava) {}

  ngOnInit(){
    this.FabricanteServiceSetadoDoJava.buscarFabricantesDoJava().subscribe((data: any[])=>{
      this.fabricantes = data;
    })
  }

  criandoFormulario(){
    return this.formBuilder.group({
      placa: [''],
      cor: [''],
      fabricante: [''],
      gasolina: [''],
      quilometragem: [''],
      chassi: [''],
      valor: [''],
      marca: [''],
      modelo: [''],
      imagem: [''],
      ano: ['']
     });
  }

  onSubmit() {
      var jsonString = Array(this.formularioDecarro.value);
      console.log(jsonString);
      this.CarroServiceSetadoDoJava.salvarcarro(this.carroCadastrado.mudarArquivoJsonDoFrontParaOBack(jsonString)).subscribe(()=>{});
      this.irParaPaginaListarcarros();
      this.toastr.success('O carro foi cadastrado com sucesso!');
  }

  irParaPaginaListarcarros(){
    this.router.navigate(['/carros'], { relativeTo: this.route });
  }
}