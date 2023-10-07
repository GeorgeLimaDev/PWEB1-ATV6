import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import {ListagemUsuariosComponent} from './usuario/listagem-usuarios/listagem-usuarios.component';
import {MantemLivroComponent} from './livro/mantem-livro/mantem-livro.component';
import {ListagemLivrosComponent} from './livro/listagem-livro/listagem-livro.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'cadastrolivro',
    component: MantemLivroComponent
  },
  {
    path: 'editalivro/:id',
    component: MantemLivroComponent
  },
  {
    path: 'listagemlivros',
    component: ListagemLivrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
