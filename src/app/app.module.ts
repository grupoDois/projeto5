import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { CorpoComponent } from './corpo/corpo.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TituloComponent } from './titulo/titulo.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoIdComponent } from './produto-id/produto-id.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    CorpoComponent,
    HomeComponent,
    MenuComponent,
    RodapeComponent,
    SobreNosComponent,
    TituloComponent,
    ProdutoListaComponent,
    ProdutoIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
