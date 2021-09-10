import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Cliente } from 'src/app/api-client/api.types';
import { ClienteService } from 'src/app/api-client/cliente.service';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.component.html',
  styleUrls: ['./datos-cliente.component.css'],
})
export class DatosClienteComponent implements OnInit {
  @Input() formGroup: FormGroup;
  textEditBtn: string;
  editing = false;

  constructor(
    private controlContainer: ControlContainer,
    private readonly clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = <FormGroup>this.controlContainer.control;
    this.setFormValidations()
    this.disableControls();
  }

  setFormValidations() {
    this.formGroup.get('nombre')?.setValidators([Validators.required, Validators.minLength(3),])
    this.formGroup.get('apellido_paterno')?.setValidators([Validators.required])
    this.formGroup.get('apellido_materno')?.setValidators([Validators.required])
    this.formGroup.get('estado_civil')?.setValidators([Validators.required])
    this.formGroup.get('fecha_nacimiento')?.setValidators([Validators.required])
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

  editarCliente() {
    this.editing ? this.actualizarCliente() : this.enableControls()
  }

  actualizarCliente() {
    console.log(this.formGroup.invalid)

    if (this.formGroup.invalid) {
      console.log('invalid')
      return
    }
    this.clienteService.edit(this.formGroup.value).subscribe(
      (res: Cliente) => {
        this.formGroup = this.formBuilder.group(res);
        console.log(res);
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
    this.textEditBtn = 'Editar';
  }

  enableControls() {
    this.textEditBtn = 'Guardar';
    this.editing = true
  }

  isInvalid(inputName: string): boolean {
    const control = this.formGroup.controls[inputName]
    return control.errors != null && control.touched
  }
}
