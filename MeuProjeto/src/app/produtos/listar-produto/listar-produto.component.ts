import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produtoComponent.html',
  styles: [
  ]
})
export class ListarProdutoComponent implements OnInit {

  constructor(private produtoService :ProdutoService) { }

  public produtos : Produto[] =[];

  ngOnInit(): void {
   this.produtoService.obterProdutos()
                      .subscribe(
                        produtoresult =>{
                          this.produtos = produtoresult;
                          console.log(produtoresult)
                        },
                        error => console.log(error)
                        
                      );
  }

}
