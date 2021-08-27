import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListarComponent } from './ciudades/listar/listar.component'
import { ListarComponent as ListarComponentPlanes } from './planes/listar/listar.component'
import { NuevoComponent as NuevoComponentPlanes } from './planes/nuevo/nuevo.component';
//import { NuevoComponent as NuevoComponentEmpresa } from './empresa/nuevo/nuevo.component';
import { EmpresaIndexComponent } from './empresa_index/empresa_index.component'
import { CiudadesNuevoComponent } from './ciudades/ciudades-nuevo/ciudades-nuevo.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresaIndexComponent,
  },
  /*{
    path: 'empresa/empresa',
    component: NuevoComponentEmpresa
  },*/
  {
    path: 'ciudades',
    component: ListarComponent,
  },
  {
    path: 'ciudades/nuevo',
    component: CiudadesNuevoComponent
  },
  {
    path: 'planes',
    component: ListarComponentPlanes
  },
  {
    path: 'planes/plan',
    component: NuevoComponentPlanes
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresasRoutingModule {}
