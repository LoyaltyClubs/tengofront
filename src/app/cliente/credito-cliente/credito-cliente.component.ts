import { Component, Input, OnInit } from '@angular/core';
import { Credito, Cuota } from 'src/app/api-client/api.types';
import { ClienteService } from 'src/app/api-client/cliente.service';

@Component({
  selector: 'app-credito-cliente',
  templateUrl: './credito-cliente.component.html',
  styleUrls: ['./credito-cliente.component.css']
})
export class CreditoClienteComponent implements OnInit {
  @Input() creditos: Credito[];
  cuotas: Cuota[]
  tituloCredito: string

  constructor(private readonly clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  verCuotas(credito: Credito) {
    this.tituloCredito = credito.descripcion
    this.clienteService.getQuotes(credito.id).subscribe(
      (res: Cuota[]) => {
        this.cuotas = res
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
