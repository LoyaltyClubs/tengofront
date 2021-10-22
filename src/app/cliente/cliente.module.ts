import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { DatosClienteComponent } from './datos-cliente/datos-cliente.component';
import { TarjetaClienteComponent } from './tarjeta-cliente/tarjeta-cliente.component';
import { CreditoClienteComponent } from './credito-cliente/credito-cliente.component';
import { ApiClientModule } from '../api-client/api-client.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteCargarComponent } from './cliente-cargar/cliente-cargar.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { PagosClienteComponent } from './pagos-cliente/pagos-cliente.component';
import { PagosMensualesClienteComponent } from './pagos-mensuales-cliente/pagos-mensuales-cliente.component';
import { BloqueoClienteComponent } from './bloqueo-cliente/bloqueo-cliente.component';

@NgModule({
  declarations: [
    BuscarClienteComponent,
    DatosClienteComponent,
    TarjetaClienteComponent,
    CreditoClienteComponent,
    ClienteCargarComponent,
    ListaClientesComponent,
    PagosClienteComponent,
    PagosMensualesClienteComponent,
    BloqueoClienteComponent
  ],
  imports: [
    CommonModule,
    ApiClientModule, 
    ClienteRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
