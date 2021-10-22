import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/api-client/api.types';

@Component({
  selector: 'app-bloqueo-cliente',
  templateUrl: './bloqueo-cliente.component.html',
})
export class BloqueoClienteComponent implements OnInit {
  @Input() cliente: Cliente;
  formGroup: FormGroup= this.formBuilder.group({
  });

  constructor(    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  submit() {
    
  }
}
