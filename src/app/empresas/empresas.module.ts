import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './ciudades/listar/listar.component';
import { NuevoComponent } from './rubro/nuevo/nuevo.component';
import { IndexComponent } from '../dashboard/index/index.component';
import { ApiClientModule } from '../api-client/api-client.module';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { FormsModule } from '@angular/forms';
import { ListarComponent as ListarComponentRubro } from './rubro/listar/listar.component';
import { ListarComponent as ListarComponentPlanes } from './planes/listar/listar.component';
import { NuevoComponent as NuevoComponentRubro } from './rubro/nuevo/nuevo.component';
import { NuevoComponent as NuevoComponentPlan } from './planes/nuevo/nuevo.component';




@NgModule({
  declarations: [
    IndexComponent,
    ListarComponent,
    NuevoComponent,
    ListarComponentRubro,
    NuevoComponentRubro,
    ListarComponentPlanes,
    NuevoComponentPlan
  ],
  imports: [
    CommonModule,
    ApiClientModule, 
    EmpresasRoutingModule,
    FormsModule
  ]
})
export class EmpresasModule { }
