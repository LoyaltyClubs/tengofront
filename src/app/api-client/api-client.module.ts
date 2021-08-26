import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { EmpresaCiudadService } from './empresa-ciudad.service'

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    EmpresaCiudadService,
  ],
})
export class ApiClientModule {}
