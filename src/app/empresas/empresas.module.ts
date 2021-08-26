import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './ciudades/listar/listar.component';
import { NuevoComponent } from './rubro/nuevo/nuevo.component';
import { IndexComponent } from '../dashboard/index/index.component';
import { ApiClientModule } from '../api-client/api-client.module';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexComponent,
    ListarComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule,
    ApiClientModule, 
    EmpresasRoutingModule,
    FormsModule
  ]
})
export class EmpresasModule { }
