import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Carro, Cliente } from '../carro';
import { CarroServiceSetadoDoJava } from '../carro.serviceSetadoDoJava';
import { ClienteServiceSetadoDoJava } from '../cliente.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-venda-carro',
  templateUrl: './venda-carro.component.html',
  styleUrls: ['./venda-carro.component.css']
})
export class VendaCarroComponent{

  carro: Carro;
  cliente: Cliente;
  valor: number = 0;

  constructor(private CarroServiceSetadoDoJava: CarroServiceSetadoDoJava, private formBuilder: FormBuilder,
    private carroNovo: trocandoJson, private clienteCadastrado: trocandoJson, private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router, private ClienteServiceSetadoDoJava: ClienteServiceSetadoDoJava) {}

  ngOnInit(): void {
    this.getcarro(this.route.snapshot.params['id']);
  }

  getcarro(id: number){
    this.CarroServiceSetadoDoJava.buscarDetalheDocarroJava(id).subscribe((data: Carro) => {
      this.carro = this.carroNovo.mudarArquivoJsonDoBackParaOFront(data);
      this.valor = this.carro.valor/10;
    });
    this.ClienteServiceSetadoDoJava.buscarDetalheDoClienteJava(id).subscribe((data: Cliente) => {
      this.cliente = this.clienteCadastrado.mudarArquivoJsonDoBackParaOFront(data);
      //this.valor = this.valor/this.cliente.parcelas;
    });
  }
  
  comprarUmcarro(id:number){
    this.CarroServiceSetadoDoJava.deletarcarro(id).subscribe(()=>{});
    setTimeout(function() {
      window.location.reload();
    });
    this.irParaPaginaPrincipal();
    this.toastr.warning("O carro foi comprado com sucesso!");
  }

  irParaPaginaPrincipal(){
    this.router.navigate(['/carros'], { relativeTo: this.route });
  }
}