import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListarComponent } from './ciudades/listar/listar.component'
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
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresasRoutingModule {}
