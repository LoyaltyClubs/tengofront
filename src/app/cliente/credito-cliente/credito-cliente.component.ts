import { Component, Input, OnInit } from '@angular/core';
import { Credito } from 'src/app/api-client/api.types';

@Component({
  selector: 'app-credito-cliente',
  templateUrl: './credito-cliente.component.html',
  styleUrls: ['./credito-cliente.component.css']
})
export class CreditoClienteComponent implements OnInit {
  @Input() creditos: Credito[];

  constructor() { }

  ngOnInit(): void {
  }

}
