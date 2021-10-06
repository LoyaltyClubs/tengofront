import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaCiudad } from 'src/app/api-client/api.types';
import { EmpresaCiudadService } from 'src/app/api-client/empresa-ciudad.service';
import { ProvinciaService } from 'src/app/api-client/provincia.service';

@Component({
  selector: 'app-editar-provincia',
  templateUrl: './editar-provincia.component.html',
  styleUrls: ['./editar-provincia.component.css']
})
export class EditarProvinciaComponent implements OnInit {
  ciudades: EmpresaCiudad[] = [];

  formGroup: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    ciudad_id: ['', Validators.required],
    estado: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private provinciaService: ProvinciaService,
    private activatedroute: ActivatedRoute,
    readonly ciudadService: EmpresaCiudadService
  ) {
    this.activatedroute.queryParams.subscribe((data) => {
      this.formGroup = this.formBuilder.group(data)
    });
  }

  ngOnInit(): void {
    this.obtenerCiudades()
  }

  editarProvincia() {
    this.provinciaService.edit(this.formGroup.value).subscribe(
      (res) => {
        console.log(res);
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
