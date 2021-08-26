import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ListarComponent } from './rubro/listar/listar.component';
import { NuevoComponent } from './rubro/nuevo/nuevo.component';



@NgModule({
  declarations: [
    IndexComponent,
    ListarComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpresasModule { }
