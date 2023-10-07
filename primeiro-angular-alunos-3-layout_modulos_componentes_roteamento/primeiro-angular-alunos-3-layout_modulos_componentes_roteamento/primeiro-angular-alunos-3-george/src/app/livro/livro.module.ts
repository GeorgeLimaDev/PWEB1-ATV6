import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemLivrosComponent } from './listagem-livro/listagem-livro.component';
import { MantemLivroComponent } from './mantem-livro/mantem-livro.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {PipesModule} from '../pipes/pipes.module';
import {FlexModule} from '@angular/flex-layout';
import {RouterLink} from '@angular/router';



@NgModule({
  declarations: [
    ListagemLivrosComponent,
    MantemLivroComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    PipesModule,
    FlexModule,
    RouterLink
  ],
  exports: [
    ListagemLivrosComponent,
    MantemLivroComponent
  ]
})
export class LivroModule { }
