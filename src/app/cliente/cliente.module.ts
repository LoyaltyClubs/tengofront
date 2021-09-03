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

@NgModule({
  declarations: [
    BuscarClienteComponent,
    DatosClienteComponent,
    TarjetaClienteComponent,
    CreditoClienteComponent
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
