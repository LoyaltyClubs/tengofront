import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './rubro/listar/listar.component';
import { ListarComponent as ListarComponentPlanes } from './planes/listar/listar.component';
import { NuevoComponent } from './rubro/nuevo/nuevo.component';




@NgModule({
  declarations: [
    ListarComponent,
    NuevoComponent,
    ListarComponentPlanes
  ],
  imports: [
    CommonModule,
  ]
})
export class EmpresasModule { }
