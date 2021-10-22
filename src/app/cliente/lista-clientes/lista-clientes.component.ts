import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/api-client/api.types';
import { ClienteService } from 'src/app/api-client/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clientesPermanentes: Cliente[] = [];

  clienteFilter: any;
  dataSearch: any;

  constructor(
    readonly clienteService: ClienteService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.getAll().subscribe(
      (res: Cliente[]) => {
        this.clientes = res;
        this.clientesPermanentes = res;
        console.log(res);
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

    this.router.navigate(['/cliente'], {
      queryParams: this.clienteFilter,
    });
  }

  onChangeCustomer() {
    if (!this.dataSearch){
      this.clientes = this.clientesPermanentes
      return
    }

    this.clientes = this.clientes.filter(
      (cliente) =>
        cliente.apellido_paterno.toLowerCase().includes(this.dataSearch.toLowerCase()) ||
        cliente.apellido_materno.toLowerCase().includes(this.dataSearch.toLowerCase()) ||
        cliente.ci.toString().toLowerCase().includes(this.dataSearch.toLowerCase())
    );
    console.log(this.clientes)
  }
}
