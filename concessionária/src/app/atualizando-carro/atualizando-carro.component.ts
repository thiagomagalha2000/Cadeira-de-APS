import { Component } from '@angular/core';
import { CarroServiceSetadoDoJava } from '../carro.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';
import { Router, ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';
import { FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-atualizando-carro',
  templateUrl: './atualizando-carro.component.html',
  styleUrls: ['./atualizando-carro.component.css']
})
export class AtualizandoCarroComponent{

  carro: Carro;
  idDocarro: number = 0;
  formularioDecarro;
  arrayDeGeneros: Array<any> = [];
  listaDeGenerosQueNaoSaoDocarro:Array<any> = [];
  listaFinalDosGeneros: Array<any> = [];

  constructor(private CarroServiceSetadoDoJava: CarroServiceSetadoDoJava, private formBuilder: FormBuilder,
    private carroNovo: trocandoJson, private carroAtualizado: trocandoJson, private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getcarro(this.route.snapshot.params['id']);
    this.formularioDecarro = this.criandoFormulario();
  }

  getcarro(id: number){
    this.idDocarro = id;
    this.CarroServiceSetadoDoJava.buscarDetalheDocarroJava(id).subscribe((data: Carro) => {
      this.carro = this.carroNovo.mudarArquivoJsonDoBackParaOFront(data);

      this.formularioDecarro.setValue({
        placa: this.carro.placa,
        cor: this.carro.cor,
        fabricante: this.carro.fabricante,
        gasolina: this.carro.gasolina,
        quilometragem: this.carro.quilometragem,
        chassi: this.carro.chassi,
        valor: this.carro.valor,
        marca: this.carro.marca,
        modelo: this.carro.modelo,
        imagem: this.carro.imagem,
        ano: this.carro.ano
      });
    });
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

  getIdDocarro(){
    return this.formBuilder.control(this.idDocarro);
  }

  onSubmit() {
      this.formularioDecarro.addControl('id',this.getIdDocarro());
      var jsonString = Array(this.formularioDecarro.value);
      this.CarroServiceSetadoDoJava.atualizarcarro(this.carroAtualizado.mudarArquivoJsonDoFrontParaOBack(jsonString)).subscribe(()=>{});
      this.irParaPaginaAtualizarcarros();
      this.toastr.success("O carro foi atualizado com sucesso!");
      setTimeout(function() {
        window.location.reload();
      });
  }

  irParaPaginaAtualizarcarros(){
    this.router.navigate(['/atualizarcarro'], { relativeTo: this.route });
  }
}