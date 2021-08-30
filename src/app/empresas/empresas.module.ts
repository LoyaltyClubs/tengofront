import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './ciudades/listar/listar.component';
import { NuevoComponent } from './rubro/nuevo/nuevo.component';
import { IndexComponent } from '../dashboard/index/index.component';
import { ApiClientModule } from '../api-client/api-client.module';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarComponent as ListarComponentRubro } from './rubro/listar/listar.component';
import { ListarComponent as ListarComponentPlanes } from './planes/listar/listar.component';
import { NuevoComponent as NuevoComponentRubro } from './rubro/nuevo/nuevo.component';
import { NuevoComponent as NuevoComponentPlanes } from './planes/nuevo/nuevo.component';
import { EmpresaNuevoComponent } from './empresa-nuevo/empresa-nuevo.component';
import { EmpresaIndexComponent } from './empresa_index/empresa_index.component';





@NgModule({
  declarations: [
    IndexComponent,
    ListarComponent,
    NuevoComponent,
    ListarComponentRubro,
    NuevoComponentRubro,
    ListarComponentPlanes,
    NuevoComponentPlanes,
    EmpresaNuevoComponent,
    EmpresaIndexComponent
  ],
  imports: [
    CommonModule,
    ApiClientModule, 
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpresasModule { }
