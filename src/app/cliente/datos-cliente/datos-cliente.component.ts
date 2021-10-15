import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Cliente, EmpresaCiudad } from 'src/app/api-client/api.types';
import { ClienteService } from 'src/app/api-client/cliente.service';
import { EmpresaCiudadService } from 'src/app/api-client/empresa-ciudad.service';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.component.html',
  styleUrls: ['./datos-cliente.component.css'],
})
export class DatosClienteComponent implements OnInit {
  @Input() formGroup: FormGroup;
  cliente: Cliente
  ciudades: EmpresaCiudad[] = [];

  textEditBtn: string;
  editing = false;

  constructor(
    private controlContainer: ControlContainer,
    private readonly clienteService: ClienteService,
    private formBuilder: FormBuilder,
    readonly ciudadService: EmpresaCiudadService,
  ) {}

  ngOnInit(): void {
    this.formGroup = <FormGroup>this.controlContainer.control;
    this.cliente = this.formGroup.value
    this.setFormValidations()
    this.disableControls();
    this.obtenerCiudades()
  }

  setFormValidations() {
    this.formGroup.get('nombre')?.setValidators([Validators.required, Validators.minLength(3),])
    this.formGroup.get('apellido_paterno')?.setValidators([Validators.required])
    this.formGroup.get('apellido_materno')?.setValidators([Validators.required])
    this.formGroup.get('estado_civil')?.setValidators([Validators.required])
    this.formGroup.get('fecha_nacimiento')?.setValidators([Validators.required])
    this.formGroup.get('fecha_nacimiento')?.setValue(formatDate(this.cliente.fecha_nacimiento, 'yyyy-MM-dd', 'en'))
    this.formGroup.get('sexo')?.setValidators([Validators.required])
    this.formGroup.get('ci')?.setValidators([Validators.required])
    this.formGroup.get('calle_particular')?.setValidators([Validators.required])
    this.formGroup.get('zona')?.setValidators([Validators.required])
    this.formGroup.get('provincia')?.setValidators([Validators.required])
    this.formGroup.get('barrio')?.setValidators([Validators.required])
    this.formGroup.get('ciudad_id')?.setValidators([Validators.required])
    this.formGroup.get('telefono_fijo')?.setValidators([Validators.minLength(7), Validators.pattern('[1-9]{1}\\d+'),])
    this.formGroup.get('telefono_celular')?.setValidators([Validators.required,
      Validators.minLength(7),
      Validators.pattern('[1-9]{1}\\d+'),])
    this.formGroup.get('email')?.setValidators([Validators.required])
    this.formGroup.get('parentesco_referencia')?.setValidators([Validators.required])
    this.formGroup.get('nombre_referencia')?.setValidators([Validators.required])
    this.formGroup.get('provincia_referencia')?.setValidators([Validators.required])
    this.formGroup.get('telefono_referencia')?.setValidators([Validators.required])
    this.formGroup.get('tipo_tel_referencia')?.setValidators([Validators.required])
    this.formGroup.get('ciudad_referencia')?.setValidators([Validators.required])
    this.formGroup.get('dia_pago')?.setValidators([Validators.required])
    this.formGroup.get('estado')?.setValidators([Validators.required])
    this.formGroup.get('saldo')?.setValidators([Validators.required])

    this.formGroup.markAllAsTouched()
    this.formGroup.updateValueAndValidity()
  }

  submit() {
    this.editing ? this.editarCliente() : this.enableControls()
  }

  editarCliente() {
    console.log(this.formGroup.invalid)

    if (this.formGroup.invalid) {
      console.log('invalid')
      return
    }

    this.actualizarCliente(this.formGroup.value)
  }

  bloquearCliente() {
    if(this.cliente.estado === 'Bloqueado'){
      this.cliente.estado = 'Desbloqueado'
      this.formGroup.get('estado')?.setValue('Desbloqueado')
      this.actualizarCliente(this.cliente)
      return
    } 

    if(this.cliente.estado === 'Desbloqueado'){
      this.cliente.estado = 'Bloqueado'
      this.formGroup.get('estado')?.setValue('Bloqueado')
      this.actualizarCliente(this.cliente)
    }
  }

  actualizarCliente(cliente:any) {
    console.log(this.cliente);

    this.clienteService.edit(cliente).subscribe(
      (res: Cliente) => {
        this.disableControls();
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  disableControls() {
    this.editing = false
    this.textEditBtn = 'Editar Cliente';
  }

  enableControls() {
    this.textEditBtn = 'Guardar Cliente';
    this.editing = true
  }

  obtenerCiudades() {
    this.ciudadService.getAll().subscribe(
      (res: EmpresaCiudad[]) => {
        this.ciudades = res;
        console.log(res);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
