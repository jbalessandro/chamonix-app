import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioIncluirComponent } from './usuarios/usuario-incluir/usuario-incluir.component';
import { UsuarioAlterarComponent } from './usuarios/usuario-alterar/usuario-alterar.component';
import { UsuarioExcluirComponent } from './usuarios/usuario-excluir/usuario-excluir.component';
import { CargosComponent } from './cargos/cargos.component';
import { CargoIncluirComponent } from './cargos/cargo-incluir/cargo-incluir.component';
import { CargoExcluirComponent } from './cargos/cargo-excluir/cargo-excluir.component';
import { CargoAlterarComponent } from './cargos/cargo-alterar/cargo-alterar.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaIncluirComponent } from './categorias/categoria-incluir/categoria-incluir.component';
import { CategoriaAlterarComponent } from './categorias/categoria-alterar/categoria-alterar.component';
import { CategoriaExcluirComponent } from './categorias/categoria-excluir/categoria-excluir.component';
import { ProdutoIncluirComponent } from './produtos/produto-incluir/produto-incluir.component';
import { ProdutoAlterarComponent } from './produtos/produto-alterar/produto-alterar.component';
import { ProdutoExcluirComponent } from './produtos/produto-excluir/produto-excluir.component';
import { MesasComponent } from './mesas/mesas.component';
import { MesasIncluirComponent } from './mesas/mesas-incluir/mesas-incluir.component';
import { MesaComponent } from './mesa/mesa.component';
import { MesaPosicaoComponent } from './mesa/mesa-posicao/mesa-posicao.component';
import { MesaClientesComponent } from './mesa/mesa-clientes/mesa-clientes.component';
import { MesaResumoComponent } from './mesa/mesa-resumo/mesa-resumo.component';
import { MesaPedidoComponent } from './mesa/mesa-pedido/mesa-pedido.component';
import { MesaPedidoCategoriaComponent } from './mesa/mesa-pedido/mesa-pedido-categoria/mesa-pedido-categoria.component';
import { MesaPedidoProdutosComponent } from './mesa/mesa-pedido/mesa-pedido-produtos/mesa-pedido-produtos.component';
import { MesaPedidoProdutoComponent } from './mesa/mesa-pedido/mesa-pedido-produto/mesa-pedido-produto.component';
import { MesaTrocarComponent } from './mesa/mesa-trocar/mesa-trocar.component';
import { MesaCancelarComponent } from './mesa/mesa-cancelar/mesa-cancelar.component';
import { MesaContaComponent } from './mesa/mesa-conta/mesa-conta.component';
import { FormaPgtoComponent } from './forma-pgto/forma-pgto.component';
import { FormaPgtoAlterarComponent } from './forma-pgto/forma-pgto-alterar/forma-pgto-alterar.component';
import { FormaPgtoExcluirComponent } from './forma-pgto/forma-pgto-excluir/forma-pgto-excluir.component';
import { FormaPgtoIncluirComponent } from './forma-pgto/forma-pgto-incluir/forma-pgto-incluir.component';
import { MesaCaixaComponent } from './mesa/mesa-conta/mesa-caixa/mesa-caixa.component';
import { MesaCaixaPagamentosComponent } from './mesa/mesa-conta/mesa-caixa/mesa-caixa-pagamentos/mesa-caixa-pagamentos.component';
// tslint:disable-next-line:max-line-length
import { MesaCaixaPagamentoExcluirComponent } from './mesa/mesa-conta/mesa-caixa/mesa-caixa-pagamento-excluir/mesa-caixa-pagamento-excluir.component';
import { MesaPosicaoPedidoItemComponent } from './mesa/mesa-posicao/mesa-posicao-pedido-item/mesa-posicao-pedido-item.component';
import { MesasAlterarComponent } from './mesas/mesas-alterar/mesas-alterar.component';
import { MesasExcluirComponent } from './mesas/mesas-excluir/mesas-excluir.component';
import { ParametroComponent } from './parametro/parametro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UsuariosComponent,
    UsuarioIncluirComponent,
    UsuarioAlterarComponent,
    UsuarioExcluirComponent,
    CargosComponent,
    CargoIncluirComponent,
    CargoExcluirComponent,
    CargoAlterarComponent,
    ProdutosComponent,
    CategoriasComponent,
    CategoriaIncluirComponent,
    CategoriaAlterarComponent,
    CategoriaExcluirComponent,
    ProdutoIncluirComponent,
    ProdutoAlterarComponent,
    ProdutoExcluirComponent,
    MesasComponent,
    MesasIncluirComponent,
    MesasExcluirComponent,
    MesaPosicaoComponent,
    MesaComponent,
    MesaClientesComponent,
    MesaResumoComponent,
    MesaPedidoComponent,
    MesaPedidoCategoriaComponent,
    MesaPedidoProdutosComponent,
    MesaPedidoProdutoComponent,
    MesaTrocarComponent,
    MesaCancelarComponent,
    MesaContaComponent,
    FormaPgtoComponent,
    FormaPgtoAlterarComponent,
    FormaPgtoExcluirComponent,
    FormaPgtoIncluirComponent,
    MesaCaixaComponent,
    MesaCaixaPagamentosComponent,
    MesaCaixaPagamentoExcluirComponent,
    MesaPosicaoPedidoItemComponent,
    MesasAlterarComponent,
    ParametroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MyDatePickerModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'cargos', component: CargosComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'mesas', component: MesasComponent },
      { path: 'mesa', component: MesaComponent },
      { path: 'FormaPagamento', component: FormaPgtoComponent },
      { path: 'parametros', component: ParametroComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
