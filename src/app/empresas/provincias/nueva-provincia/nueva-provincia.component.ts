import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaCiudad } from 'src/app/api-client/api.types';
import { EmpresaCiudadService } from 'src/app/api-client/empresa-ciudad.service';
import { ProvinciaService } from 'src/app/api-client/provincia.service';

@Component({
  selector: 'app-nueva-provincia',
  templateUrl: './nueva-provincia.component.html',
  styleUrls: ['./nueva-provincia.component.css']
})
export class NuevaProvinciaComponent implements OnInit {
  ciudades: EmpresaCiudad[] = [];

  formGroup: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    ciudad_id: ['', Validators.required],
    estado: [true, Validators.required],
    deleted: [false, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private provinciaService: ProvinciaService,
    readonly ciudadService: EmpresaCiudadService
  ) {}

  ngOnInit(): void {
    this.obtenerCiudades()
  }

  agregarProvincia() {
    console.log(this.formGroup.value)
    this.provinciaService.create(this.formGroup.value).subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(['/empresa/provincias']);
      },
      (error) => {
        console.log(error);
        this.formGroup.reset();
      }
    );
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
