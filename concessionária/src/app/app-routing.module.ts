import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenhaAtualizarComponent } from './senha-atualizar/senha-atualizar.component';
import { SenhaCriarComponent } from './senha-criar/senha-criar.component';
import { SenhaDeletarComponent } from './senha-deletar/senha-deletar.component';
import { AtualizandoCarroComponent } from './atualizando-carro/atualizando-carro.component';
import { ListarCarrosComponent } from './listar-carros/listar-carros.component';
import { CadastrarCarroComponent } from './cadastrar-carro/cadastrar-carro.component';
import { DeletarCarroComponent } from './deletar-carro/deletar-carro.component';
import { AtualizarCarrosComponent } from './atualizar-carros/atualizar-carros.component';
import { CarrosDetalhesComponent } from './carros-detalhes/carros-detalhes.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { SenhaAtualizarFabricanteComponent } from './senha-atualizar-fabricante/senha-atualizar-fabricante.component';
import { SenhaCriarFabricanteComponent } from './senha-criar-fabricante/senha-criar-fabricante.component';
import { SenhaDeletarFabricanteComponent } from './senha-deletar-fabricante/senha-deletar-fabricante.component';
import { DeletandoCarrosComponent } from './deletando-carros/deletando-carros.component';
import { CadastrarFabricanteComponent } from './cadastrar-fabricante/cadastrar-fabricante.component';
import { DeletarFabricanteComponent } from './deletar-fabricante/deletar-fabricante.component';
import { AtualizarFabricanteComponent } from './atualizar-fabricante/atualizar-fabricante.component';
import { AtualizandoFabricanteComponent } from './atualizando-fabricante/atualizando-fabricante.component';
import { DeletandoFabricanteComponent } from './deletando-fabricante/deletando-fabricante.component';
import { VendaCarroComponent } from './venda-carro/venda-carro.component';

const routes: Routes = [
  {path:'carros', component: ListarCarrosComponent},
  {path:'detalhes/:id', component: CarrosDetalhesComponent},
  {path:'cadastrarcarro', component: CadastrarCarroComponent},
  {path:'deletarcarro', component: DeletarCarroComponent},
  {path:'atualizarcarro', component: AtualizarCarrosComponent},
  {path:'atualizandocarro/:id', component: AtualizandoCarroComponent},
  {path:'deletandocarros/:id', component: DeletandoCarrosComponent},
  {path:'senhaAtualizar', component:SenhaAtualizarComponent},
  {path:'senhaCriar', component:SenhaCriarComponent},
  {path:'senhaDeletar', component:SenhaDeletarComponent},
  {path:'comprarCarro/:id', component:DadosPessoaisComponent},
  {path:'senhaAtualizarFabricante', component:SenhaAtualizarFabricanteComponent},
  {path:'senhaCriarFabricante', component:SenhaCriarFabricanteComponent},
  {path:'senhaDeletarFabricante', component:SenhaDeletarFabricanteComponent},
  {path:'senhaAtualizarFabricante', component:SenhaAtualizarFabricanteComponent},
  {path:'cadastrarFabricante', component:CadastrarFabricanteComponent},
  {path:'deletandoFabricante/:id', component: DeletandoFabricanteComponent},
  {path:'deletarFabricante', component:DeletarFabricanteComponent},
  {path:'atualizarFabricante', component:AtualizarFabricanteComponent},
  {path:'atualizandoFabricante/:id', component: AtualizandoFabricanteComponent},
  {path:'vendaCarro/:id', component: VendaCarroComponent},

  {path: '',
    redirectTo: '/carros',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }