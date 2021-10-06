import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarjeta } from 'src/app/api-client/api.types';
import { ClienteService } from 'src/app/api-client/cliente.service';

declare function showNotification(from: string, align: string): any;

@Component({
  selector: 'app-tarjeta-cliente',
  templateUrl: './tarjeta-cliente.component.html',
  styleUrls: ['./tarjeta-cliente.component.css'],
})
export class TarjetaClienteComponent implements OnInit {
  @Input() tarjetas: Tarjeta[];
  @Input() cliente_id: number;
  
  formGroup: FormGroup = this.formBuilder.group({
    numero: ['', Validators.required],
    fecha_vencimiento: ['', Validators.required],
    tipo_id: ['', Validators.required],
    saldo: ['', Validators.required],
    estado: ['Vigente', Validators.required],
  });

  constructor(
    private readonly clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

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

  agregarTarjeta() {
    const tarjeta: Tarjeta = this.formGroup.value
    tarjeta.cliente_id = this.cliente_id
    console.log(tarjeta)

    this.clienteService.createCard(tarjeta).subscribe(
      (res) => {
        this.obtenerTarjetas()
      },
      (error) => {
        console.log(error);
        this.formGroup.reset();
      }
    );
  }

  obtenerTarjetas(){
    this.clienteService.getAllCards(this.cliente_id).subscribe(
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
}
