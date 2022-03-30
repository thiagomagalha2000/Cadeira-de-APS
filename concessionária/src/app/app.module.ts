import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SenhaAtualizarComponent } from './senha-atualizar/senha-atualizar.component';
import { SenhaCriarComponent } from './senha-criar/senha-criar.component';
import { SenhaDeletarComponent } from './senha-deletar/senha-deletar.component';
import { AtualizandoCarroComponent } from './atualizando-carro/atualizando-carro.component';
import { ListarCarrosComponent } from './listar-carros/listar-carros.component';
import { CadastrarCarroComponent } from './cadastrar-carro/cadastrar-carro.component';
import { DeletarCarroComponent } from './deletar-carro/deletar-carro.component';
import { AtualizarCarrosComponent } from './atualizar-carros/atualizar-carros.component';
import { DeletandoCarrosComponent } from './deletando-carros/deletando-carros.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { SenhaAtualizarFabricanteComponent } from './senha-atualizar-fabricante/senha-atualizar-fabricante.component';
import { SenhaCriarFabricanteComponent } from './senha-criar-fabricante/senha-criar-fabricante.component';
import { SenhaDeletarFabricanteComponent } from './senha-deletar-fabricante/senha-deletar-fabricante.component';
import { CadastrarFabricanteComponent } from './cadastrar-fabricante/cadastrar-fabricante.component';
import { AtualizarFabricanteComponent } from './atualizar-fabricante/atualizar-fabricante.component';
import { DeletarFabricanteComponent } from './deletar-fabricante/deletar-fabricante.component';
import { DeletandoFabricanteComponent } from './deletando-fabricante/deletando-fabricante.component';
import { AtualizandoFabricanteComponent } from './atualizando-fabricante/atualizando-fabricante.component';
import { VendaCarroComponent } from './venda-carro/venda-carro.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListarCarrosComponent},
    ]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBottomSheetModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass:'toast-top-right',
    })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SenhaAtualizarComponent,
    SenhaCriarComponent,
    SenhaDeletarComponent,
    AtualizandoCarroComponent,
    ListarCarrosComponent,
    CadastrarCarroComponent,
    DeletarCarroComponent,
    AtualizarCarrosComponent,
    DeletandoCarrosComponent,
    DadosPessoaisComponent,
    SenhaAtualizarFabricanteComponent,
    SenhaCriarFabricanteComponent,
    SenhaDeletarFabricanteComponent,
    CadastrarFabricanteComponent,
    AtualizarFabricanteComponent,
    DeletarFabricanteComponent,
    DeletandoFabricanteComponent,
    AtualizandoFabricanteComponent,
    VendaCarroComponent,
    ListaComprasComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }