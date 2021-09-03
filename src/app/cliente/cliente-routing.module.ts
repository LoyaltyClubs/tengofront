import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component'

const routes: Routes = [
  {
    path: '',
    component: BuscarClienteComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
