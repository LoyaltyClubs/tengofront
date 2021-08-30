import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaCiudad } from 'src/app/api-client/api.types';
import { EmpresaCiudadService } from 'src/app/api-client/empresa-ciudad.service';

@Component({
  selector: 'app-ciudades-nuevo',
  templateUrl: './ciudades-nuevo.component.html',
  styleUrls: ['./ciudades-nuevo.component.css'],
})
export class CiudadesNuevoComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    estado: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ciudadService: EmpresaCiudadService
  ) {}

  ngOnInit(): void {}

  agregarCiudad() {
    const ciudad: EmpresaCiudad = this.formGroup.value

    this.ciudadService.create(ciudad).subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(['/empresa/ciudades']);
      },
      (error) => {
        console.log(error);
        this.formGroup.reset();
      }
    );
  }
}
