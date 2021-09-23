import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/api-client/api.types';
import { ClienteService } from 'src/app/api-client/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteFilter: any

  constructor(
    readonly clienteService: ClienteService,
    private router: Router,
    private aRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.getAll().subscribe(
      (res: Cliente[]) => {
        this.clientes = res;
        console.log(res)
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  verCliente(ci: string) {
    this.clienteFilter = {
      ci: ci,
    };

    this.router.navigate(["/cliente"], {
      queryParams: this.clienteFilter,
    });
  }

}
