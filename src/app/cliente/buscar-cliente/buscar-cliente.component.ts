import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente, Credito, Tarjeta } from 'src/app/api-client/api.types';
import { ClienteService } from 'src/app/api-client/cliente.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css'],
})
export class BuscarClienteComponent implements OnInit {
  cliente: Cliente = this.defaultCliente();
  dataSearch: any
  newsFilter: any
  tarjetas: Tarjeta[]
  creditos: Credito[]
  
  formGroup: FormGroup
  
  constructor(
    private readonly clienteService: ClienteService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.aRoute.queryParams.subscribe((params) => {
      if(params){
        this.newsFilter = {
          ci: params['ci'],
        };

        console.log(params['ci'])
      }
      this.loadFromQueryParams();
    });
  }

  private defaultCliente(): Cliente {
    return {
      id: 0,
       nombre: '',
       apellido_paterno: '',
       apellido_materno: '',
       estado_civil: '',
       fecha_nacimiento: '',
       ci: '',
       calle_particular: '',
       extension: '',
       barrio: '',
       dia_pago: '',
       saldo: '',
       sexo:  '',
       zona:   '',
       provincia:  '',
       ciudad_id:  '',
       telefono_fijo:  '',
       telefono_celular:  '',
       email:  '',
       nombre_referencia:  '',
       provincia_referencia:  '',
       telefono_referencia:  '',
       tipo_tel_referencia:  '',
       ciudad_referencia:  '',
       linea_credito:  0,
       estado:  '',
    }
  }

  onChangeNews() {
    this.showFilteredNews();
  }

  showFilteredNews() {
    this.newsFilter = {
      ci: this.dataSearch,
    };

    this.router.navigate(["/cliente"], {
      queryParams: this.newsFilter,
    });
  }

  private loadFromQueryParams() {
    this.buscarCliente(this.newsFilter['ci'])
  }

  buscarCliente(ci: number) {
    this.clienteService.getBy(ci).subscribe(
      (res: Cliente[]) => {
        this.cliente = res[0]
        this.formGroup =  this.formBuilder.group(this.cliente!)

        console.log(this.cliente)
        this.obtenerTarjetas()
        this.obtenerCreditos()
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  obtenerTarjetas(){
    this.clienteService.getAllCards(this.cliente.id).subscribe(
      (res: Tarjeta[]) => {
        this.tarjetas = res
        console.log(this.tarjetas)
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  obtenerCreditos(){
    this.clienteService.getAllCredits(this.cliente.id).subscribe(
      (res: Credito[]) => {
        this.creditos = res
        console.log(this.creditos)
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
