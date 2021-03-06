import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './ciudades/listar/listar.component';
import { NuevoRubroComponent } from './rubro/nuevo/nuevo.component';
import { IndexComponent } from '../dashboard/index/index.component';
import { ApiClientModule } from '../api-client/api-client.module';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarRubroComponent } from './rubro/listar/listar.component';
import { ListarComponent as ListarComponentPlanes } from './planes/listar/listar.component';
import { NuevoComponent as NuevoComponentPlanes } from './planes/nuevo/nuevo.component';
import { CiudadesNuevoComponent } from './ciudades/ciudades-nuevo/ciudades-nuevo.component';
import { CiudadesEditarComponent } from './ciudades/ciudades-editar/ciudades-editar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RubrosEditarComponent } from './rubro/rubros-editar/rubros-editar.component';
import { EmpresasEditarComponent } from './empresas/empresas-editar/empresas-editar.component';
import { PlanesEditarComponent } from './planes/planes-editar/planes-editar.component';
import { EmpresaNuevoComponent } from './empresa-nuevo/empresa-nuevo.component';
import { EmpresaIndexComponent } from './empresa_index/empresa_index.component';
import { EmpresaCargarComponent } from './empresa-cargar/empresa-cargar.component';
import { ListarProvinciasComponent } from './provincias/listar-provincias/listar-provincias.component';
import { NuevaProvinciaComponent } from './provincias/nueva-provincia/nueva-provincia.component';
import { EditarProvinciaComponent } from './provincias/editar-provincia/editar-provincia.component';





@NgModule({
  declarations: [
    IndexComponent,
    ListarComponent,
    ListarRubroComponent,
    NuevoRubroComponent,
    ListarComponentPlanes,
    NuevoComponentPlanes,
    CiudadesNuevoComponent,
    CiudadesEditarComponent,
    RubrosEditarComponent,
    EmpresasEditarComponent,
    PlanesEditarComponent,
    EmpresasEditarComponent,
    EmpresaNuevoComponent,
    EmpresaIndexComponent,
    EmpresaCargarComponent,
    ListarProvinciasComponent,
    NuevaProvinciaComponent,
    EditarProvinciaComponent
  ],
  imports: [
    CommonModule,
    ApiClientModule, 
    EmpresasRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class EmpresasModule { }
