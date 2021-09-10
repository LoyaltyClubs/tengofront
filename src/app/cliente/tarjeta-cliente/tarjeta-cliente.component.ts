import { Component, Input, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/api-client/api.types';
import { ClienteService } from 'src/app/api-client/cliente.service';

declare function showNotification(from: string, align: string): any;

@Component({
  selector: 'app-tarjeta-cliente',
  templateUrl: './tarjeta-cliente.component.html',
  styleUrls: ['./tarjeta-cliente.component.css']
})
export class TarjetaClienteComponent implements OnInit {
  @Input() tarjetas: Tarjeta[];

  constructor(private readonly clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  cambiarEstado(tarjeta: Tarjeta) {
    this.clienteService.updateCard(tarjeta).subscribe(
      (res: Tarjeta) => {
        //showNotification('bottom','right')
        console.log(res);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
