import { Produto } from './../model/produto';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-id',
  templateUrl: './produto-id.component.html',
  styleUrls: ['./produto-id.component.css']
})
export class ProdutoIdComponent implements OnInit {
  idProduto: number
  produto: Produto = new Produto(0, '','','',0,0)
  constructor(private produtoService:ProdutoService) { }

  ngOnInit() {
  }

  findIdProdutos(){
    this.produtoService.getById(this.idProduto).subscribe((produtoOut: Produto)=>{
      this.produto = produtoOut;
    })
  }
}
