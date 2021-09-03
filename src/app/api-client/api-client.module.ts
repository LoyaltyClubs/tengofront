import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { EmpresaCiudadService } from './empresa-ciudad.service'
import { RubroService } from './rubro.service'
import { ClienteService } from './cliente.service'

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    EmpresaCiudadService, RubroService, ClienteService
  ],
})
export class ApiClientModule {}
