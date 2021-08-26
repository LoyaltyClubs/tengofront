import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent as ListarComponentRubro } from './rubro/listar/listar.component';
import { ListarComponent as ListarComponentPlanes } from './planes/listar/listar.component';
import { NuevoComponent as NuevoComponentRubro } from './rubro/nuevo/nuevo.component';
import { NuevoComponent as NuevoComponentPlan } from './planes/nuevo/nuevo.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ListarComponentRubro,
    NuevoComponentRubro,
    ListarComponentPlanes,
    NuevoComponentPlan
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class EmpresasModule { }
