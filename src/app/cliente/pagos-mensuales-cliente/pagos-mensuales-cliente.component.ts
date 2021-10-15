import { Component, Input, OnInit } from '@angular/core';
import { CuotaMensual } from 'src/app/api-client/api.types';

@Component({
  selector: 'app-pagos-mensuales-cliente',
  templateUrl: './pagos-mensuales-cliente.component.html',
  styleUrls: ['./pagos-mensuales-cliente.component.css']
})
export class PagosMensualesClienteComponent implements OnInit {
  @Input() cuotasMensuales: CuotaMensual[];

  constructor() { }

  ngOnInit(): void {
  }

}
