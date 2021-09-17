import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/api-client/api.types';
import { ClienteService } from '../../api-client/cliente.service';

@Component({
  selector: 'app-cliente-cargar',
  templateUrl: './cliente-cargar.component.html',
  styleUrls: ['./cliente-cargar.component.css'],
})
export class ClienteCargarComponent implements OnInit {
  clienteForm: FormGroup;
  selectedFile: File;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _clienteService: ClienteService
  ) {
    this.clienteForm = this.fb.group({
      archivo: ['', Validators.required],
      esCliente: 'true',
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)

  }

  agregarClientes() {
    this._clienteService.agregarClientes(this.selectedFile, 'true').subscribe(
      (res: Cliente[]) => {
        console.log(res)
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.clienteForm.reset();
      }
    );
  }
}
