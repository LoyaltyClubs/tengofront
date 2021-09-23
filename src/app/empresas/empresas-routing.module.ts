import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListarComponent } from './ciudades/listar/listar.component'
import { ListarComponent as ListarComponentPlanes } from './planes/listar/listar.component'
import { NuevoComponent as NuevoComponentPlanes } from './planes/nuevo/nuevo.component';
import { EmpresaIndexComponent } from './empresa_index/empresa_index.component'
import { CiudadesNuevoComponent } from './ciudades/ciudades-nuevo/ciudades-nuevo.component';
import { CiudadesEditarComponent } from './ciudades/ciudades-editar/ciudades-editar.component';
import { ListarRubroComponent } from './rubro/listar/listar.component';
import { NuevoRubroComponent } from './rubro/nuevo/nuevo.component';
import { RubrosEditarComponent } from './rubro/rubros-editar/rubros-editar.component';
import { EmpresasEditarComponent } from './empresas/empresas-editar/empresas-editar.component';
import { PlanesEditarComponent } from './planes/planes-editar/planes-editar.component';
import { EmpresaNuevoComponent } from './empresa-nuevo/empresa-nuevo.component';
import { EmpresaCargarComponent } from './empresa-cargar/empresa-cargar.component';
import { ListarProvinciasComponent } from './provincias/listar-provincias/listar-provincias.component';
import { NuevaProvinciaComponent } from './provincias/nueva-provincia/nueva-provincia.component';
import { EditarProvinciaComponent } from './provincias/editar-provincia/editar-provincia.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresaIndexComponent,
  },
  {
    path: 'editar',
    component: EmpresasEditarComponent,
  },
  /*{
    path: 'empresa/empresa',
    component: NuevoComponentEmpresa
  },*/
  {
    path: 'empresa',
    component: EmpresaNuevoComponent
  },
  {
    path: 'cargar',
    component: EmpresaCargarComponent
  },
  {
    path: 'ciudades',
    component: ListarComponent,
  },
  {
    path: 'ciudades/nuevo',
    component: CiudadesNuevoComponent
  },
  {
    path: 'ciudades/editar',
    component: CiudadesEditarComponent
  },
  {
    path: 'planes',
    component: ListarComponentPlanes
  },
  {
    path: 'planes/plan',
    component: NuevoComponentPlanes
  },
  {
    path: 'planes/editar',
    component: PlanesEditarComponent
  },
  {
    path: 'rubros',
    component: ListarRubroComponent
  },
  {
    path: 'rubros/nuevo',
    component: NuevoRubroComponent
  },
  {
    path: 'rubros/editar',
    component: RubrosEditarComponent
  },
    {
    path: 'provincias',
    component: ListarProvinciasComponent
  },
  {
    path: 'provincias/nuevo',
    component: NuevaProvinciaComponent
  },
  {
    path: 'provincias/editar',
    component: EditarProvinciaComponent
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresasRoutingModule {}
