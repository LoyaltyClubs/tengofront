import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListarComponent } from './ciudades/listar/listar.component'
import { ListarComponent as ListarComponentPlanes } from './planes/listar/listar.component'
import { NuevoComponent as NuevoComponentPlanes } from './planes/nuevo/nuevo.component';
import { EmpresaIndexComponent } from './empresa_index/empresa_index.component'

const routes: Routes = [
  {
    path: '',
    component: EmpresaIndexComponent,
  },
  {
    path: 'ciudades',
    component: ListarComponent,
  },
  {
    path: 'planes',
    component: ListarComponentPlanes
  },
  {
    path: 'planes/plan',
    component: NuevoComponentPlanes
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresasRoutingModule {}
