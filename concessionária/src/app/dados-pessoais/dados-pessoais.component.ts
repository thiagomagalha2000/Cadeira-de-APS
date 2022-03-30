import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Carro } from '../carro';
import { CarroServiceSetadoDoJava } from '../carro.serviceSetadoDoJava';
import { ClienteServiceSetadoDoJava } from '../cliente.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent{

  carro: Carro;
  formularioDecliente = this.criandoFormulario();
  idDocarro: number = 0;

  constructor(private CarroServiceSetadoDoJava: CarroServiceSetadoDoJava, private formBuilder: FormBuilder,
    private carroNovo: trocandoJson, private clienteCadastrado: trocandoJson, private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router, private ClienteServiceSetadoDoJava: ClienteServiceSetadoDoJava) {}

  ngOnInit(): void {
    this.getcarro(this.route.snapshot.params['id']);
  }

  getcarro(id: number){
    this.idDocarro = id;
    this.CarroServiceSetadoDoJava.buscarDetalheDocarroJava(id).subscribe((data: Carro) => {
      this.carro = this.carroNovo.mudarArquivoJsonDoBackParaOFront(data);
    });
  }

  criandoFormulario(){
    return this.formBuilder.group({
      cpf: [''],
      nome: [''],
      endereco: [''],
      telefone: [''],
      email: [''],
      cartao:[''],
      parcelas:['']
     });
  }

  getIdDocarro(){
    return this.formBuilder.control(this.idDocarro);
  }

  onSubmit() {
    this.formularioDecliente.addControl('id',this.getIdDocarro());
    var jsonString = Array(this.formularioDecliente.value);
    this.ClienteServiceSetadoDoJava.salvarCliente(this.clienteCadastrado.mudarArquivoJsonDoFrontParaOBack(jsonString)).subscribe(()=>{});
    this.irParaPaginaCompra();
    this.toastr.success('O cliente foi cadastrado com sucesso!');
  }

  irParaPaginaCompra(){
    this.router.navigate(['/vendaCarro/'+this.idDocarro], { relativeTo: this.route });
  }
}