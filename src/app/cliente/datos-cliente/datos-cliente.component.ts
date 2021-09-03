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
    this.disableControls();
  }

  editarCliente() {
    this.editing ? this.actualizarCliente() : this.enableControls()
  }

  actualizarCliente() {
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
}
