import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component'
import { ClienteCargarComponent } from './cliente-cargar/cliente-cargar.component'

const routes: Routes = [
  {
    path: '',
    component: BuscarClienteComponent,
  },
  {
    path: 'cargar',
    component: ClienteCargarComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
