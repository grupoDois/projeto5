import { ProdutoIdComponent } from './produto-id/produto-id.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'produtos', component: ProdutoListaComponent},
  {path: 'produtosId', component: ProdutoIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
