import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/api-client/api.types';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.component.html',
  styleUrls: ['./datos-cliente.component.css']
})
export class DatosClienteComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor(private controlContainer: ControlContainer) { 
  }

  ngOnInit(): void {
    this.formGroup = <FormGroup>this.controlContainer.control;
  }

  editarCliente(){

  }
}
