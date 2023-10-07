import { Component } from '@angular/core';
import {Livro} from '../../shared/modelo/livro';
import {LIVROS} from '../../shared/modelo/LIVROS';

@Component({
  selector: 'app-listagem-livro',
  templateUrl: './listagem-livro.component.html',
  styleUrls: ['./listagem-livro.component.css']
})
export class ListagemLivrosComponent {

  livros = LIVROS;
  excluir(livroARemover: Livro): void {
    const indx = this.livros.findIndex(livro =>
      livro.titulo === livroARemover.titulo);

    this.livros.splice(indx, 1);
  }

}
