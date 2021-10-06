import { Component, Input, OnInit } from '@angular/core';
import { Pago } from 'src/app/api-client/api.types';

@Component({
  selector: 'app-pagos-cliente',
  templateUrl: './pagos-cliente.component.html',
  styleUrls: ['./pagos-cliente.component.css']
})
export class PagosClienteComponent implements OnInit {
  @Input() pagos: Pago[];
  constructor() { }

  ngOnInit(): void {
  }

}
