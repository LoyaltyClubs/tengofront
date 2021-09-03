import { Component, Input, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/api-client/api.types';

@Component({
  selector: 'app-tarjeta-cliente',
  templateUrl: './tarjeta-cliente.component.html',
  styleUrls: ['./tarjeta-cliente.component.css']
})
export class TarjetaClienteComponent implements OnInit {
  @Input() tarjetas: Tarjeta[];

  constructor() { }

  ngOnInit(): void {
  }

}
