import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaCiudadService } from 'src/app/api-client/empresa-ciudad.service';

@Component({
  selector: 'app-ciudades-editar',
  templateUrl: './ciudades-editar.component.html',
  styleUrls: ['./ciudades-editar.component.css'],
})
export class CiudadesEditarComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    estado: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ciudadService: EmpresaCiudadService,
    private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.queryParams.subscribe((data) => {
      this.formGroup = this.formBuilder.group(data)
    });
  }

  ngOnInit(): void {}

  editarCiudad() {
    this.ciudadService.edit(this.formGroup.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/empresa/ciudades']);
      },
      (error) => {
        console.log(error);
        this.formGroup.reset();
      }
    );
  }
}
