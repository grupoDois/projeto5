import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from "../model/produto";

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produtos: Array<Produto> = new Array<Produto>();

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findAllProdutos();
  }

  findAllProdutos(){
    this.produtoService.getAll().subscribe((produtoOut: Produto[])=>{
      this.produtos = produtoOut;
    });
  }

  allProdutos(){
    this.produtoService.getAll().subscribe((produtoOut: Produto[])=>{
      this.produtos = new Array<Produto>();
      this.produtos.push(produtoOut[0]);
    });
  }


}
